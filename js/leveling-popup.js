/* ============================================================
   AKSES LEVELING POPUP
   Otomatis inject popup ke semua halaman yang memanggil script ini.
   ============================================================ */
(function () {
  // ---------- KONFIGURASI ----------
  const CONFIG = {
    title:       'Akses Leveling',
    subtitle:    'N5 • N4 • N3',
    description: 'Tingkatkan kemampuan Bahasa Jepang kamu melalui materi dan latihan berdasarkan level.',
    buttonText:  'Mulai Leveling',
    buttonHref:  'leveling.html',
    buttonIcon:  'fa-unlock-alt',
    headerIcon:  'fa-graduation-cap',
    // localStorage key supaya popup tidak muncul lagi setelah ditutup
    storageKey:  'asahi_leveling_popup_closed'
  };

  // ---------- JIKA USER SUDAH PERNAH MENUTUP POPUP, JANGAN TAMPILKAN ----------
  try {
    if (localStorage.getItem(CONFIG.storageKey) === '1') return;
  } catch (e) { /* abaikan */ }

  // ---------- TUNGGU DOM SIAP ----------
  function inject() {
    // ---------- BUAT ELEMEN POPUP ----------
    const popup = document.createElement('div');
    popup.className = 'leveling-access';
    popup.id = 'levelingAccess';
    popup.setAttribute('role', 'complementary');
    popup.setAttribute('aria-label', 'Akses Leveling Bahasa Jepang');

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

      <div class="leveling-description">
        ${CONFIG.description}
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();