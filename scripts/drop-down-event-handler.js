function State() {
  this.dropdownMenus = null;
  this.dropdownArrows = null;
  this.containers = null;
  this.validContainers = null;
}

const state = new State();

export function init() {
  state.dropdownMenus = [
    document.querySelector("#features"),
    document.querySelector("#company"),
  ];

  state.containers = document.querySelectorAll(".dropdown-menu");

  state.dropdownArrows = document.querySelectorAll(".dropdown-arrow");

  state.dropdownMenus.forEach((dropdownMenu) => {
    dropdownMenu.addEventListener("touchstart", handleDropdownToggle);
    dropdownMenu.addEventListener("click", handleDropdownToggle);
  });
}

const handleDropdownToggle = (event) => {
  event.preventDefault();
  const targetFeatures =
    event.target.id == "features" || event.target.id == "features-arrow";
  const container = state.containers[targetFeatures ? 0 : 1];
  container.classList.toggle("active");
  state.dropdownArrows.forEach((dropdownArrow, index) => {
    if (targetFeatures && index < 2) {
      dropdownArrow.classList.toggle("hidden");
    } else if (!targetFeatures && index >= 2) {
      dropdownArrow.classList.toggle("hidden");
    }
  });
};
