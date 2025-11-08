// Movie Database with Real Movie Names and Poster URLs
const moviesDatabase = {
  trending: [
    {
      title: "Oppenheimer",
      year: 2023,
      image:
        "https://images.wallpapersden.com/image/download/oppenheimer-movie-poster-hd-cillian-murphy_bmVpbGWUmZqaraWkpJRpZWVlrWtoaGc.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Barbie",
      year: 2023,
      image:
        "https://www.chromethemer.com/wallpapers/android/images/640/barbie-hd-wallpaper-for-android.png",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Killers of the Flower Moon",
      year: 2023,
      image:
        "https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      title: "The Hunger Games: Ballad of Songbirds and Snakes",
      year: 2023,
      image:
        "https://m.media-amazon.com/images/M/MV5BZDk2YjNhYzEtYzg2ZC00OWEwLWJhYzgtMGUzMWVjNDFmYzI5XkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      title: "Dune: Part Two",
      year: 2024,
      image:
        "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      title: "Inside Out 2",
      year: 2024,
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  ],
  action: [
    {
      title: "John Wick: Chapter 4",
      year: 2023,
      image:
        "https://images.wallpapersden.com/image/download/new-john-wick-4-poster-hd_bW5tZmmUmZqaraWkpJRnZWVlrWhlZWU.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    {
      title: "Fast X",
      year: 2023,
      image:
        "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_QL75_UX190_CR0,10,190,281_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      title: "Mission: Impossible - Dead Reckoning Part One",
      year: 2023,
      image:
        "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
    {
      title: "The Expendables 4",
      year: 2023,
      image:
        "https://cdn.mediaplaynews.com/wp-content/uploads/2023/11/Expendables-4-UHD-BD.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      title: "Aquaman and the Lost Kingdom",
      year: 2023,
      image:
        "https://m.media-amazon.com/images/M/MV5BNDM3OTZjOTEtYWU3MC00OGUxLWJiOTctMDkwZWJmYjAxNzEyXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    },
    {
      title: "The Beekeeper",
      year: 2024,
      image:
        "https://m.media-amazon.com/images/M/MV5BNGEwYWU2NmQtNjU5NS00ZjkzLWE2ZTYtYzgzMjEzOGJhYWQwXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    },
  ],
  drama: [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    },
    {
      title: "The Godfather",
      year: 1972,
      image:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Forrest Gump",
      year: 1994,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScf5su68o8oOp0D89ESlb3_8RW2ge3ZWIPFv_OBVSObb680o3H",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "The Pursuit of Happyness",
      year: 2006,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYMdhzuHEPl0z4a8RUnxFaIBLTwknxaqkxw&s",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      title: "Parasite",
      year: 2019,
      image:
        "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      title: "Nomadland",
      year: 2020,
      image:
        "https://m.media-amazon.com/images/M/MV5BODAwMjRjOTMtZWQzMC00MDhkLTk4ZjUtZjYxMjlmZjJkYzJiXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
  ],
  comedy: [
    {
      title: "The Grand Budapest Hotel",
      year: 2014,
      image:
        "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      title: "Knives Out",
      year: 2019,
      image:
        "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    },
    {
      title: "Superbad",
      year: 2007,
      image:
        "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
    {
      title: "The Hangover",
      year: 2009,
      image:
        "https://c8.alamy.com/comp/2JP69F5/bradley-cooper-zach-galifianakis-ed-helms-poster-the-hangover-2009-2JP69F5.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
    {
      title: "Bridesmaids",
      year: 2011,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_FMjpg_UX1000_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      title: "Barbie",
      year: 2023,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWhoxwmwEWuKusB8BNbc0PNmNHzjW2fn32g&s",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    },
  ],
  scifi: [
    {
      title: "Inception",
      year: 2010,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    },
    {
      title: "Interstellar",
      year: 2014,
      image:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    },
    {
      title: "The Matrix",
      year: 1999,
      image:
        "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Avatar",
      year: 2009,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Dune",
      year: 2021,
      image:
        "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      title: "Blade Runner 2049",
      year: 2017,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    },
  ],
};

// My List Storage
let myList = JSON.parse(localStorage.getItem("myList")) || [];

// Page Switching Function with smooth transition
function switchPage(pageId) {
  const pages = document.querySelectorAll(".page");

  // Fade out current page
  pages.forEach((page) => {
    if (page.classList.contains("active")) {
      page.style.opacity = "0";
      setTimeout(() => {
        page.classList.remove("active");
      }, 300);
    }
  });

  // Fade in selected page
  setTimeout(() => {
    const newPage = document.getElementById(pageId);
    newPage.classList.add("active");
    setTimeout(() => {
      newPage.style.opacity = "1";
    }, 50);
  }, 300);
}

// Toast Notification System
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type} show`;
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Movie Modal Functions
function openMovieModal(movie) {
  const modal = document.getElementById("movieModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalYear = document.getElementById("modalYear");
  const modalAddBtn = document.getElementById("modalAddBtn");

  modalImage.src = movie.image;
  modalTitle.textContent = movie.title;
  modalYear.textContent = movie.year;

  const isInList = myList.some((m) => m.title === movie.title);
  modalAddBtn.textContent = isInList ? "✓ In My List" : "+ My List";
  modalAddBtn.onclick = () => toggleMyList(movie);

  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  const modal = document.getElementById("movieModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

// Click outside modal to close
window.onclick = function (event) {
  const modal = document.getElementById("movieModal");
  if (event.target === modal) {
    closeModal();
  }
};

// My List Management
function toggleMyList(movie) {
  const index = myList.findIndex((m) => m.title === movie.title);

  if (index === -1) {
    myList.push(movie);
    showToast(`${movie.title} added to My List!`, "success");
  } else {
    myList.splice(index, 1);
    showToast(`${movie.title} removed from My List`, "info");
  }

  localStorage.setItem("myList", JSON.stringify(myList));
  updateMyListCarousel();

  // Update modal button if modal is open
  const modal = document.getElementById("movieModal");
  if (modal.style.display === "flex") {
    const modalAddBtn = document.getElementById("modalAddBtn");
    const isInList = myList.some((m) => m.title === movie.title);
    modalAddBtn.textContent = isInList ? "✓ In My List" : "+ My List";
  }
}

function updateMyListCarousel() {
  const carousel = document.getElementById("myListCarousel");

  if (myList.length === 0) {
    carousel.innerHTML =
      '<div class="empty-list"><p>Your list is empty. Add movies by clicking the + button on any movie card!</p></div>';
  } else {
    populateCarousel("myListCarousel", myList);
  }
}

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// All movies cache for better performance
let allMoviesCache = null;

function getAllMovies() {
  if (!allMoviesCache) {
    allMoviesCache = [
      ...moviesDatabase.trending,
      ...moviesDatabase.action,
      ...moviesDatabase.drama,
      ...moviesDatabase.comedy,
      ...moviesDatabase.scifi,
    ];
  }
  return allMoviesCache;
}

// Search Functionality with debouncing and improved performance
function initializeSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (!searchInput || !searchResults) return;

  let selectedIndex = -1;

  const performSearch = debounce((query) => {
    query = query.toLowerCase().trim();

    if (query.length < 1) {
      searchResults.style.display = "none";
      return;
    }

    // Search across all categories
    const allMovies = getAllMovies();

    const results = allMovies
      .filter((movie) => movie.title.toLowerCase().includes(query))
      .slice(0, 8); // Show more results

    if (results.length > 0) {
      searchResults.innerHTML = results
        .map((movie, index) => {
          const movieData = encodeURIComponent(JSON.stringify(movie));
          return `
          <div class="search-result-item" data-movie='${movieData}' data-index="${index}" tabindex="0">
            <img src="${movie.image}" alt="${movie.title}" 
                 onerror="this.src='https://via.placeholder.com/50x75?text=N'" 
                 loading="lazy">
            <div>
              <strong>${movie.title}</strong>
              <span>${movie.year}</span>
            </div>
          </div>
        `;
        })
        .join("");
      searchResults.style.display = "block";

      // Add click handlers to search results
      searchResults.querySelectorAll(".search-result-item").forEach((item) => {
        item.addEventListener("click", () => {
          const movieData = JSON.parse(
            decodeURIComponent(item.getAttribute("data-movie"))
          );
          openMovieModal(movieData);
          searchResults.style.display = "none";
          searchInput.value = "";
        });
      });
    } else {
      searchResults.innerHTML =
        '<div class="search-result-item no-results"><p>No movies found for "' +
        query +
        '"</p></div>';
      searchResults.style.display = "block";
    }
  }, 300); // Debounce for 300ms

  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  // Keyboard navigation for search results
  searchInput.addEventListener("keydown", (e) => {
    const items = searchResults.querySelectorAll(".search-result-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      updateSelection(items, selectedIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, -1);
      updateSelection(items, selectedIndex);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      items[selectedIndex].click();
    } else if (e.key === "Escape") {
      searchResults.style.display = "none";
      searchInput.blur();
    }
  });

  function updateSelection(items, index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // Close search results when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = "none";
      selectedIndex = -1;
    }
  });

  // Clear search button
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length > 0) {
      performSearch(searchInput.value);
    }
  });
}

// Password Strength Indicator
function initializePasswordStrength() {
  const passwordInput = document.getElementById("signupPassword");
  const strengthBar = document.getElementById("strengthBar");
  const strengthText = document.getElementById("strengthText");

  if (!passwordInput) return;

  passwordInput.addEventListener("input", (e) => {
    const password = e.target.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    const strengthLevels = ["Weak", "Fair", "Good", "Strong"];
    const colors = ["#e50914", "#ff9800", "#ffc107", "#4caf50"];

    strengthBar.style.width = `${(strength / 4) * 100}%`;
    strengthBar.style.backgroundColor = colors[strength - 1] || "#e50914";
    strengthText.textContent =
      strength > 0 ? `Password strength: ${strengthLevels[strength - 1]}` : "";
    strengthText.style.color = colors[strength - 1] || "#999";
  });
}

// Smooth Scrolling for Navigation
function initializeSmoothScrolling() {
  document.querySelectorAll(".nav-menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

// Update User Profile Display
function updateUserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = document.getElementById("userName");

  if (user && userName) {
    userName.textContent = `Hello, ${user.name || user.email.split("@")[0]}`;
  }
}

function getSubscription() {
  try {
    return JSON.parse(localStorage.getItem("subscription")) || null;
  } catch (e) {
    return null;
  }
}

function setSubscription(planId) {
  const plans = {
    basic: { id: "basic", name: "Basic", price: 199 },
    standard: { id: "standard", name: "Standard", price: 499 },
    premium: { id: "premium", name: "Premium", price: 649 },
  };
  const selected = plans[planId] || null;
  if (!selected) return false;
  localStorage.setItem("subscription", JSON.stringify({ ...selected, active: true }));
  updateAccountSubscriptionUI();
  updateSubscribePageUI();
  return true;
}

function cancelSubscription() {
  localStorage.removeItem("subscription");
  updateAccountSubscriptionUI();
  updateSubscribePageUI();
}

function updateAccountSubscriptionUI() {
  const sub = getSubscription();
  const statusEl = document.getElementById("subscriptionStatusText");
  const planEl = document.getElementById("subscriptionPlanName");
  if (statusEl) statusEl.textContent = sub && sub.active ? "Active" : "Not Subscribed";
  if (planEl) planEl.textContent = sub && sub.active ? sub.name : "-";
}

function updateSubscribePageUI() {
  const sub = getSubscription();
  const info = document.getElementById("currentSubscriptionInfo");
  const name = document.getElementById("currentPlanName");
  if (info) info.style.display = sub && sub.active ? "block" : "none";
  if (name) name.textContent = sub && sub.active ? sub.name : "None";
}

function initializeSubscriptionPage() {
  const plansGrid = document.getElementById("plansGrid");
  if (plansGrid) {
    plansGrid.querySelectorAll(".select-plan-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".plan-card");
        const planId = card && card.getAttribute("data-plan-id");
        if (setSubscription(planId)) {
          showToast(`Subscribed to ${planId} plan successfully!`, "success");
          switchPage("homePage");
        } else {
          showToast("Failed to subscribe. Please try again.", "error");
        }
      });
    });
  }
  const cancelBtn = document.getElementById("cancelSubscriptionBtn");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      cancelSubscription();
      showToast("Subscription cancelled", "info");
    });
  }
  updateSubscribePageUI();
}

// Initialize Movies on Home Page with loading animation
function initializeMovies() {
  // Show skeleton loaders first
  const carousels = [
    "trendingCarousel",
    "actionCarousel",
    "dramaCarousel",
    "comedyCarousel",
    "scifiCarousel",
  ];

  setTimeout(() => {
    populateCarousel("trendingCarousel", moviesDatabase.trending);
    populateCarousel("actionCarousel", moviesDatabase.action);
    populateCarousel("dramaCarousel", moviesDatabase.drama);
    populateCarousel("comedyCarousel", moviesDatabase.comedy);
    populateCarousel("scifiCarousel", moviesDatabase.scifi);
  }, 100);
}

// Populate Movie Carousel with enhanced interactivity and lazy loading
function populateCarousel(carouselId, movies) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  carousel.innerHTML = "";

  movies.forEach((movie, index) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.style.animationDelay = `${index * 0.05}s`; // Stagger animation

    const isInList = myList.some((m) => m.title === movie.title);

    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" 
           onerror="this.src='https://via.placeholder.com/200x300?text=${encodeURIComponent(
             movie.title
           )}'" 
           class="movie-image loading"
           loading="lazy">
      <div class="movie-overlay">
        <button class="btn-play-small" title="Play Movie">▶</button>
        <button class="btn-add-small ${isInList ? "in-list" : ""}" 
                title="${isInList ? "Remove from My List" : "Add to My List"}">
          ${isInList ? "✓" : "+"}
        </button>
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
      </div>
    `;

    // Add event listeners
    const playBtn = movieCard.querySelector(".btn-play-small");
    const addBtn = movieCard.querySelector(".btn-add-small");

    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (movie.videoUrl) {
        playMovie(movie);
      } else {
        openMovieModal(movie);
      }
    });

    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMyList(movie);
      // Update button state
      const newIsInList = myList.some((m) => m.title === movie.title);
      addBtn.className = `btn-add-small ${newIsInList ? "in-list" : ""}`;
      addBtn.innerHTML = newIsInList ? "✓" : "+";
      addBtn.title = newIsInList ? "Remove from My List" : "Add to My List";
    });

    movieCard.addEventListener("click", () => openMovieModal(movie));

    // Remove loading class when image loads
    const img = movieCard.querySelector(".movie-image");
    img.addEventListener("load", () => {
      img.classList.remove("loading");
    });

    carousel.appendChild(movieCard);
  });
}

