/* ============================================================
   FIREBASE INIT — Asahi Mandiri
   ------------------------------------------------------------
   Inisialisasi Firebase + helper global.
   File ini harus di-load SETELAH firebase-config.js
   ============================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  serverTimestamp,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* ============================================================
   INIT
   ============================================================ */
const app  = initializeApp(window.ASAHI_FIREBASE_CONFIG);
const auth = getAuth(app);
const db   = getFirestore(app);

/* ============================================================
   EXPOSE KE WINDOW (biar bisa dipakai script biasa)
   ============================================================ */
window.AsahiFirebase = {
  app,
  auth,
  db,

  // Helper: current user
  currentUser: null,

  // Login pakai Google
  async loginGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (err) {
      console.error('Login gagal:', err);
      throw err;
    }
  },

  // Logout
  async logout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout gagal:', err);
      throw err;
    }
  },

  // Ambil data user dari Firestore
  async getUserData(uid) {
    const ref = doc(db, 'users', uid);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data() : null;
  },

  // Simpan / update data user
  async saveUserData(uid, data) {
    const ref = doc(db, 'users', uid);
    await setDoc(ref, {
      ...data,
      updatedAt: serverTimestamp()
    }, { merge: true });
  },

  // Ambil leaderboard (top N)
  async getLeaderboard(maxN = 50) {
    const q = query(
      collection(db, 'users'),
      orderBy('totalPoin', 'desc'),
      limit(maxN)
    );
    const snap = await getDocs(q);
    const list = [];
    snap.forEach(d => list.push({ uid: d.id, ...d.data() }));
    return list;
  }
};

/* ============================================================
   LISTENER: auth state berubah
   ============================================================ */
onAuthStateChanged(auth, (user) => {
  window.AsahiFirebase.currentUser = user;

  // Trigger event custom
  window.dispatchEvent(new CustomEvent('asahi-auth-changed', {
    detail: { user }
  }));

  console.log('[Asahi] Auth state:', user ? user.displayName : 'guest');
});

console.log('[Asahi] Firebase initialized ✅');
