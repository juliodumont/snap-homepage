const menuButtons = [
  document.querySelector(".expand-button"),
  document.querySelector(".close-button"),
];
const modal = document.querySelector(".mobile-menu-modal");
const navContainer = document.querySelector(".nav-container");
const featuresDropdown = document.getElementById("features");
const features = document.querySelector(".feature-dropdown-menu");
const companyDropdown = document.getElementById("company");
const company = document.querySelector(".company-dropdown-menu");

const handleDropdown = (event) => {
  const setDisplay =
    event.type === "mouseover" ? "display:unset;" : "display:none;";

  event.target.id == "features"
    ? features.setAttribute("style", setDisplay)
    : company.setAttribute("style", setDisplay);
};

const handleButtonClick = () => {
  menuButtons.forEach((button) => button.classList.toggle("hidden"));
  navContainer.classList.toggle("toggle-menu");
  modal.classList.toggle("hidden");
};

menuButtons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

featuresDropdown.addEventListener("mouseover", handleDropdown);
featuresDropdown.addEventListener("mouseleave", handleDropdown);
companyDropdown.addEventListener("mouseover", handleDropdown);
companyDropdown.addEventListener("mouseleave", handleDropdown);