// Login Form Handler with validation
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    // Store user info in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ email, name: email.split("@")[0] })
    );

    showToast("Login successful! Welcome back!", "success");

    // Switch to home page
    setTimeout(() => {
      switchPage("homePage");
      initializeMovies();
      updateUserProfile();
    }, 500);

    // Clear form
    this.reset();
  }
});

// Signup Form Handler with enhanced validation
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("Please enter a valid email address", "error");
    return;
  }

  // Validate password strength
  if (password.length < 6) {
    showToast("Password must be at least 6 characters long", "error");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match!", "error");
    return;
  }

  if (name && email && password) {
    // Store user info in localStorage
    localStorage.setItem("user", JSON.stringify({ email, name }));

    showToast("Account created successfully! Welcome!", "success");

    // Switch to home page
    setTimeout(() => {
      switchPage("homePage");
      initializeMovies();
      updateUserProfile();
    }, 500);

    // Clear form
    this.reset();
  }
});

// Logout Function
function logout() {
  showToast("Logging out...", "info");
  setTimeout(() => {
    localStorage.removeItem("user");
    switchPage("loginPage");
    document.getElementById("loginForm").reset();
  }, 500);
}

// Genre Filter Functionality
function initializeGenreFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".content-section");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // Show/hide sections based on filter
      sections.forEach((section) => {
        const sectionId = section.id;

        if (filter === "all") {
          section.style.display = "block";
        } else if (sectionId === filter) {
          section.style.display = "block";
          // Scroll to the filtered section
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        } else {
          section.style.display = "none";
        }
      });

      showToast(
        `Showing ${filter === "all" ? "all genres" : filter + " movies"}`,
        "info"
      );
    });
  });
}

