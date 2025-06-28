// Initialize Bootstrap tooltips when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Find all elements that should have tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  // Enable Bootstrap tooltip for each element found
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover focus" // Tooltip shows on hover or focus
    });
  });
});

/**
 * Array of main characters from the show.
 * Each object includes the character's name, actor, images, description, and a quote.
 */
const characters = [
  {
    name: "Matty Healy",
    playedBy: "Seb Mac",
    images: ["assets/images/seb-real.jpg", "assets/images/1975.jfif"],
    description: "Seb mMac channels that effortlessly cool, indie-rock charisma—think tousled dark curls, sharp cheekbones, and a smirk that says he knows exactly how to command a room without trying",
    quote: "I don’t know if I’m falling apart or just becoming more honest about who I’ve always been."
  },
  {
    name: "Monica Geller",
    playedBy: "Courteney Cox",
    images: ["assets/images/monica.jpg", "assets/images/monica1.webp"],
    description: "Competitive and organized chef with a big heart and a love for cleaning.",
    quote: "Welcome to the real world. It sucks. You’re gonna love it."
  },
  {
    name: "Phoebe Buffay",
    playedBy: "Lisa Kudrow",
    images: ["assets/images/phoebe.jpg", "assets/images/phoebe1.webp"],
    description: "Eccentric and lovable, Phoebe is a masseuse and quirky musician.",
    quote: "Smelly Cat, Smelly Cat, what are they feeding you?"
  },
  {
    name: "Joey Tribbiani",
    playedBy: "Matt LeBlanc",
    images: ["assets/images/joey.jpg", "assets/images/joey1.jpg"],
    description: "Aspiring actor with a big appetite and even bigger heart.",
    quote: "How you doin'?"
  },
  {
    name: "Chandler Bing",
    playedBy: "Matthew Perry",
    images: ["assets/images/chandler.jpg", "assets/images/chandler1.jpg"],
    description: "Sarcastic data analyst who uses humor to deflect emotion.",
    quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?"
  },
  {
    name: "Ross Geller",
    playedBy: "David Schwimmer",
    images: ["assets/images/ross.jpg", "assets/images/ross1.jpg"],
    description: "Paleontologist with a history of divorces and a deep love for dinosaurs.",
    quote: "We were on a break!"
  }
];

// Get the container where character cards will be displayed
const container = document.getElementById("characterCards");

/**
 * For each character, create a card and add it to the page.
 * Each card shows two images, name, actor, description, and a quote.
 */
characters.forEach(char => {
  // Create a column to hold the card
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4 mb-4";

  // Set the inner HTML for the card
  col.innerHTML = `
    <div class="card character-card hover-zoom h-100 shadow-sm">
      <div class="row g-0">
        <div class="col-6">
          <img src="${char.images[0]}" class="img-fluid card-img-top rounded-start" alt="${char.name} image 1">
        </div>
        <div class="col-6">
          <img src="${char.images[1]}" class="img-fluid card-img-top rounded-end" alt="${char.name} image 2">
        </div>
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${char.name}</h5>
        <p class="card-text"><strong>Played by:</strong> ${char.playedBy}</p>
        <p class="card-text">${char.description}</p>
        <blockquote class="blockquote mt-3">
          <p class="mb-0 fs-4">"${char.quote}"</p>
        </blockquote>
      </div>
    </div>
  `;

  // Add the card to the container on the page
  container.appendChild(col);
});
