(() => {
  // <stdin>
  window.addEventListener("resize", toggleLogo);
  var lrw = window.matchMedia("(max-width: 735px)");
  var law = window.matchMedia("(min-width: 735px)");
  function toggleLogo() {
    if (lrw.matches) {
      document.getElementById("logo-mobile").classList.remove("hidden");
      document.getElementById("logo-desktop").classList.add("hidden");
    } else if (law.matches) {
      document.getElementById("logo-mobile").classList.add("hidden");
      document.getElementById("logo-desktop").classList.remove("hidden");
    }
  }
})();
