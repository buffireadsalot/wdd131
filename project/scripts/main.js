// main.js for Buffin Ancestry Final Project

// === DOM Interaction: Update year in footer ===
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  renderFamilyGrid(families);
});

// === Family Data Example ===
const families = [
  { name: "Amanda McKey/Key Fields", branch: "Fields", birth: 1855, bio: "She is the beginning." },
  { name: "Thomas Fields", branch: "Fields", birth: 1851, bio: "A dutiful husband and patriarch." },
  { name: "Isaiah Buffins", branch: "Buffin", birth: 1840, bio: "A survivor and an example as can be seen in his childern." },
  { name: "Peggy Warren Buffins", branch: "Buffin", birth: 1850, bio: "A mother to her sons and daughters." }
];

// === Render Family Members ===
function renderFamilyGrid(data) {
  const section = document.getElementById("family-grid");
  if (!section) return;

  section.innerHTML = data.map(member => `
    <div class="family-card">
      <h3>${member.name}</h3>
      <p><strong>Branch:</strong> ${member.branch}</p>
      <p><strong>Born:</strong> ${member.birth}</p>
      <p>${member.bio}</p>
    </div>
  `).join("");
}

function enlargeImage(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}


// === Filter Logic (Example for dropdown or input interaction) ===
function filterByBranch(branch) {
  const filtered = families.filter(f => f.branch === branch);
  renderFamilyGrid(filtered);
  localStorage.setItem("lastViewedBranch", branch);
}

document.getElementById("year").textContent = new Date().getFullYear();
