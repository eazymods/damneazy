import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faLink } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

function CardButton({ href, icon, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="server-card-btn"
      title={label}
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
      <span>{label}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] opacity-60" />
    </a>
  );
}

export default function ServerCards({ servers }) {
  if (!servers?.length) return null;

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {servers.map((s) => (
        <div key={s.id} className="server-card-modern">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-display text-2xl text-eazy-white">{s.name}</div>
              <div className="server-card-subtitle">{s.subtitle || ""}</div>
            </div>
            <div className="server-card-pill">{(s.tags && s.tags[0]) || "SERVER"}</div>
          </div>

          <p className="server-card-desc">
            {s.description || "—"}
          </p>

          {Array.isArray(s.tags) && s.tags.length > 0 && (
            <div className="server-card-tags">
              {s.tags.map((t) => (
                <span key={t} className="server-card-tag">{t}</span>
              ))}
            </div>
          )}

          <div className="server-card-actions">
            <CardButton href={s.links?.website} icon={faLink} label="Website" />
            <CardButton href={s.links?.youtube} icon={faYoutube} label="YouTube" />
            <CardButton href={s.links?.discord} icon={faDiscord} label="Discord" />
            <CardButton href={s.links?.store} icon={faLink} label="Store" />
            <CardButton href={s.links?.connect} icon={faLink} label="Connect" />
          </div>
        </div>
      ))}
    </div>
  );
}


