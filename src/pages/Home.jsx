import { useMemo, useRef } from "react";
import BatchTerminal from "../components/terminal/BatchTerminal";
import ServerCards from "../components/terminal/ServerCards";
import { damneazyConfig } from "../config/damneazy.config";

function normalizeKey(s) {
  return String(s || "").trim().toLowerCase();
}

const Home = () => {
  const serversRef = useRef(null);

  const cfg = useMemo(() => damneazyConfig, []);
  const help = cfg?.terminal?.ui?.help;
  const helpSidebar = useMemo(() => {
    const sections = help?.sections || [];
    const pickTitles = new Set(["quick start", "open things", "utility", "games (tiny)"]);
    const picked = sections
      .filter((s) => pickTitles.has(normalizeKey(s?.title)))
      .map((s) => {
        const rows = Array.isArray(s?.rows) ? s.rows : [];
        const limited = rows.slice(0, 4); // keep sidebar short
        return { ...s, rows: limited };
      });

    // If config changes and titles don't match, fallback to the first 3 sections.
    if (picked.length) return picked;
    return sections.slice(0, 3).map((s) => ({ ...s, rows: (s?.rows || []).slice(0, 4) }));
  }, [help]);

  return (
    <div className="min-h-screen bg-eazy-black">
      {/* Accent line */}
      <div className="fixed left-0 top-0 w-1 h-full bg-accent-primary z-50"></div>

      {/* Terminal Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute inset-0 scanlines opacity-20"></div>

        <div className="content-wide w-full relative z-10">
          <div className="grid xl:grid-cols-12 gap-10 items-start">
            <div className="xl:col-span-8">
              <BatchTerminal
                config={cfg}
                onScrollToServers={() =>
                  serversRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              />
            </div>

            <aside className="xl:col-span-4">
              <div className="server-card-modern help-sidebar">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-2xl text-eazy-white leading-tight">
                      {help?.title || (
                        <>
                          Help <span className="text-accent-primary">/</span> Guide
                        </>
                      )}
                    </div>
                    <div className="server-card-subtitle">
                      {help?.subtitle || "what this site is + how to use it"}
                    </div>
                  </div>
                </div>

                <p className="help-sidebar-text">{help?.intro || ""}</p>

                {helpSidebar.map((sec) => (
                  <div key={sec.title} className="help-sidebar-section">
                    <div className="help-sidebar-h">{sec.title}</div>
                    {(sec.rows || []).map((r, idx) => (
                      <div key={`${sec.title}-${idx}`} className="help-sidebar-row">
                        <span className="help-k">{r.k}</span> {r.v}
                      </div>
                    ))}
                  </div>
                ))}

                <div className="help-sidebar-section">
                  <div className="help-sidebar-h">More</div>
                  <div className="help-sidebar-row">
                    <span className="help-k">help</span> for the full list (in terminal)
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Server cards section */}
      <section ref={serversRef} id="servers" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="content-wide relative z-10">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="font-display text-5xl md:text-6xl text-eazy-white leading-[0.9]">
                Servers <span className="text-accent-primary">I own</span>
              </div>
              {/* keep spacing without the helper text */}
              <div className="mt-4 h-4"></div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="server-card-btn"
            >
              Back to terminal
            </a>
          </div>

          <ServerCards servers={cfg.servers} />
        </div>
      </section>
    </div>
  );
};

export default Home;
