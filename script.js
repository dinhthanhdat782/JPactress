const setSortField = (type) => {
  document.querySelector("#sort").value = type;
  document.querySelector("#search-form").submit();
};
const onSearchChange = (type) => {
  const value = document.querySelector(`#search-${type}`).value.toLowerCase();
  const items = document.querySelectorAll(`#list-${type} li`);
  items.forEach((item) => {
    const text = item.querySelector("label span").textContent.toLowerCase();
    item.style.display = text.includes(value) ? "inline-block" : "none";
  });
};
const triggerAlert = (message) => {
  const popup = document.querySelector("#alert-popup");
  popup.innerHTML = message;
  mdb.Alert.getInstance(popup).show();
};
document.addEventListener("DOMContentLoaded", () => {
  const elCollapseBtn = document.querySelector("#btn-collapse");
  if (elCollapseBtn) {
    const elCollapseIcon = elCollapseBtn.querySelector("i");
    const elCollapsePanel = document.querySelector("#collapse-details");
    const elTitle = document.querySelector("#title");
    elCollapseBtn.click();
    elCollapsePanel.addEventListener("hidden.bs.collapse", () => {
      elCollapseIcon.classList.remove("fa-chevron-up");
      elCollapseIcon.classList.add("fa-chevron-down");
      elTitle.classList.add("ellipsis-2");
    });
    elCollapsePanel.addEventListener("shown.bs.collapse", () => {
      elCollapseIcon.classList.remove("fa-chevron-down");
      elCollapseIcon.classList.add("fa-chevron-up");
      elTitle.classList.remove("ellipsis-2");
    });
  }
  const elPlayer = document.querySelector("#player");
  if (elPlayer) {
    const parts = document.querySelectorAll("#episodes button.dropdown-item");
    parts.forEach((part) => {
      part.addEventListener("click", () => {
        elPlayer.setAttribute("src", part.getAttribute("data-episode"));
        parts.forEach((p) => p.classList.remove("active"));
        part.classList.add("active");
      });
    });
  }
  const triggerCloseBanner = () => {
    const closeButtons = document.querySelectorAll(".btn-close-banner");
    if (!closeButtons) return;
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.classList.add("d-none");
      });
    });
  };
  triggerCloseBanner();
  const liveSearch = document.querySelector("#live");
});
