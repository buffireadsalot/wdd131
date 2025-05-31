document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temples
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg" },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Bern, Switzerland",
    dedicated: "1955, September, 11",
    // Note: Area is in square feet, converted from 4900 square meters  
    area: 52820,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California, USA",
    dedicated: "1954, August, 13",
    area: 189000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 70000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
  }
];

function clearTemples() {
  document.querySelector(".grid-container").innerHTML = "";
}

function createTempleCard(filteredTemples) {
  clearTemples();
  filteredTemples.forEach(temple => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq. ft.`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    document.querySelector(".grid-container").appendChild(card);
  });
}

// Default: show all
createTempleCard(temples);

// Filter logic
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.textContent.toLowerCase();

    let filteredTemples;

    switch (filter) {
      case "old":
        filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(t => t.area < 10000);
        break;
      default:
        filteredTemples = temples; // Home or unknown
    }

    createTempleCard(filteredTemples);
  });
});