// Scroll to Top Button Functionality
function initializeScrollToTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  const homePage = document.getElementById("homePage");

  if (!scrollBtn || !homePage) return;

  // Show/hide button based on scroll position
  homePage.addEventListener("scroll", () => {
    if (homePage.scrollTop > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  // Scroll to top when clicked
  scrollBtn.addEventListener("click", () => {
    homePage.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Don't trigger if user is typing in an input
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    const homePage = document.getElementById("homePage");
    if (!homePage || !homePage.classList.contains("active")) return;

    switch (e.key.toLowerCase()) {
      case "s":
        // Focus search bar
        e.preventDefault();
        document.getElementById("searchInput")?.focus();
        break;
      case "m":
        // Go to My List
        e.preventDefault();
        document
          .getElementById("mylist")
          ?.scrollIntoView({ behavior: "smooth" });
        break;
      case "h":
        // Go to Home
        e.preventDefault();
        homePage.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  });
}

// Add loading indicator for images
function showLoadingState(element) {
  element.classList.add("loading-state");
}

function hideLoadingState(element) {
  element.classList.remove("loading-state");
}

// Account Page Functions
function goToAccount(event) {
  if (event) event.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    showToast("Please login first", "error");
    return;
  }

  // Populate account data
  document.getElementById("accountUserName").textContent =
    user.name || user.email.split("@")[0];
  document.getElementById("accountUserEmail").textContent = user.email;
  document.getElementById("detailName").textContent =
    user.name || user.email.split("@")[0];
  document.getElementById("detailEmail").textContent = user.email;
  document.getElementById("detailMovieCount").textContent = myList.length;

  // Set avatar initial
  const avatarCircle = document.getElementById("userAvatar");
  const initial = (user.name || user.email).charAt(0).toUpperCase();
  avatarCircle.textContent = initial;

  // Set member since date
  const memberDate = new Date().getFullYear();
  document.getElementById(
    "memberSince"
  ).textContent = `Member since ${memberDate}`;

  // Update subscription status on Account page
  updateAccountSubscriptionUI();

  switchPage("accountPage");
  showToast("Welcome to your account!", "success");
}

function backToHome() {
  switchPage("homePage");
}

function confirmLogout() {
  if (confirm("Are you sure you want to sign out from all devices?")) {
    logout();
  }
}

function scrollToSection(event, sectionId) {
  event.preventDefault();

  // First switch to home page if not already there
  const homePage = document.getElementById("homePage");
  if (!homePage.classList.contains("active")) {
    switchPage("homePage");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      homePage.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
    }
  }
}

// Optimized Parallax Effect with RequestAnimationFrame
let parallaxTicking = false;
function initializeParallaxEffect() {
  const hero = document.querySelector(".hero");
  const homePage = document.getElementById("homePage");

  if (!hero || !homePage) return;

  homePage.addEventListener(
    "scroll",
    () => {
      if (!parallaxTicking) {
        window.requestAnimationFrame(() => {
          const scrolled = homePage.scrollTop;
          const parallaxSpeed = 0.3;

          // Apply parallax transform
          hero.style.transform = `translate3d(0, ${
            scrolled * parallaxSpeed
          }px, 0)`;

          // Fade out hero content on scroll
          const heroContent = hero.querySelector(".hero-content");
          const opacity = 1 - scrolled / 600;
          if (heroContent) {
            heroContent.style.opacity = Math.max(opacity, 0);
          }

          parallaxTicking = false;
        });
        parallaxTicking = true;
      }
    },
    { passive: true }
  );
}

// Optimized hover tilt effect with throttling
let tiltTimeout;
function addTiltEffect() {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.1s ease";
    });

    card.addEventListener("mousemove", (e) => {
      if (!tiltTimeout) {
        tiltTimeout = setTimeout(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          tiltTimeout = null;
        }, 16); // ~60fps
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "";
    });
  });
}

