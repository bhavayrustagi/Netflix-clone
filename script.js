// Movie Database with Real Movie Names and Poster URLs
const moviesDatabase = {
  trending: [
    {
      title: "Oppenheimer",
      year: 2023,
      image: "https://images.wallpapersden.com/image/download/oppenheimer-movie-poster-hd-cillian-murphy_bmVpbGWUmZqaraWkpJRpZWVlrWtoaGc.jpg",
    },
    {
      title: "Barbie",
      year: 2023,
      image: "https://www.chromethemer.com/wallpapers/android/images/640/barbie-hd-wallpaper-for-android.png",
    },
    {
      title: "Killers of the Flower Moon",
      year: 2023,
      image: "https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "The Hunger Games: Ballad of Songbirds and Snakes",
      year: 2023,
      image: "https://m.media-amazon.com/images/M/MV5BZDk2YjNhYzEtYzg2ZC00OWEwLWJhYzgtMGUzMWVjNDFmYzI5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Dune: Part Two",
      year: 2024,
      image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Inside Out 2",
      year: 2024,
      image: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
    },
  ],
  action: [
    {
      title: "John Wick: Chapter 4",
      year: 2023,
      image: "https://images.wallpapersden.com/image/download/new-john-wick-4-poster-hd_bW5tZmmUmZqaraWkpJRnZWVlrWhlZWU.jpg",
    },
    {
      title: "Fast X",
      year: 2023,
      image: "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_QL75_UX190_CR0,10,190,281_.jpg",
    },
    {
      title: "Mission: Impossible - Dead Reckoning Part One",
      year: 2023,
      image: "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "The Expendables 4",
      year: 2023,
      image: "https://cdn.mediaplaynews.com/wp-content/uploads/2023/11/Expendables-4-UHD-BD.jpg",
    },
    {
      title: "Aquaman and the Lost Kingdom",
      year: 2023,
      image: "https://m.media-amazon.com/images/M/MV5BNDM3OTZjOTEtYWU3MC00OGUxLWJiOTctMDkwZWJmYjAxNzEyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "The Beekeeper",
      year: 2024,
      image: "https://m.media-amazon.com/images/M/MV5BNGEwYWU2NmQtNjU5NS00ZjkzLWE2ZTYtYzgzMjEzOGJhYWQwXkEyXkFqcGc@._V1_.jpg",
    },
  ],
  drama: [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "The Godfather",
      year: 1972,
      image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Forrest Gump",
      year: 1994,
      image: "https://w0.peakpx.com/wallpaper/1/639/HD-wallpaper-forrest-gump-love-movie-thumbnail.jpg",
    },
    {
      title: "The Pursuit of Happyness",
      year: 2006,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYMdhzuHEPl0z4a8RUnxFaIBLTwknxaqkxw&s",
    },
    {
      title: "Parasite",
      year: 2019,
      image: "https://w0.peakpx.com/wallpaper/984/790/HD-wallpaper-parasite-2019-2019-best-korean-movie-parasite.jpg",
    },
    {
      title: "Nomadland",
      year: 2020,
      image: "https://m.media-amazon.com/images/M/MV5BODAwMjRjOTMtZWQzMC00MDhkLTk4ZjUtZjYxMjlmZjJkYzJiXkEyXkFqcGc@._V1_.jpg",
    },
  ],
  comedy: [
    {
      title: "The Grand Budapest Hotel",
      year: 2014,
      image: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Knives Out",
      year: 2019,
      image: "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Superbad",
      year: 2007,
      image: "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "The Hangover",
      year: 2009,
      image: "https://c8.alamy.com/comp/2JP69F5/bradley-cooper-zach-galifianakis-ed-helms-poster-the-hangover-2009-2JP69F5.jpg",
    },
    {
      title: "Bridesmaids",
      year: 2011,
      image: "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Barbie",
      year: 2023,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWhoxwmwEWuKusB8BNbc0PNmNHzjW2fn32g&s",
    },
  ],
  scifi: [
    {
      title: "Inception",
      year: 2010,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      title: "Interstellar",
      year: 2014,
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "The Matrix",
      year: 1999,
      image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Avatar",
      year: 2009,
      image: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Dune",
      year: 2021,
      image: "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Blade Runner 2049",
      year: 2017,
      image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    },
  ],
}

// Page Switching Function
function switchPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })

  // Show selected page
  document.getElementById(pageId).classList.add("active")
}

// Initialize Movies on Home Page
function initializeMovies() {
  populateCarousel("trendingCarousel", moviesDatabase.trending)
  populateCarousel("actionCarousel", moviesDatabase.action)
  populateCarousel("dramaCarousel", moviesDatabase.drama)
  populateCarousel("comedyCarousel", moviesDatabase.comedy)
  populateCarousel("scifiCarousel", moviesDatabase.scifi)
}

// Populate Movie Carousel
function populateCarousel(carouselId, movies) {
  const carousel = document.getElementById(carouselId)
  carousel.innerHTML = ""

  movies.forEach((movie) => {
    const movieCard = document.createElement("div")
    movieCard.className = "movie-card"
    movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/200x300?text=${encodeURIComponent(movie.title)}'">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `
    carousel.appendChild(movieCard)
  })
}

// Login Form Handler
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault()
  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  if (email && password) {
    // Store user info in localStorage
    localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }))

    // Switch to home page
    switchPage("homePage")
    initializeMovies()

    // Clear form
    this.reset()
  }
})

// Signup Form Handler
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault()
  const name = document.getElementById("signupName").value
  const email = document.getElementById("signupEmail").value
  const password = document.getElementById("signupPassword").value
  const confirmPassword = document.getElementById("signupConfirmPassword").value

  if (password !== confirmPassword) {
    alert("Passwords do not match!")
    return
  }

  if (name && email && password) {
    // Store user info in localStorage
    localStorage.setItem("user", JSON.stringify({ email, name }))

    // Switch to home page
    switchPage("homePage")
    initializeMovies()

    // Clear form
    this.reset()
  }
})

// Logout Function
function logout() {
  localStorage.removeItem("user")
  switchPage("loginPage")
  document.getElementById("loginForm").reset()
}

// Check if user is logged in on page load
window.addEventListener("load", () => {
  const user = localStorage.getItem("user")
  if (user) {
    switchPage("homePage")
    initializeMovies()
  } else {
    switchPage("loginPage")
  }
})
