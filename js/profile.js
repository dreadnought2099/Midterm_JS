function logout() {
  window.location.href = "../index.html";
}

const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerHTML = `&copy; ${currentYear} RMAGALLANEZ. All rights reserved.`;
