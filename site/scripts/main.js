// main.js for Buffin Ancestry Final Project

// === Global Functions ===
function enlargeImage(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // === Update footer year ===
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // === Render Family Cards ===
  renderFamilyGrid(families);

  // === Hamburger toggle menu ===
  const menuButton = document.querySelector('.hamburger');
  const nav = document.getElementById('navLinks');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});

// === Family Data Example ===
const families = [
  {
    name: "Amanda McKey/Key Fields",
    branch: "Fields",
    birth: 1855,
    birthplace: "Caddo Parish, Louisiana",
    link: "bio/amandakey.html"
    // bio: "She is the beginning."
  },
  {
    name: "Charley Buffins",
    branch: "Buffins",
    birth: 1876,
    birthplace: "Harrison County, Texas",
    link: "bio/charleybuffins.html"
    // bio: "A dutiful husband and patriarch."
  },
  {
    name: "James Arthur Buffin",
    branch: "Buffin",
    birth: 1900,
    birthplace: "Harrison County, Texas",
    link: "bio/jimbuffin.html"
    // bio: "A survivor and an example as can be seen in his children."
  },
  {
    name: "Robert Lee Buffin",
    branch: "Buffin",
    birth: 1935,
    birthplace: "Dallas, Texas",
    link: "bio/robertlbuffin.html"
    // bio: "A mother to her sons and daughters."
  }
];

// === Render Family Members ===
function renderFamilyGrid(data) {
  const section = document.getElementById("family-grid");
  if (!section) return;

  section.innerHTML = data.map(member => `
  <a href="${member.link}" class="family-card" >
    <h3>${member.name}</h3>
    <p><strong>Branch:</strong> ${member.branch}</p>
    <p><strong>Born:</strong> ${member.birth}</p>
    <p><strong>Birthplace:</strong> ${member.birthplace}</p>
  </a>
`).join("");

//   // === Lightbox Gallery ===
//  function enlargeImage(img) {
//   const lightbox = document.getElementById("lightbox");
//   const lightboxImg = document.getElementById("lightbox-img");
//   if (lightbox && lightboxImg) {
//     lightboxImg.src = img.src;
//     lightbox.style.display = "flex";
//   }
// }

// function closeLightbox() {
//   const lightbox = document.getElementById("lightbox");
//   if (lightbox) {
//     lightbox.style.display = "none";
//   }
// }

  // === Family Filter (Optional future feature) ===
  function filterByBranch(branch) {
    const filtered = families.filter(f => f.branch === branch);
    renderFamilyGrid(filtered);
    localStorage.setItem("lastViewedBranch", branch);
  }
}
