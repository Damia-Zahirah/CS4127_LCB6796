//Search Function
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

if (searchInput && searchBtn) {
  function searchPage() {

    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
      alert("Please enter something to search.");
      return;
    }

    const searchItems = document.querySelectorAll(
      ".about-card, .discover-card, .culture-card, .food-card, .visit-card, .hotel-card, .plan-card, .pic-container, .etiquette-container, .market-container, .weather-container, section"
    );

//Remove previous highlights
    searchItems.forEach(item => {
      item.classList.remove("search-result");
    });
    
    let found = false;

    searchItems.forEach(item => {
      if (!found && item.textContent.toLowerCase().includes(searchText)) {

        item.classList.add("search-result");
        item.scrollIntoView({
          behavior:"smooth",
          block:"center"
        });

        found = true;
      }
    });

      if (!found) {
        alert("Sorry, there is no matching information!");
      }
  }

  searchBtn.addEventListener("click", searchPage);
  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchPage();
    }
  });
}

//Back to Top Button
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", function() {

    if (window.scrollY > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

//Popup Message
const contactForm = document.getElementById("contactForm");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

if (contactForm && successPopup && closePopup) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (contactForm.checkValidity()) {
      successPopup.style.display = "flex";
      contactForm.reset();
    } else {
      contactForm.reportValidity();
    }
  });

  closePopup.addEventListener("click", function() {
    successPopup.style.display = "none";
  });

//Close popup when clicking outside
successPopup.addEventListener("click", function(event) {

  if (event.target === successPopup) {
    successPopup.style.display = "none";
  }
});
}