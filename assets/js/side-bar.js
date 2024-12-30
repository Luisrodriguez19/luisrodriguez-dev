document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const targetId = this.getAttribute("data-bs-target");
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("data-bs-target") === targetId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
