// Manual tooltip initialization
document.addEventListener("DOMContentLoaded", function() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover focus"
    });
  });
});

const characters = [
  {
    name: "Rachel Greene",
    playedBy: "Jennifer Aniston",
    images: ["assets/images/rachel.jpg", "assets/images/rachel1.webp"],
    description: "Fashion enthusiast who starts off as a waitress and grows into a successful businesswoman.",
    quote: "It's like all my life everyone has always told me, 'You're a shoe!'"
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

const container = document.getElementById("characterCards");

characters.forEach(char => {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4 mb-4";

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

  container.appendChild(col);
});
