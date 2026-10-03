/* ============================================================
   ACCESS GUARD — Asahi Mandiri
   ------------------------------------------------------------
   Cek akses premium (kode akses) di semua halaman.
   ============================================================ */

window.AsahiAccess = {

  /* ==========================================================
     KODE AKSES — nanti akan di-load dari kode-valid.js
     ========================================================== */
  getKodeValid() {
    return window.KODE_VALID || {};
  },

  /* ==========================================================
     CEK APAKAH USER SUDAH PUNYA AKSES PREMIUM
     ----------------------------------------------------------
     User dianggap premium kalau:
       1. Sudah login Google
       2. Sudah punya kode akses yang tersimpan di Firestore
       3. Kode akses masih valid
     ========================================================== */
  async isPremium() {
    const user = window.AsahiFirebase?.currentUser;
    if (!user) return false;

    try {
      const data = await window.AsahiFirebase.getUserData(user.uid);
      if (!data || !data.kodeAkses) return false;

      // Cek apakah kode masih valid
      const kodeValid = this.getKodeValid();
      return !!kodeValid[data.kodeAkses];
    } catch (err) {
      console.error('[Asahi] Gagal cek premium:', err);
      return false;
    }
  },

  /* ==========================================================
     AMBIL INFO AKSES USER
     ========================================================== */
  async getInfo() {
    const user = window.AsahiFirebase?.currentUser;
    if (!user) return null;

    try {
      const data = await window.AsahiFirebase.getUserData(user.uid);
      if (!data || !data.kodeAkses) return null;

      const kodeValid = this.getKodeValid();
      const info = kodeValid[data.kodeAkses];
      if (!info) return null;

      return {
        kode: data.kodeAkses,
        label: info.label,
        tanggal: data.tanggalAktif || null
      };
    } catch (err) {
      console.error('[Asahi] Gagal ambil info akses:', err);
      return null;
    }
  },

  /* ==========================================================
     REDIRECT KE PORTAL (buat yang belum premium)
     ========================================================== */
  goToPortal(pesan) {
    // Simpan halaman asal biar bisa balik setelah unlock
    sessionStorage.setItem('asahi_redirect_after_unlock', window.location.href);

    // Simpan pesan custom
    if (pesan) {
      sessionStorage.setItem('asahi_portal_message', pesan);
    }

    window.location.href = 'portal.html';
  },

  /* ==========================================================
     TAMPILKAN POPUP TERKUNCI (bisa dipakai di leveling)
     ========================================================== */
  showLockedPopup() {
    const mau = confirm(
      '🔒 Konten ini khusus member premium!\n\n' +
      'Buka akses dengan bayar Rp 15.000.\n' +
      'Kamu akan diarahkan ke portal pembayaran.\n\n' +
      'Lanjutkan?'
    );

    if (mau) {
      this.goToPortal('Silakan buka akses untuk melanjutkan.');
    }

    return false;
  }
};

console.log('[Asahi] Access Guard loaded ✅');
