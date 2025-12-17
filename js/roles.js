const OWNERS = ["grim"];

function isOwner() {
  return OWNERS.includes(getLoggedUser());
}

function isAdmin() {
  const role = getRole();
  return role === "admin" || isOwner();
}

function isSeller() {
  return getRole() === "seller";
}

function requireOwner() {
  if(!isOwner()) { alert("Owners only"); location.href="index.html"; }
}

function requireAdmin() {
  if(!isAdmin()) { alert("Admins only"); location.href="index.html"; }
}

function requireSeller() {
  if(!isSeller()) { alert("Sellers only"); location.href="index.html"; }
}
