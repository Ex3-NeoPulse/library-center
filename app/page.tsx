import Image from "next/image";
import { books } from "../data/data";

export default function HomePage() {
  return (
    <>
      <main className="page-shell">
        <header className="topbar">
          <a className="brand" href="/" aria-label="Library Center หน้าแรก">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span>LIBRARY CENTER</span>
          </a>
          <p className="topbar-note">คลังผลงานเว็บไซต์</p>
        </header>

        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">A COLLECTION OF LIVE PROJECTS</p>
          <h1 id="page-title">
            ทุกผลงาน
            <br />
            <span>อยู่ในที่เดียว</span>
          </h1>
          <p className="intro-copy">
            เลือกชมเว็บไซต์ที่เผยแพร่แล้วจากภาพตัวอย่าง
            กดที่การ์ดเพื่อเปิดหน้าเว็บไซต์จริง
          </p>
          <div className="collection-count" aria-live="polite">
            <span className="count-number">{books.length.toString().padStart(2, "0")}</span>
            <span>เว็บไซต์ในคลัง</span>
          </div>
        </section>

        {books.length > 0 ? (
          <section className="gallery" aria-label="แกลเลอรีเว็บไซต์">
            {books.map((book) => (
              <article className="book-card" key={book.folderName}>
                <a
                  className="book-link"
                  href={book.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`เปิดเว็บไซต์ ${book.title} ในแท็บใหม่`}
                >
                  <div className="cover-frame">
                    <Image
                      className="cover-image"
                      src={book.image}
                      alt={`ภาพหน้าจอเว็บไซต์ ${book.title}`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    <span className="cover-badge">LIVE</span>
                  </div>
                  <div className="card-content">
                    <p className="card-kicker">WEB PROJECT</p>
                    <h2>{book.title}</h2>
                    <span className="visit-link">
                      เปิดเว็บไซต์ <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state" aria-live="polite">
            <span className="empty-mark" aria-hidden="true">
              ◇
            </span>
            <h2>คลังผลงานกำลังเริ่มต้น</h2>
            <p>เมื่อมีเว็บไซต์ใหม่และภาพ Screenshot ระบบจะเพิ่มผลงานที่นี่อัตโนมัติ</p>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>คัดสรรเว็บไซต์ที่พร้อมเข้าชม</p>
        <a href="https://microtronic.biz/" rel="noreferrer">
          Powered by Microtronic © 2026 Microtronic Co., Ltd.
        </a>
      </footer>
    </>
  );
}
