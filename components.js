// ============================================================
// Shadow's Den - Shared Components (nav + footer)
// Injected into every page via <script src="components.js">
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ── NAV ──────────────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { label: 'Home',     href: 'index.html' },
    { label: 'Books',    href: 'books.html' },
    { label: 'Gallery',  href: 'gallery.html' },
    { label: 'About me', href: 'about.html' },
    { label: 'Contact',  href: 'contact.html' },
  ];

  const navHTML = `
    <nav>
      <a href="index.html" class="nav-logo">
        <span class="moon">☽</span>
        <span>Shadow's Den</span>
      </a>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="nav-links">
        ${navLinks.map(l => `<a href="${l.href}" ${currentPage === l.href ? 'class="active"' : ''}>${l.label}</a>`).join('')}
      </div>
    </nav>
  `;

  // ── FOOTER ───────────────────────────────────────────────
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div>
            <div class="footer-logo">
              <span class="moon">☽</span>
              <span>Shadow's Den</span>
            </div>
            <p class="footer-tagline">My personal space for stories, photography, and everything in between.</p>
          </div>
          <div>
            <div class="footer-col-label">NAVIGATE</div>
            <div class="footer-links">
              ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
            </div>
          </div>
          <div>
            <div class="footer-col-label">FIND ME</div>
            <a href="https://discord.gg/jeg22GvzEQ" target="_blank" rel="noopener noreferrer" class="discord-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Discord
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Shadow's Den. All rights reserved.</span>
          <span>Built with ♥</span>
        </div>
      </div>
    </footer>
  `;

  // Inject nav and footer
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('open');
  });

});
