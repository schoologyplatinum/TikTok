const TIKTOK_URL = "https://www.tiktok.com/";

function openTikTok() {
  // Direct top-level navigation: no proxy, iframe, or third-party backend.
  window.location.assign(TIKTOK_URL);
}

document.getElementById("openTikTok").addEventListener("click", openTikTok);
document.getElementById("openTikTokSecondary").addEventListener("click", openTikTok);
document.getElementById("year").textContent = new Date().getFullYear();
