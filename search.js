
  const searchIcon = document.querySelector(".search-icon");
  const searchBox = document.querySelector(".search-box");

  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
      searchBox.focus();
    }
  });

  // nếu click ra ngoài thì thu lại
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-icon") && !e.target.closest(".search-box")) {
      searchBox.classList.remove("active");
    }
  });