document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

