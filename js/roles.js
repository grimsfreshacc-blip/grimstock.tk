// js/roles.js

// Helper functions to manage buyers/sellers/admins
function getBuyers() {
    return JSON.parse(localStorage.getItem("buyers") || "[]");
}
function getSellers() {
    return JSON.parse(localStorage.getItem("sellers") || "[]");
}
function getAdmins() {
    return JSON.parse(localStorage.getItem("admins") || "[]");
}

// Save functions
function saveBuyers(arr) { localStorage.setItem("buyers", JSON.stringify(arr)); }
function saveSellers(arr) { localStorage.setItem("sellers", JSON.stringify(arr)); }
function saveAdmins(arr) { localStorage.setItem("admins", JSON.stringify(arr)); }
