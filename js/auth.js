// js/auth.js

function saveSession(user, role) {
    localStorage.setItem("currentUser", JSON.stringify({ user, role }));
}

function getSession() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
}

function getLoggedUser() {
    const s = getSession();
    return s ? s.user : null;
}

function getRole() {
    const s = getSession();
    return s ? s.role : null;
}

function logout() {
    localStorage.removeItem("currentUser");
    location.href = "index.html";
}

// Owner usernames (hardcoded)
const OWNERS = ["owner1"]; // Add your owner usernames here
