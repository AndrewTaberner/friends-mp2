const characters = [
  {
    name: "Rachel Green",
    image: "assets/images/rachel.jpg",
    description: "Fashion enthusiast who starts off as a waitress and grows into a successful businesswoman.",
    quote: "It's like all my life everyone has always told me, 'You're a shoe!'"
  },
  {
    name: "Monica Geller",
    image: "assets/images/monica.jpg",
    description: "Competitive and organized chef with a big heart and a love for cleaning.",
    quote: "Welcome to the real world. It sucks. You’re gonna love it."
  },
  {
    name: "Phoebe Buffay",
    image: "assets/images/phoebe.jpg",
    description: "Eccentric and lovable, Phoebe is a masseuse and quirky musician.",
    quote: "Smelly Cat, Smelly Cat, what are they feeding you?"
  },
  {
    name: "Joey Tribbiani",
    image: "assets/images/joey.jpg",
    description: "Aspiring actor with a big appetite and even bigger heart.",
    quote: "How you doin'?"
  },
  {
    name: "Chandler Bing",
    image: "assets/images/chandler.jpg",
    description: "Sarcastic data analyst who uses humor to deflect emotion.",
    quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?"
  },
  {
    name: "Ross Geller",
    image: "assets/images/ross.jpg",
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
      <img src="${char.image}" loading="lazy" class="card-img-top" alt="${char.name}">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${char.name}</h5>
        <p class="card-text">${char.description}</p>
        <blockquote class="blockquote mt-3">
          <p class="mb-0">"${char.quote}"</p>
        </blockquote>
      </div>
    </div>
  `;

  container.appendChild(col);
});
