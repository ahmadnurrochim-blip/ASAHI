/* ============================================================
   LEADERBOARD POPUP — Asahi Mandiri
   ------------------------------------------------------------
   Otomatis inject popup leaderboard top 3 ke semua halaman.
   Ambil data dari Firestore (users collection).
   ============================================================ */

(function () {
  // ---------- KONFIGURASI ----------
  const CONFIG = {
    title:       'Leaderboard',
    subtitle:    'Top 3 Player',
    headerIcon:  'fa-crown',
    buttonText:  'Lihat Semua',
    buttonHref:  'leaderboard.html',
    buttonIcon:  'fa-list-ol',
    // localStorage key
    storageKey:  'asahi_lb_popup_closed',
    // Fallback data kalau Firestore kosong / belum login
    fallback: [
      { nama: 'Budi S.',   totalPoin: 9800 },
      { nama: 'Siti A.',   totalPoin: 9200 },
      { nama: 'Rina K.',   totalPoin: 8500 }
    ]
  };

  // ---------- JIKA USER SUDAH PERNAH MENUTUP POPUP ----------
  try {
    if (localStorage.getItem(CONFIG.storageKey) === '1') return;
  } catch (e) { /* abaikan */ }

  // ---------- RENDER POPUP DENGAN DATA ----------
  function renderPopup(topPlayers) {
    const popup = document.createElement('div');
    popup.className = 'leveling-access';
    popup.id = 'levelingAccess';
    popup.setAttribute('role', 'complementary');
    popup.setAttribute('aria-label', 'Leaderboard Asahi Mandiri');

    // Susun baris top 3
    const medals = ['🥇', '🥈', '🥉'];
    const rowsHtml = topPlayers.slice(0, 3).map((p, i) => `
      <div class="lb-popup-row">
        <div class="lb-popup-medal">${medals[i]}</div>
        <div class="lb-popup-info">
          <div class="lb-popup-name">${escapeHtml(p.nama || 'Anonim')}</div>
          <div class="lb-popup-poin">${(p.totalPoin || 0).toLocaleString('id-ID')} poin</div>
        </div>
      </div>
    `).join('');

    popup.innerHTML = `
      <button class="leveling-close" id="levelingClose" aria-label="Tutup">
        <i class="fas fa-times"></i>
      </button>

      <div class="leveling-header">
        <div class="leveling-icon">
          <i class="fas ${CONFIG.headerIcon}"></i>
        </div>
        <div>
          <div class="leveling-title">${CONFIG.title}</div>
          <div class="leveling-subtitle">${CONFIG.subtitle}</div>
        </div>
      </div>

      <div class="lb-popup-list">
        ${rowsHtml}
      </div>

      <a href="${CONFIG.buttonHref}" class="leveling-button">
        <i class="fas ${CONFIG.buttonIcon}"></i>
        ${CONFIG.buttonText}
      </a>
    `;

    document.body.appendChild(popup);

    // ---------- TOMBOL CLOSE ----------
    const btnClose = document.getElementById('levelingClose');
    btnClose.addEventListener('click', () => {
      popup.classList.add('is-closing');
      try {
        localStorage.setItem(CONFIG.storageKey, '1');
      } catch (e) { /* abaikan */ }
      setTimeout(() => popup.remove(), 300);
    });
  }

  // ---------- ESCAPE HTML (anti-XSS) ----------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---------- AMBIL DATA DARI FIRESTORE ----------
  async function fetchLeaderboard() {
    try {
      // Tunggu Firebase siap (max 3 detik)
      const waitForFirebase = () => new Promise((resolve) => {
        if (window.AsahiFirebase) return resolve(true);
        let tries = 0;
        const timer = setInterval(() => {
          tries++;
          if (window.AsahiFirebase) {
            clearInterval(timer);
            resolve(true);
          } else if (tries >= 30) {
            clearInterval(timer);
            resolve(false);
          }
        }, 100);
      });

      const ready = await waitForFirebase();
      if (!ready) return CONFIG.fallback;

      const list = await window.AsahiFirebase.getLeaderboard(3);

      // Kalau kosong → pakai fallback
      if (!list || list.length === 0) return CONFIG.fallback;

      // Kalau kurang dari 3 → isi sisanya dengan fallback
      const result = [...list];
      while (result.length < 3) {
        result.push(CONFIG.fallback[result.length]);
      }
      return result;

    } catch (err) {
      console.warn('[Asahi] Gagal ambil leaderboard, pakai fallback:', err);
      return CONFIG.fallback;
    }
  }

  // ---------- INJECT ----------
  async function inject() {
    const topPlayers = await fetchLeaderboard();
    renderPopup(topPlayers);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