// Intersection Observer for fade-in animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, observerOptions);

  // Observe sections
  document
    .querySelectorAll(".content-section, .filter-section")
    .forEach((section) => {
      section.classList.add("fade-in-element");
      observer.observe(section);
    });
}

// Open Content Pages (FAQ, Help, Terms, etc.)
function openContentPage(pageId) {
  const user = localStorage.getItem("user");
  if (
    !user &&
    pageId !== "faqPage" &&
    pageId !== "helpPage" &&
    pageId !== "termsPage" &&
    pageId !== "privacyPage" &&
    pageId !== "contactPage"
  ) {
    showToast("Please login first", "error");
    return;
  }

  switchPage(pageId);
}

// Toggle FAQ Items
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const answer = faqItem.querySelector(".faq-answer");
  const icon = element.querySelector(".faq-icon");

  // Close all other FAQs
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (item !== faqItem) {
      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = null;
      item.querySelector(".faq-icon").textContent = "+";
    }
  });

  // Toggle current FAQ
  faqItem.classList.toggle("active");

  if (faqItem.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.textContent = "−";
  } else {
    answer.style.maxHeight = null;
    icon.textContent = "+";
  }
}

// Contact Form Handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(
        "Thank you! Your message has been sent. We'll get back to you soon!",
        "success"
      );
      contactForm.reset();
    });
  }
});

