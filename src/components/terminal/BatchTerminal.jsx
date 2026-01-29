import { useEffect, useMemo, useRef, useState } from "react";
import { gatherInfoSelf } from "../../utils/infoself";

function isProbablyUrl(s) {
  return /^https?:\/\//i.test(s);
}

function kv(label, value) {
  const v = value === null || value === undefined || value === "" ? "N/A" : String(value);
  return `${label}: ${v}`;
}

function line() {
  return "------------------------------------------------------------";
}

function header(title) {
  const t = String(title || "").toUpperCase();
  const pad = Math.max(1, 60 - t.length);
  return `=== ${t} ${"=".repeat(pad)}`;
}

function block(title, bodyLines, footerLines = []) {
  const out = [header(title), ...bodyLines];
  if (footerLines.length) out.push(line(), ...footerLines);
  return out;
}

function normalizeKey(s) {
  return String(s || "").trim().toLowerCase();
}

function parseIndexOrId(arg, items) {
  const a = String(arg || "").trim();
  if (!a) return { ok: false, reason: "missing" };
  const n = Number(a);
  if (Number.isFinite(n) && String(n) === a) {
    const idx = n - 1;
    if (idx < 0 || idx >= items.length) return { ok: false, reason: "range" };
    return { ok: true, idx };
  }
  const idx = items.findIndex((x) => normalizeKey(x?.id) === normalizeKey(a));
  if (idx === -1) return { ok: false, reason: "notfound" };
  return { ok: true, idx };
}

