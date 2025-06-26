// Manual tooltip initialization using Bootstrap
document.addEventListener("DOMContentLoaded", function() {
  // Set up Bootstrap tooltips on elements that use the data-bs-toggle attribute
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover focus" // Tooltip appears on hover or focus
    });
  });
});

// API key and base URLs for TMDB (The Movie Database)
const API_KEY = '94b6bd05d2a69d2e65ebecdc93128dce';
const BASE_URL = 'https://api.themoviedb.org/3/tv/1668';
const IMG_BASE = 'https://image.tmdb.org/t/p/w300'; // Image URL prefix for episode stills

// DOM elements for user interaction
const searchInput = document.getElementById('searchInput');
const seasonFilter = document.getElementById('seasonFilter');
const resultsList = document.getElementById('resultsList');

let allEpisodes = []; // Store all episodes from all seasons

/**
 * Loads all episodes from all 10 seasons of the show using the TMDB API.
 * Returns a list of episode objects after the data is loaded.
 */
async function fetchAllEpisodes() {
  const episodes = [];

  for (let season = 1; season <= 10; season++) {
    const res = await fetch(`${BASE_URL}/season/${season}?api_key=${API_KEY}`);
    const data = await res.json();

    data.episodes.forEach(ep => {
      episodes.push({
        id: ep.id,
        name: ep.name,
        overview: ep.overview,
        episode_number: ep.episode_number,
        season_number: ep.season_number,
        air_date: ep.air_date,
        still_path: ep.still_path
      });
    });
  }

  return episodes;
}

/**
 * Filters the list of episodes based on search text and selected season.
 * Then shows the matching episodes on the page.
 */
function filterEpisodes() {
  const query = searchInput.value.toLowerCase();
  const selectedSeason = seasonFilter.value;

  const filtered = allEpisodes.filter(ep => {
    const matchesText = ep.name.toLowerCase().includes(query) || ep.overview.toLowerCase().includes(query);
    const matchesSeason = selectedSeason === '' || ep.season_number == selectedSeason;
    return matchesText && matchesSeason;
  });

  renderResults(filtered);
}

/**
 * Shows the given list of episodes in the results section of the page.
 */
function renderResults(episodes) {
  resultsList.innerHTML = ''; // Clear old results

  if (episodes.length === 0) {
    resultsList.innerHTML = '<li class="list-group-item">No results found.</li>';
    return;
  }

  episodes.forEach(ep => {
    const li = document.createElement('li');
    li.className = 'list-group-item episode-card';

    li.innerHTML = `
      <div class="row g-3 align-items-center">
        <div class="col-md-3">
          ${ep.still_path ? `<img src="${IMG_BASE + ep.still_path}" class="img-fluid rounded" alt="Episode still">` : ''}
        </div>
        <div class="col-md-9">
          <h5>S${ep.season_number}E${ep.episode_number}: ${ep.name}</h5>
          <p>${ep.overview || 'No description available.'}</p>
          <p><small class="text-muted">Aired: ${ep.air_date}</small></p>
        </div>
      </div>
    `;

    resultsList.appendChild(li);
  });
}

/**
 * Loads all episodes, then shows them on the page.
 * Also sets up filters to respond to user input.
 */
(async () => {
  allEpisodes = await fetchAllEpisodes();
  filterEpisodes();

  searchInput.addEventListener('input', filterEpisodes);
  seasonFilter.addEventListener('change', filterEpisodes);
})();

// Back to Top button logic
const backToTopBtn = document.getElementById("backToTopBtn");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to top on click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

