<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5ol1sETCQyVlVju6StIKgGDsYWuhjfyM",
  authDomain: "grimstock-74304.firebaseapp.com",
  projectId: "grimstock-74304",
  storageBucket: "grimstock-74304.firebasestorage.app",
  messagingSenderId: "515037820272",
  appId: "1:515037820272:web:5ce3c182a069a54a72cbb5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.firebaseAuth = auth;
</script>
