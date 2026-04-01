// ═══════════════════════════════════════
// HOW TO ADD A NEW SHOW:
// Copy one of the objects below, change the details, and paste it in.
// Set past: true once the show date has passed.
// ═══════════════════════════════════════

const shows = [
  {
    date: "2026-04-11",
    time: "8:00 PM",
    venue: "Stranger Attractions Presents — HIGH DESERT QUEEN w/ Gran Moreno",
    location: "Indianapolis, IN",
    ticketUrl: "#",
    past: false
  },
  {
    date: "2026-04-11",
    time: "11:00 PM",
    venue: "Indy CD & Vinyl / Club 808",
    location: "Indianapolis, IN",
    ticketUrl: "#",
    past: false
  },
  {
    date: "2025-01-31",
    time: "",
    venue: "The Rumours Live — w/ Stealing Volume",
    location: "Indy CD & Vinyl, Indianapolis, IN",
    ticketUrl: "",
    past: true
  },
  {
    date: "2025-01-31",
    time: "",
    venue: "HumanDebris Live Debut — Club 808",
    location: "Indy CD & Vinyl, Indianapolis, IN",
    ticketUrl: "",
    past: true
  }
];

function renderShows() {
  const upcoming = shows.filter(s => !s.past);
  const past = shows.filter(s => s.past);
  const container = document.getElementById('shows-container');
  if (!container) return;

  let html = '<h2>UPCOMING SHOWS</h2><div class="shows-list">';

  if (upcoming.length === 0) {
    html += '<p class="no-shows">No upcoming shows. Check back soon.</p>';
  }

  upcoming.forEach(s => {
    const d = new Date(s.date + 'T00:00:00');
    html += `
      <div class="show-card fade-in">
        <div class="show-date">
          <span class="month">${d.toLocaleString('en', { month: 'short' }).toUpperCase()}</span>
          <span class="day">${d.getDate()}</span>
          <span class="year">${d.getFullYear()}</span>
        </div>
        <div class="show-info">
          <h3>${s.venue}</h3>
          <p class="show-location">${s.location}</p>
          ${s.time ? `<p class="show-time">Doors: ${s.time}</p>` : ''}
        </div>
        ${s.ticketUrl && s.ticketUrl !== '#' ? `<a href="${s.ticketUrl}" class="btn" target="_blank">TICKETS →</a>` : '<span class="btn btn-outline">FREE</span>'}
      </div>`;
  });

  html += '</div><hr class="section-divider"><h2>PAST SHOWS</h2><div class="shows-list past">';

  past.forEach(s => {
    const d = new Date(s.date + 'T00:00:00');
    html += `
      <div class="show-card past fade-in">
        <div class="show-date">
          <span class="month">${d.toLocaleString('en', { month: 'short' }).toUpperCase()}</span>
          <span class="day">${d.getDate()}</span>
          <span class="year">${d.getFullYear()}</span>
        </div>
        <div class="show-info">
          <h3>${s.venue}</h3>
          <p>${s.location}</p>
        </div>
        <span class="past-badge">PAST</span>
      </div>`;
  });

  html += '</div>';
  container.innerHTML = html;

  // Re-observe new fade-in elements
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    if (window.observer) window.observer.observe(el);
    else {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      obs.observe(el);
    }
  });
}

document.addEventListener('DOMContentLoaded', renderShows);