// ===== VIDEO PLAYER FUNCTIONS =====
let currentMovie = null;

// Play movie from modal
function playMovieFromModal() {
  if (currentMovie && currentMovie.videoUrl) {
    playMovie(currentMovie);
    closeModal();
  } else {
    showToast("Video not available for this title", "error");
  }
}

// Main play movie function
function playMovie(movie) {
  const sub = getSubscription();
  if (!sub || !sub.active) {
    showToast("Please subscribe to a plan to watch content", "error");
    switchPage("subscribePage");
    return;
  }

  if (!movie.videoUrl) {
    showToast("Video not available for this title", "error");
    return;
  }

  currentMovie = movie;

  // Set video source and metadata
  const videoPlayer = document.getElementById("mainVideoPlayer");
  const videoSource = document.getElementById("videoSource");
  const videoTitle = document.getElementById("videoTitle");
  const videoYear = document.getElementById("videoYear");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayYear = document.getElementById("overlayYear");

  videoSource.src = movie.videoUrl;
  videoTitle.textContent = movie.title;
  videoYear.textContent = movie.year;
  overlayTitle.textContent = movie.title;
  overlayYear.textContent = movie.year;

  // Reload video with new source
  videoPlayer.load();

  // Switch to video player page
  switchPage("videoPlayerPage");

  // Auto-play the video after a short delay
  setTimeout(() => {
    videoPlayer.play().catch((error) => {
      console.log("Auto-play prevented:", error);
      showToast("Click the play button to start watching", "info");
    });
  }, 300);

  showToast(`Now playing: ${movie.title}`, "success");
}

