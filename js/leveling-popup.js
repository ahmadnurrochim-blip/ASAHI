/* ============================================================
   LEVELING + LEADERBOARD POPUP — Asahi Mandiri
   ------------------------------------------------------------
   Popup gabungan: info leveling + leaderboard top 3.
   2 tombol: Mulai Leveling + Lihat Leaderboard.
   Cooldown: muncul lagi setelah 1 menit dari close.
   ============================================================ */

(function () {
  // ---------- KONFIGURASI ----------
  const CONFIG = {
    // Bagian leveling
    title:       'Akses Leveling',
    subtitle:    'N5 • N4 • N3',
    description: 'Tingkatkan kemampuan Bahasa Jepang kamu melalui materi dan latihan berdasarkan level.',
    headerIcon:  'fa-graduation-cap',

    // Tombol utama
    primaryText:  'Mulai Leveling',
    primaryHref:  'portal.html',
    primaryIcon:  'fa-unlock-alt',

    // Tombol kedua
    secondaryText:  'Lihat Leaderboard',
    secondaryHref:  'leaderboard.html',
    secondaryIcon:  'fa-list-ol',

    // Bagian leaderboard
    lbTitle:     'Leaderboard',
    lbSubtitle:  'Top 3',
    lbIcon:      'fa-crown',

    // localStorage key
    storageKey:  'asahi_leveling_popup_closed',

    // Cooldown: muncul lagi setelah 60 detik (1 menit)
    cooldownMs: 60 * 1000,

    // Fallback data (dipakai kalau Firestore kosong / belum login)
    fallback: [
      { nama: 'Budi S.',   totalPoin: 9800 },
      { nama: 'Siti A.',   totalPoin: 9200 },
      { nama: 'Rina K.',   totalPoin: 8500 }
    ]
  };

  // ---------- COOLDOWN CHECK ----------
  try {
    const lastClosed = parseInt(localStorage.getItem(CONFIG.storageKey) || '0', 10);
    if (lastClosed && (Date.now() - lastClosed) < CONFIG.cooldownMs) {
      return;
    }
  } catch (e) { /* abaikan */ }

  // ---------- ESCAPE HTML ----------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ---------- AMBIL DATA LEADERBOARD ----------
  async function fetchLeaderboard() {
    try {
      const waitForFirebase = () => new Promise((resolve) => {
        if (window.AsahiFirebase) return resolve(true);
        let tries = 0;
        const timer = setInterval(() => {
          tries++;
          if (window.AsahiFirebase) {
            clearInterval(timer);
            resolve(true);
          } else if (tries >= 20) {
            clearInterval(timer);
            resolve(false);
          }
        }, 100);
      });

      const ready = await waitForFirebase();
      if (!ready) return CONFIG.fallback;

      const list = await window.AsahiFirebase.getLeaderboard(3);

      // Kalau kosong / cuma 1 → isi sisanya dengan fallback
      const result = [];
      if (list && list.length > 0) {
        list.forEach(p => result.push(p));
      }
      while (result.length < 3) {
        result.push(CONFIG.fallback[result.length]);
      }
      return result;

    } catch (err) {
      console.warn('[Asahi] Gagal ambil leaderboard, pakai fallback:', err);
      return CONFIG.fallback;
    }
  }

  // ---------- RENDER POPUP ----------
  function renderPopup(topPlayers) {
    const popup = document.createElement('div');
    popup.className = 'leveling-access';
    popup.id = 'levelingAccess';
    popup.setAttribute('role', 'complementary');
    popup.setAttribute('aria-label', 'Akses Leveling & Leaderboard');

    // Baris leaderboard
    const lbRows = topPlayers.slice(0, 3).map((p, i) => `
      <div class="lb-popup-row">
        <div class="lb-popup-rank">${i + 1}</div>
        <div class="lb-popup-info">
          <div class="lb-popup-name">${escapeHtml(p.nama || 'Anonim')}</div>
          <div class="lb-popup-poin">${(p.totalPoin || 0).toLocaleString('id-ID')}</div>
        </div>
      </div>
    `).join('');

    popup.innerHTML = `
      <button class="leveling-close" id="levelingClose" aria-label="Tutup">
        <i class="fas fa-times"></i>
      </button>

      <!-- HEADER -->
      <div class="leveling-header">
        <div class="leveling-icon">
          <i class="fas ${CONFIG.headerIcon}"></i>
        </div>
        <div>
          <div class="leveling-title">${CONFIG.title}</div>
          <div class="leveling-subtitle">${CONFIG.subtitle}</div>
        </div>
      </div>

      <!-- BODY -->
      <div class="leveling-body">

        <div class="leveling-description">
          ${CONFIG.description}
        </div>

        <div class="lb-popup-section">
          <div class="lb-popup-header">
            <i class="fas ${CONFIG.lbIcon}"></i>
            <span>${CONFIG.lbTitle}</span>
            <small>${CONFIG.lbSubtitle}</small>
          </div>
          <div class="lb-popup-list">
            ${lbRows}
          </div>
        </div>

        <!-- 2 TOMBOL -->
        <div class="leveling-buttons">
          <a href="${CONFIG.primaryHref}" class="leveling-button">
            <i class="fas ${CONFIG.primaryIcon}"></i>
            ${CONFIG.primaryText}
          </a>
          <a href="${CONFIG.secondaryHref}" class="leveling-button secondary">
            <i class="fas ${CONFIG.secondaryIcon}"></i>
            ${CONFIG.secondaryText}
          </a>
        </div>

      </div>
    `;

    document.body.appendChild(popup);

    // ---------- TOMBOL CLOSE ----------
    const btnClose = document.getElementById('levelingClose');
    btnClose.addEventListener('click', () => {
      popup.classList.add('is-closing');
      try {
        localStorage.setItem(CONFIG.storageKey, Date.now().toString());
      } catch (e) { /* abaikan */ }
      setTimeout(() => popup.remove(), 300);
    });
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
