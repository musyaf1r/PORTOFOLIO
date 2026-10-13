import type { CSSProperties } from "react";
import Bubbles from "@/components/Bubbles";
import DepthGauge from "@/components/DepthGauge";
import Waves from "@/components/Waves";
import { contacts, profile, projects, stack } from "@/lib/data";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Page() {
  let chipIndex = 0;

  return (
    <>
      <header className="nav">
        <a href="#top" className="nav-logo">
          {profile.nickname}
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#projects">Proyek</a>
          <a href="#stack">Teknologi</a>
          <a href="#contact">Kontak</a>
        </nav>
      </header>

      <DepthGauge />

      <main>
        {/* Permukaan */}
        <section id="top" className="hero">
          <div className="sun" aria-hidden="true" />
          <div className="hero-inner">
            <p className="hero-role rise" style={step(0)}>
              {profile.role}
            </p>
            <h1 className="rise" style={step(1)}>
              <span>Satrya</span>
              <span className="indent">Khanzaz</span>
            </h1>
            <p className="hero-lede rise" style={step(2)}>
              {profile.lede}
            </p>
            <div className="hero-actions rise" style={step(3)}>
              <a className="btn btn-solid" href="#about">
                Mulai menyelam
              </a>
              <a className="btn btn-ghost" href="https://github.com/musyaf1r" target="_blank" rel="noreferrer">
                Lihat GitHub
              </a>
            </div>
          </div>
          <Waves />
        </section>

        {/* Di bawah permukaan */}
        <div className="dive">
          <Bubbles />

          <section id="about" className="zone zone-shallows">
            <div className="wrap about-grid">
              <h2>Halo, saya {profile.nickname}.</h2>
              <div>
                {profile.about.map((text) => (
                  <p key={text} className="prose">
                    {text}
                  </p>
                ))}
                <dl className="facts">
                  {profile.facts.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section id="projects" className="zone zone-reef">
            <div className="wrap">
              <h2>Proyek</h2>
              <p className="section-note">Semua kode ada di GitHub. Klik salah satu untuk melihat repositorinya.</p>
              <ul className="reef">
                {projects.map((p) => (
                  <li key={p.name}>
                    <a className="reef-item" href={p.href} target="_blank" rel="noreferrer">
                      <div className="reef-main">
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                      </div>
                      <div className="reef-meta">
                        {p.status && <span className="reef-status">{p.status}</span>}
                        <ul className="tags">
                          {p.tags.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="stack" className="zone zone-deep">
            <div className="wrap">
              <h2>Teknologi yang saya pakai</h2>
              <div className="stack-groups">
                {stack.map((g) => (
                  <div key={g.title} className="stack-group">
                    <h3>{g.title}</h3>
                    <ul className="chips">
                      {g.items.map((item) => {
                        const n = chipIndex++;
                        return (
                          <li key={item} className="chip" style={{ "--n": n } as CSSProperties}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="zone zone-abyss">
            <div className="wrap">
              <h2>Mau bikin sesuatu bareng?</h2>
              <p className="section-note">Pilih kanal yang paling nyaman untukmu.</p>
              <ul className="contact-list">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} target="_blank" rel="noreferrer">
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-handle">{c.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <footer className="footer">
                <p>© 2026 {profile.fullName}. Dibuat dengan Next.js.</p>
              </footer>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
