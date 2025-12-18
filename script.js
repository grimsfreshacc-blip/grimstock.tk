// Check login state
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

onAuthStateChanged(window.firebaseAuth, user => {
  if(user){
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("dashboardBtn").style.display = "inline";
  }
});

// Purchase button
window.requireLogin = () => {
  const user = window.firebaseAuth.currentUser;
  if(!user){
    alert("You must log in to purchase");
    window.location.href = "login.html";
  } else {
    window.open("https://cash.app/$YourCashTag", "_blank");
  }
};

// Go to dashboard based on role (basic for now)
window.goDashboard = () => {
  // TODO: connect role system later
  window.location.href = "dashboard-user.html";
};

// Support
window.openTawk = () => {
  if(typeof Tawk_API !== "undefined") Tawk_API.maximize();
};
