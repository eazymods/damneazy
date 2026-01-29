async function safeGetBattery() {
  try {
    if (!navigator.getBattery) return null;
    const battery = await navigator.getBattery();
    return {
      level: typeof battery.level === "number" ? Math.round(battery.level * 100) : null,
      charging: typeof battery.charging === "boolean" ? battery.charging : null,
    };
  } catch {
    return null;
  }
}

function safeGetConnection() {
  const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!c) return null;
  return {
    effectiveType: c.effectiveType || null,
    downlink: typeof c.downlink === "number" ? c.downlink : null,
    rtt: typeof c.rtt === "number" ? c.rtt : null,
    saveData: typeof c.saveData === "boolean" ? c.saveData : null,
  };
}

async function safeGetPublicIp(enabled) {
  if (!enabled) return null;
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data?.ip || null;
  } catch {
    return null;
  }
}

export async function gatherInfoSelf({ externalIpLookup = false } = {}) {
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const connection = safeGetConnection();
  const battery = await safeGetBattery();
  const ip = await safeGetPublicIp(externalIpLookup);

  const info = {
    timestamp: now.toISOString(),
    timezone: tz,
    language: navigator.language || null,
    languages: Array.isArray(navigator.languages) ? navigator.languages : null,
    platform: navigator.platform || null,
    userAgent: navigator.userAgent || null,
    screen: {
      width: window.screen?.width ?? null,
      height: window.screen?.height ?? null,
      availWidth: window.screen?.availWidth ?? null,
      availHeight: window.screen?.availHeight ?? null,
      colorDepth: window.screen?.colorDepth ?? null,
      pixelDepth: window.screen?.pixelDepth ?? null,
      devicePixelRatio: window.devicePixelRatio ?? null,
    },
    hardware: {
      cores: navigator.hardwareConcurrency ?? null,
      memoryGB: navigator.deviceMemory ?? null,
      maxTouchPoints: navigator.maxTouchPoints ?? null,
    },
    privacy: {
      cookiesEnabled: navigator.cookieEnabled ?? null,
      doNotTrack: navigator.doNotTrack ?? null,
    },
    network: {
      online: navigator.onLine ?? null,
      connection,
      publicIp: ip,
      publicIpNote: ip
        ? "Fetched from ipify (external request)."
        : externalIpLookup
          ? "Unable to fetch public IP (blocked/offline)."
          : "Not requested.",
    },
    battery,
  };

  return info;
}


