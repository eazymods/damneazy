export const damneazyConfig = {
  owner: {
    handle: "damneazy",
    displayName: "Eazy",
    title: "Developer",
    brief:
      "I’m a passionate FiveM developer who crafts scripts, weapons, and maps for servers. I also own multiple successful servers of my own, with future non‑FiveM projects coming soon. If you’re interested in working with me, contact me.",
     stack: [
      "Lua (FiveM Development)",
      "ESX Legacy / QBCore Frameworks",
      "JavaScript / TypeScript",
      "Node.js & REST APIs",
      "React / Next.js",
      "HTML5 / CSS3 / Modern UI",
      "Tailwind / Responsive Design",
      "NUI & Game UI Systems",
      "Discord Bots (discord.js)",
      "SQL (oxmysql, Prisma)"
    ]
  },

  terminal: {
    title: "damneazy.bat",
    prompt: "C:\\damneazy>",
    externalIpLookup: true,
    ui: {
      help: {
        title: "Help / Guide",
        subtitle: "commands (simple)",
        intro:
          "Type a command in the terminal. If you’re not a “batch” user, don’t worry—just pick a command and press Enter.",
        sections: [
          {
            title: "Quick start",
            rows: [
              { k: "help", v: "show this list" },
              { k: "start", v: "show a quick “what to do next” menu" },
              { k: "info", v: "who I am (Eazy)" },
              { k: "servers", v: "list servers (then open links)" },
              { k: "socials", v: "show my links (Discord/YouTube/etc)" },
            ],
          },
          {
            title: "Open things",
            rows: [
              { k: "servers show <#>", v: "view details for a server" },
              { k: "servers open <#> <link>", v: "open a server link (discord/website/youtube/store/connect)" },
              { k: "websites", v: "list websites" },
              { k: "websites open <#>", v: "open a website" },
              { k: "open <discord|youtube|...>", v: "open a social link (or paste a URL)" },
            ],
          },
          {
            title: "Utility",
            rows: [
              { k: "clear / cls", v: "clear the terminal" },
              { k: "date / time", v: "show current time" },
              { k: "scroll servers", v: "jump down to the server cards" },
              { k: "status", v: "quick site/config status" },
              { k: "tip", v: "get a quick suggestion" },
              { k: "whoami", v: "show owner name/title" },
              { k: "echo <text>", v: "repeat text back" },
              { k: "load <thing>", v: "cool alias (load servers/projects/websites)" },
              { k: "process <thing>", v: "cool alias (ex: process servers)" },
            ],
          },
          {
            title: "Games (tiny)",
            rows: [
              { k: "games", v: "show game commands" },
              { k: "coin", v: "flip a coin" },
              { k: "dice [sides]", v: "roll dice (default 6)" },
              { k: "rps <pick>", v: "rock/paper/scissors" },
              { k: "guess", v: "start guessing game (1-100)" },
              { k: "guess <n>", v: "submit a guess" },
              { k: "play <game>", v: "same as above (play coin/dice/rps/guess)" },
            ],
          },
          {
            title: "Privacy (optional)",
            rows: [
              { k: "infoself short", v: "show basic browser-visible info" },
              { k: "infoself ip", v: "also fetch public IP (third-party API)" },
              { k: "infoself full", v: "show full details" },
            ],
          },
        ],
      },
    },
  },

  links: {
    discord: "https://discord.com/invite/ybndev",
    github: "https://github.com/eazymods",
    linktree: "https://linktr.ee/ybnworld",
    youtube: "https://youtube.com/@YBNDevelopment",
    store: "https://dev.ybn.world/",
    website: "https://damneazy.dev",
  },

  servers: [
    {
      id: "ybn-development",
      name: "YBN Development",
      subtitle: "Development hub",
      description: "Development hub for scripts, releases, and updates.",
      tags: ["Dev", "Community"],
      links: {
        website: "https://dev.ybn.world",
        youtube: "https://youtube.com/@YBNDevelopment",
        discord: "https://discord.com/invite/ybndev",
      },
    },
    {
      id: "ybn-leaks",
      name: "YBN Leaks",
      subtitle: "Graphics, sounds, gameplay improvements",
      description: "Graphics mods, sound packs, and more gameplay improvement drops.",
      tags: ["Leaks", "Mods"],
      links: {
        store: "https://discord.com/invite/ybnleaks",
        discord: "https://discord.com/invite/ybnleaks",
      },
    },
    {
      id: "ls-rp",
      name: "YBN LS Roleplay",
      subtitle: "Whitelisted Serious RP",
      description: "Realistic Server with a Realistic Economy - focused on realistic gameplay and economy.",
      tags: ["RP", "Whitelisted"],
      links: {
        youtube: "https://youtube.com/@YBNServers",
        store: "https://shop.ybn.world/",
        discord: "https://discord.com/invite/ybn",
        connect: "",
      },
    },
    {
      id: "ls-shooting",
      name: "YBN LS Shooting",
      subtitle: "#1 Shooting & Scenes",
      description: "The biggest server I own with over 200 players online daily, featuring a wide range of shooting modes and scenes.",
      tags: ["Shooting", "Scenes"],
      links: {
        youtube: "https://youtube.com/@YBNServers",
        store: "https://shop.ybn.world/",
        discord: "https://discord.com/invite/ybnls",
        connect: "",
      },
    },
    {
      id: "sts-shooting",
      name: "STS Shooting",
      subtitle: "Optimized PvP",
      description: "Most optimized and simple PvP server — clean fights, fast load, no bloat.",
      tags: ["PvP", "Optimized"],
      links: {
        store: "https://sts-shooting.tebex.io/",
        discord: "https://discord.com/invite/stsshooting",
        connect: "",
      },
    },
    {
      id: "ybn-semi",
      name: "YBN Semi",
      subtitle: "Coming soon — public RP",
      description: "A public RP server for semi-serious roleplayers. (Coming soon)",
      tags: ["Semi Serious", "Coming Soon"],
      links: {
        youtube: "https://youtube.com/@YBNServers",
        discord: "https://discord.com/invite/ybnsemi",
      },
    },
    {
      id: "osrp",
      name: "Oklahoma State RP",
      subtitle: "First server ever owned by me",
      description: "(Retired Server Now) The first vMenu server I owned based in Oklahoma - with R3site.",
      tags: ["vMenu", "Retired"],
      links: {
        youtube: "https://www.youtube.com/@OklahomaStateRoleplay",
        discord: "https://discord.gg/3YmTef7yb7",
      },
    },
  ],

  websites: [
    {
      id: "main",
      name: "Personal",
      url: "https://damneazy.dev",
      description: "Personal site / command UI.",
    },
    {
      id: "store",
      name: "YBN Dev Store",
      url: "https://dev.ybn.world/",
      description: "Scripts & FiveM Products.",
    },
    {
      id: "serverstore",
      name: "YBN Server Store",
      url: "https://shop.ybn.world/",
      description: "Server store for all of my FiveM Servers.",
    },
    {
      id: "stsstore",
      name: "STS Shooting Store",
      url: "https://sts-shooting.tebex.io/",
      description: "STS Shooting & Scenes server store.",
    },
    {
      id: "forums",
      name: "Forums",
      url: "https://forums.ybn.world/",
      description: "Forums page for my Serious Roleplay server.",
    },
    {
      id: "turfs",
      name: "Turfs",
      url: "https://turfs.ybn.world/",
      description: "Turf map for my Serious Roleplay server.",
    },
    {
      id: "drops",
      name: "Drops",
      url: "https://drops.ybn.world/",
      description: "Drop Weapon Wheel for my Serious Roleplay server.",
    },
    {
      id: "ucp",
      name: "UCP",
      url: "https://ucp.ybn.world/",
      description: "User Control Panel for my Serious Roleplay server.",
    },
  ],

  projects: {
    past: [
      {
        name: "FiveM systems",
        details: "Framework features, gameplay systems, UI/HUD, optimizations.",
      },
    ],
    future: [
      {
        name: "More open-source tooling",
        details: "Developer tools, templates, and automation.",
      },
      {
        name: "Server ecosystem",
        details: "More servers + better integrations across web/discord/in-game.",
      },
    ],
  },
};




