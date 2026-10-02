/* ============================================================
   ACCESS GUARD — Satpam halaman terkunci
   ------------------------------------------------------------
   Tempel di <head> PALING ATAS halaman yang mau dikunci:

     <script src="js/kode-valid.js"></script>
     <script src="js/access-guard.js"></script>

   Kalau user belum punya akses valid → redirect ke portal.html.
   ============================================================ */
(function () {

  const STORAGE    = 'asahi_access_code';
  const PORTAL_URL = 'portal.html';

  // Tunggu sebentar sampai kode-valid.js selesai dimuat
  function cekAkses() {
    // Pastikan KODE_VALID sudah ada
    if (!window.KODE_VALID) {
      console.warn('[access-guard] kode-valid.js belum dimuat.');
      return false;
    }

    try {
      const saved = localStorage.getItem(STORAGE);
      if (!saved) return false;

      const data = JSON.parse(saved);
      if (!data || !data.kode) return false;

      // Cek apakah kode masih terdaftar di KODE_VALID
      return Object.prototype.hasOwnProperty.call(window.KODE_VALID, data.kode);

    } catch (e) {
      return false;
    }
  }

  if (!cekAkses()) {
    // Simpan halaman tujuan agar bisa balik setelah kode valid
    const tujuan = window.location.pathname + window.location.search;
    try {
      sessionStorage.setItem('asahi_redirect_after_unlock', tujuan);
    } catch (e) { /* abaikan */ }

    // Redirect ke portal
    window.location.replace(PORTAL_URL);
  }

})();