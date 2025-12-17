function saveSession(user, role) {
  localStorage.setItem("loggedUser", user);
  localStorage.setItem("role", role);
}

function logout() {
  localStorage.clear();
  location.href = "buyer-login.html";
}

function requireRole(role) {
  if(localStorage.getItem("role") !== role){
    alert("Access denied");
    location.href = "buyer-login.html";
  }
}

function getLoggedUser(){
  return localStorage.getItem("loggedUser");
}

function getRole(){
  return localStorage.getItem("role");
}
