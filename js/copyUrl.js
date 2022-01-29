(() => {
  // <stdin>
  document.getElementById("copyButton").addEventListener("click", copyToClipboard);
  var currentUrl = window.location;
  var copyTextContainer = document.getElementById("copyText");
  var toolTip = document.getElementById("toolTip");
  function copyToClipboard() {
    copyTextContainer.value = currentUrl;
    copyTextContainer.focus();
    copyTextContainer.select();
    document.execCommand("copy");
    toolTip.style.animationName = "pan-toolbar";
    setTimeout(function() {
      toolTip.style.removeProperty("animation-name");
    }, 2e3);
  }
})();