function randInt(min, max) {
  const a = Math.ceil(Number(min));
  const b = Math.floor(Number(max));
  if (!Number.isFinite(a) || !Number.isFinite(b) || a > b) return null;
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

export default function BatchTerminal({ config, onScrollToServers }) {
  const prompt = config?.terminal?.prompt || "C:\\>";
  const title = config?.terminal?.title || "terminal";

  const sessionStartedAt = useMemo(() => Date.now(), []);
  const [guessGame, setGuessGame] = useState(null); // { answer: number, tries: number }

  const initialLines = useMemo(() => {
    const owner = config?.owner?.displayName || "damneazy";
    return [
      { kind: "out", text: `${title} — interactive terminal` },
      { kind: "out", text: `Welcome. I’m ${owner}. Type 'start' or 'help'.` },
      { kind: "out", text: `Quick picks: servers | socials | projects | websites` },
      { kind: "out", text: "" },
    ];
  }, [config, title]);

  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Always-typing behavior: focus the terminal input when the user presses keys anywhere.
  useEffect(() => {
    const onWindowKeyDown = (e) => {
      // Ignore shortcuts / navigation keys that shouldn't steal focus.
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (
        e.key === "Shift" ||
        e.key === "Control" ||
        e.key === "Meta" ||
        e.key === "Alt" ||
        e.key === "Tab" ||
        e.key.startsWith("Arrow") ||
        e.key === "Escape"
      ) {
        return;
      }

      const active = document.activeElement;
      const tag = active?.tagName?.toLowerCase();
      const isEditable =
        tag === "input" ||
        tag === "textarea" ||
        active?.isContentEditable;

      if (!isEditable) inputRef.current?.focus();
    };

    window.addEventListener("keydown", onWindowKeyDown);
    return () => window.removeEventListener("keydown", onWindowKeyDown);
  }, []);

  useEffect(() => {
    const el = outputRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines]);

  function push(out) {
    setLines((prev) => [
      ...prev,
      ...out.map((text) => ({ kind: "out", text })),
    ]);
  }

  function pushRaw(raw) {
    setLines((prev) => [...prev, ...raw]);
  }

  function clear() {
    setLines(initialLines);
  }

  function openLink(url) {
    if (!url) return false;
    window.open(url, "_blank", "noopener,noreferrer");
    return true;
  }

  function renderHelp() {
    const helpCfg = config?.terminal?.ui?.help;
    const rows = (helpCfg?.sections || []).flatMap((sec) => sec?.rows || []);
    const commandLines =
      rows.length
        ? rows.map((r) => `  ${String(r.k || "").trim()}  — ${String(r.v || "").trim()}`)
        : [];

    return block(
      "help",
      [
        ...(commandLines.length
          ? ["Commands:", ...commandLines]
          : [
              "Commands:",
              "  help — show commands",
              "  start — quick menu",
              "  servers — list servers",
              "  socials — show links",
            ]),
      ],
      [
        "Examples:",
        "  start",
        "  servers show 1",
        "  servers open 1 discord",
        "  open discord",
      ],
    );
  }

  function renderStart() {
    return block(
      "start",
      [
        "What do you want to do?",
        "  servers   — list servers (then: servers show 1)",
        "  socials   — show my links",
        "  projects  — past/future work",
        "  websites  — open sites",
        "",
        "Tip: type `help` for the full command list.",
      ],
    );
  }

  function renderStatus() {
    const owner = config?.owner?.displayName || "N/A";
    const serverCount = (config?.servers || []).length;
    const site = config?.links?.website || "N/A";
    const uptimeMs = Math.max(0, Date.now() - sessionStartedAt);
    const uptimeSec = Math.floor(uptimeMs / 1000);
    const mm = String(Math.floor(uptimeSec / 60)).padStart(2, "0");
    const ss = String(uptimeSec % 60).padStart(2, "0");
    return block("status", [`owner: ${owner}`, `servers: ${serverCount}`, `site: ${site}`, `uptime: ${mm}:${ss}`]);
  }

  function renderGames() {
    return block(
      "games",
      [
        "Pick one:",
        "  play coin            — flip a coin",
        "  play dice [sides]    — roll (default 6)",
        "  play rps <rock|paper|scissors>",
        "  play guess           — start a number guessing game (1-100)",
        "",
        "Shortcuts: coin | dice | rps | guess",
      ],
      ["Examples:", "  coin", "  dice 20", "  rps rock", "  guess", "  guess 72"],
    );
  }

  function startGuessGame() {
    const answer = randInt(1, 100);
    if (answer === null) return block("guess", ["Unable to start game."]);
    setGuessGame({ answer, tries: 0 });
    return block("guess", ["Guess a number from 1 to 100.", "Type: guess <number>"]);
  }

  function handleGuess(n) {
    if (!guessGame) return block("guess", ["No game running.", "Type: guess (to start)"]);
    const num = Number(n);
    if (!Number.isFinite(num)) return block("guess", ["Usage: guess <number>"]);
    const tries = (guessGame.tries || 0) + 1;
    if (num === guessGame.answer) {
      setGuessGame(null);
      return block("guess", [`Correct. Number was ${num}.`, `Tries: ${tries}`], ["Next: games"]);
    }
    setGuessGame({ ...guessGame, tries });
    return block("guess", [num < guessGame.answer ? "Too low." : "Too high.", `Tries: ${tries}`]);
  }

  function renderInfo(sub) {
    const o = config?.owner || {};
    const mode = normalizeKey(sub) || "brief";
    if (mode === "stack") {
      return block(
        "info / stack",
        [
          `Stack: ${(o.stack || []).join(" · ") || "N/A"}`,
        ],
        ["Next: info brief"],
      );
    }
    return block(
      "info",
      [
        `${o.displayName || "Eazy"} — ${o.title || "Developer"}`,
        "",
        o.brief || "N/A",
      ],
      ["Next: info stack | socials"],
    );
  }

  function renderServersList() {
    const servers = config?.servers || [];
    if (!servers.length) return block("servers", ["No servers configured yet."]);
    const body = servers.map((s, i) => {
      const sub = s.subtitle ? ` — ${s.subtitle}` : "";
      return `[${i + 1}] ${s.name}${sub}`;
    });
    return block(
      "servers",
      body,
      [
        "Next:",
        "  servers show 1",
        "  servers open 1 discord",
        "  scroll servers",
      ],
    );
  }

  function renderServerShow(idx) {
    const servers = config?.servers || [];
    const s = servers[idx];
    if (!s) return block("servers show", ["Server not found."]);
    const links = s.links || {};
    const linkKeys = Object.keys(links).filter((k) => links[k]);
    return block(
      `servers / show #${idx + 1}`,
      [
        `${s.name}`,
        s.subtitle ? `Subtitle: ${s.subtitle}` : null,
        s.description ? `About: ${s.description}` : null,
        Array.isArray(s.tags) && s.tags.length ? `Tags: ${s.tags.join(" · ")}` : null,
        "",
        "Links:",
        ...(linkKeys.length ? linkKeys.map((k) => `  - ${k}`) : ["  - none configured"]),
      ].filter(Boolean),
      [
        "Next:",
        `  servers open ${idx + 1} discord`,
        `  servers open ${idx + 1} website`,
      ],
    );
  }

  function renderWebsitesList() {
    const websites = config?.websites || [];
    if (!websites.length) return block("websites", ["No websites configured yet."]);
    const body = websites.map((w, i) => `[${i + 1}] ${w.name}${w.url ? ` — ${w.url}` : ""}`);
    return block("websites", body, ["Next: websites open 1"]);
  }

  function renderProjects(sub) {
    const p = config?.projects || {};
    const past = p.past || [];
    const future = p.future || [];
    const mode = normalizeKey(sub) || "all";

    const renderList = (xs) => (xs.length ? xs.map((x) => `- ${x.name}: ${x.details}`) : ["- N/A"]);

    if (mode === "past") {
      return block("projects / past", renderList(past), ["Next: projects future"]);
    }
    if (mode === "future") {
      return block("projects / future", renderList(future), ["Next: projects past"]);
    }

    return block(
      "projects",
      [
        "Past:",
        ...renderList(past).map((x) => `  ${x}`),
        "",
        "Future:",
        ...renderList(future).map((x) => `  ${x}`),
      ],
      ["Next: projects past | projects future"],
    );
  }

  function renderSocials() {
    const l = config?.links || {};
    return block(
      "socials",
      [
        `discord: ${l.discord || "N/A"}`,
        `linktree: ${l.linktree || "N/A"}`,
        `github : ${l.github || "N/A"}`,
        `youtube: ${l.youtube || "N/A"}`,
        `store  : ${l.store || "N/A"}`,
        `website: ${l.website || "N/A"}`,
      ],
      ["Next: open discord | open github | open website"],
    );
  }

  async function runCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setHistory((prev) => [trimmed, ...prev].slice(0, 50));
    setHistoryIdx(-1);

    pushRaw([{ kind: "in", text: `${prompt} ${trimmed}` }]);

    const [cmdRaw, ...args] = trimmed.split(/\s+/);
    const cmd = (cmdRaw || "").toLowerCase();
    const sub = args[0] ? normalizeKey(args[0]) : "";

    if (cmd === "clear" || cmd === "cls") {
      clear();
      return;
    }

    if (cmd === "help" || cmd === "?") {
      push(renderHelp());
      return;
    }

    if (cmd === "start" || cmd === "menu") {
      push(renderStart());
      return;
    }

    if (cmd === "status") {
      push(renderStatus());
      return;
    }

    if (cmd === "games") {
      push(renderGames());
      return;
    }

    if (cmd === "info") {
      push(renderInfo(args[0]));
      return;
    }

    if (cmd === "servers") {
      const servers = config?.servers || [];
      if (!sub || sub === "list") {
        push(renderServersList());
        return;
      }

      if (sub === "show") {
        const res = parseIndexOrId(args[1], servers);
        if (!res.ok) {
          push(block("servers show", ["Usage: servers show <#>"], ["Example: servers show 1"]));
          return;
        }
        push(renderServerShow(res.idx));
        return;
      }

      if (sub === "open") {
        const res = parseIndexOrId(args[1], servers);
        const linkKey = normalizeKey(args[2]);
        if (!res.ok || !linkKey) {
          push(block("servers open", ["Usage: servers open <#> <discord|website|youtube|store|connect>"]));
          return;
        }
        const s = servers[res.idx];
        const url = s?.links?.[linkKey];
        if (!url) {
          push(block("servers open", [`No link '${linkKey}' configured for ${s?.name || "that server"}.`]));
          return;
        }
        openLink(url);
        push(block("servers open", [`Opened: ${s.name} / ${linkKey}`]));
        return;
      }

      push(block("servers", ["Unknown subcommand.", "Try: servers list | servers show <#> | servers open <#> discord"]));
      return;
    }

    if (cmd === "websites") {
      const websites = config?.websites || [];
      if (!sub || sub === "list") {
        push(renderWebsitesList());
        return;
      }

      if (sub === "open") {
        const res = parseIndexOrId(args[1], websites);
        if (!res.ok) {
          push(block("websites open", ["Usage: websites open <#>"], ["Example: websites open 1"]));
          return;
        }
        const w = websites[res.idx];
        if (!w?.url) {
          push(block("websites open", ["No URL configured for that website."]));
          return;
        }
        openLink(w.url);
        push(block("websites open", [`Opened: ${w.name}`]));
        return;
      }

      push(block("websites", ["Unknown subcommand.", "Try: websites list | websites open <#>"]));
      return;
    }

    if (cmd === "projects") {
      push(renderProjects(args[0]));
      return;
    }

    if (cmd === "socials") {
      push(renderSocials());
      return;
    }

    if (cmd === "date" || cmd === "time") {
      push([new Date().toString()]);
      return;
    }

    if (cmd === "tip") {
      const tips = [
        "Try: start",
        "Try: servers (then: servers show 1)",
        "Try: socials (then: open discord)",
        "Try: games",
        "Pro tip: use ↑/↓ for command history.",
      ];
      push(block("tip", [tips[Math.floor(Math.random() * tips.length)]]));
      return;
    }

    if (cmd === "echo") {
      push([args.join(" ")]);
      return;
    }

    if (cmd === "whoami") {
      push(block("whoami", [`${config?.owner?.displayName || "Eazy"} — ${config?.owner?.title || "Developer"}`]));
      return;
    }

    if (cmd === "config") {
      push([
        "Edit the config here:",
        "  src/config/damneazy.config.js",
      ]);
      return;
    }

    if (cmd === "scroll") {
      const what = (args[0] || "").toLowerCase();
      if (what === "servers") {
        onScrollToServers?.();
        push(block("scroll", ["Scrolling to server cards..."]));
        return;
      }
      push(["Usage: scroll servers"]);
      return;
    }

    if (cmd === "open") {
      const target = args.join(" ").trim();
      if (!target) {
        push(block("open", ["Usage: open <discord|github|youtube|store|website|https://...>"]));
        return;
      }

      const links = config?.links || {};
      const key = target.toLowerCase();
      const url =
        links[key] ||
        (isProbablyUrl(target) ? target : null);

      if (!url) {
        push(block("open", [`Unknown link '${target}'.`], ["Next: socials"]));
        return;
      }

      if (!openLink(url)) {
        push(block("open", [`Unable to open: ${url}`]));
        return;
      }

      push(block("open", [`Opened: ${key}`], [`URL: ${url}`]));
      return;
    }

    // Games (shortcuts + play)
    if (cmd === "play") {
      const game = normalizeKey(args[0]);
      if (!game) {
        push(block("play", ["Usage: play <coin|dice|rps|guess>"], ["Next: games"]));
        return;
      }

      if (game === "coin") {
        push(block("coin", [Math.random() < 0.5 ? "Heads" : "Tails"]));
        return;
      }

      if (game === "dice") {
        const sides = args[1] ? Number(args[1]) : 6;
        const s = Number.isFinite(sides) ? Math.max(2, Math.min(1000, Math.floor(sides))) : 6;
        const rolled = randInt(1, s) ?? 1;
        push(block("dice", [`Rolled: ${rolled} (1-${s})`]));
        return;
      }

      if (game === "rps") {
        const pick = normalizeKey(args[1]);
        const allowed = ["rock", "paper", "scissors"];
        if (!allowed.includes(pick)) {
          push(block("rps", ["Usage: play rps <rock|paper|scissors>"], ["Example: play rps rock"]));
          return;
        }
        const cpu = allowed[randInt(0, allowed.length - 1) ?? 0];
        if (cpu === pick) {
          push(block("rps", [`You: ${pick}`, `CPU: ${cpu}`, "Result: draw"]));
          return;
        }
        const win =
          (pick === "rock" && cpu === "scissors") ||
          (pick === "paper" && cpu === "rock") ||
          (pick === "scissors" && cpu === "paper");
        push(block("rps", [`You: ${pick}`, `CPU: ${cpu}`, `Result: ${win ? "win" : "lose"}`]));
        return;
      }

      if (game === "guess") {
        push(startGuessGame());
        return;
      }

      push(block("play", [`Unknown game '${game}'.`], ["Next: games"]));
      return;
    }

    if (cmd === "coin") {
      push(block("coin", [Math.random() < 0.5 ? "Heads" : "Tails"]));
      return;
    }

    if (cmd === "dice") {
      const sides = args[0] ? Number(args[0]) : 6;
      const s = Number.isFinite(sides) ? Math.max(2, Math.min(1000, Math.floor(sides))) : 6;
      const rolled = randInt(1, s) ?? 1;
      push(block("dice", [`Rolled: ${rolled} (1-${s})`]));
      return;
    }

    if (cmd === "rps") {
      const pick = normalizeKey(args[0]);
      const allowed = ["rock", "paper", "scissors"];
      if (!allowed.includes(pick)) {
        push(block("rps", ["Usage: rps <rock|paper|scissors>"], ["Example: rps rock"]));
        return;
      }
      const cpu = allowed[randInt(0, allowed.length - 1) ?? 0];
      if (cpu === pick) {
        push(block("rps", [`You: ${pick}`, `CPU: ${cpu}`, "Result: draw"]));
        return;
      }
      const win =
        (pick === "rock" && cpu === "scissors") ||
        (pick === "paper" && cpu === "rock") ||
        (pick === "scissors" && cpu === "paper");
      push(block("rps", [`You: ${pick}`, `CPU: ${cpu}`, `Result: ${win ? "win" : "lose"}`]));
      return;
    }

    if (cmd === "guess") {
      if (!args.length) {
        push(startGuessGame());
        return;
      }
      push(handleGuess(args[0]));
      return;
    }

    // "Cooler" aliases for non-batch users who like verbs
    if (cmd === "load") {
      const what = normalizeKey(args[0]);
      if (what === "servers" || what === "server") {
        push(renderServersList());
        return;
      }
      if (what === "projects") {
        push(renderProjects(args[1]));
        return;
      }
      if (what === "websites") {
        push(renderWebsitesList());
        return;
      }
      push(block("load", ["Usage: load <servers|projects|websites>"], ["Example: load servers"]));
      return;
    }

    if (cmd === "process") {
      const what = normalizeKey(args[0]);
      if (what === "servers") {
        push(block("process / servers", ["Indexing servers... done."], ["Next: servers"]));
        return;
      }
      push(block("process", ["Usage: process <servers>"], ["Example: process servers"]));
      return;
    }

    if (cmd === "infoself") {
      const mode = normalizeKey(args[0]) || "short";
      const wantsIp = mode === "ip" || mode === "full";
      push(block("infoself", ["Collecting available client-side info..."]));
      const info = await gatherInfoSelf({
        externalIpLookup: Boolean(config?.terminal?.externalIpLookup) && wantsIp,
      });

      const shortOut = [
        kv("timezone", info.timezone),
        kv("language", info.language),
        kv("platform", info.platform),
        kv("resolution", info.screen?.width && info.screen?.height ? `${info.screen.width}x${info.screen.height}` : null),
        kv("cores", info.hardware?.cores),
        kv("memoryGB", info.hardware?.memoryGB ? `${info.hardware.memoryGB}GB` : null),
        kv("online", info.network?.online),
      ];

      if (mode === "short") {
        push(
          block(
            "infoself / short",
            shortOut,
            [
              "Next: infoself full",
              "Note: websites cannot read local files/apps without permission.",
            ],
          ),
        );
        return;
      }

      if (mode === "ip") {
        push(
          block(
            "infoself / ip",
            [
              ...shortOut,
              kv("publicIp", info.network?.publicIp),
              `note: ${info.network?.publicIpNote || ""}`,
            ],
            ["Next: infoself full"],
          ),
        );
        return;
      }

      push(
        block(
          "infoself / full",
          [
            kv("timestamp", info.timestamp),
            kv("timezone", info.timezone),
            kv("language", info.language),
            kv("languages", info.languages ? info.languages.join(", ") : null),
            kv("platform", info.platform),
            kv("userAgent", info.userAgent),
            "",
            "Screen:",
            kv("resolution", info.screen?.width && info.screen?.height ? `${info.screen.width}x${info.screen.height}` : null),
            kv("avail", info.screen?.availWidth && info.screen?.availHeight ? `${info.screen.availWidth}x${info.screen.availHeight}` : null),
            kv("colorDepth", info.screen?.colorDepth),
            kv("devicePixelRatio", info.screen?.devicePixelRatio),
            "",
            "Hardware:",
            kv("cores", info.hardware?.cores),
            kv("memoryGB", info.hardware?.memoryGB ? `${info.hardware.memoryGB}GB` : null),
            kv("maxTouchPoints", info.hardware?.maxTouchPoints),
            "",
            "Network:",
            kv("online", info.network?.online),
            kv("connection", info.network?.connection?.effectiveType ? info.network.connection.effectiveType : null),
            kv("downlink", info.network?.connection?.downlink ? `${info.network.connection.downlink} Mbps` : null),
            kv("rtt", info.network?.connection?.rtt ? `${info.network.connection.rtt} ms` : null),
            kv("saveData", info.network?.connection?.saveData),
            kv("publicIp", info.network?.publicIp),
            `note: ${info.network?.publicIpNote || ""}`,
            "",
            "Privacy:",
            kv("cookiesEnabled", info.privacy?.cookiesEnabled),
            kv("doNotTrack", info.privacy?.doNotTrack),
            "",
            info.battery
              ? `Battery: ${info.battery.level ?? "N/A"}%  charging: ${info.battery.charging ?? "N/A"}`
              : "Battery: N/A",
            "",
            "Limitations: websites can't read your local files, installed apps, real name, or exact location without explicit permissions.",
          ],
          ["Next: infoself short | infoself ip"],
        ),
      );
      return;
    }

    push([
      `'${cmdRaw}' is not recognized as a command.`,
      "Type `help` for a list of commands.",
    ]);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const v = input;
      setInput("");
      void runCommand(v);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIdx = Math.min(historyIdx + 1, history.length - 1);
      if (nextIdx >= 0) {
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx] || "");
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = historyIdx - 1;
      if (nextIdx < 0) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx] || "");
      }
    }
  }

  return (
    <div
      className="batch-shell-modern"
      onPointerDown={() => inputRef.current?.focus()}
    >
      <div className="batch-header">
        <div className="batch-dots">
          <div className="terminal-dot bg-[#ff5f57]"></div>
          <div className="terminal-dot bg-[#febc2e]"></div>
          <div className="terminal-dot bg-[#28c840]"></div>
        </div>
        <span className="batch-title">{title}</span>
        <span className="batch-meta">interactive</span>
      </div>

      <div ref={outputRef} className="batch-output custom-scrollbar">
        {lines.map((l, idx) => (
          <div
            key={`${idx}-${l.kind}`}
            className={
              l.kind === "in"
                ? "batch-line batch-line-in"
                : l.kind === "err"
                  ? "batch-line batch-line-err"
                  : "batch-line batch-line-out"
            }
          >
            {l.text || "\u00A0"}
          </div>
        ))}

        <div className="batch-input-line">
          <span className="batch-prompt">{prompt}</span>
          <input
            ref={inputRef}
            className="batch-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
          />
        </div>
      </div>
    </div>
  );
}