// Exit video player and return to home
function exitVideoPlayer() {
  const videoPlayer = document.getElementById("mainVideoPlayer");

  // Pause and reset video
  videoPlayer.pause();
  videoPlayer.currentTime = 0;

  // Return to home page
  switchPage("homePage");

  showToast("Returning to browse", "info");
}

// Update movie modal to store current movie data
const originalOpenMovieModal = openMovieModal;
function openMovieModal(movie) {
  currentMovie = movie;
  originalOpenMovieModal(movie);
}

// Play featured movie from hero section
function playHeroMovie() {
  // Play the first trending movie
  if (moviesDatabase.trending && moviesDatabase.trending.length > 0) {
    const featuredMovie = moviesDatabase.trending[0];
    playMovie(featuredMovie);
  } else {
    showToast("No featured content available", "error");
  }
}

// Initialize all features on page load
window.addEventListener("load", () => {
  const user = localStorage.getItem("user");

  // Add smooth transitions to pages
  document.querySelectorAll(".page").forEach((page) => {
    page.style.transition = "opacity 0.3s ease";
  });

  if (user) {
    switchPage("homePage");
    initializeMovies();
    updateUserProfile();
    initializeSearch();
    initializeSmoothScrolling();
    updateMyListCarousel();
    initializeGenreFilter();
    initializeScrollToTop();
    initializeKeyboardShortcuts();
    initializeParallaxEffect();
    initializeScrollAnimations();
    initializeSubscriptionPage();
    updateAccountSubscriptionUI();

    // Add tilt effect after movies load
    setTimeout(() => {
      addTiltEffect();
    }, 500);

    // Show welcome toast
    setTimeout(() => {
      const userData = JSON.parse(user);
      showToast(
        `Welcome back, ${userData.name || userData.email.split("@")[0]}!`,
        "success"
      );
    }, 500);
  } else {
    switchPage("loginPage");
    initializePasswordStrength();
    initializeSubscriptionPage();
  }
});
