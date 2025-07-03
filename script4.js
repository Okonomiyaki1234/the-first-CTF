document.addEventListener("DOMContentLoaded", () => {
  const agreeBtn = document.getElementById("agreeBtn");
  const declineBtn = document.getElementById("declineBtn");
  const closeBtn = document.getElementById("closeBtn");
  const banner = document.getElementById("cookieBanner");

  function handleConsent() {
    window.location.href = "indexa.html";
  }

  function closeBanner() {
    banner.style.display = "none";
  }

  agreeBtn.addEventListener("click", handleConsent);
  declineBtn.addEventListener("click", handleConsent);
  closeBtn.addEventListener("click", closeBanner);
});