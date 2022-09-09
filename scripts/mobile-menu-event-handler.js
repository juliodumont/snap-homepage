const menuButtons = [
  document.querySelector(".expand-button"),
  document.querySelector(".close-button"),
];

const modal = document.querySelector(".mobile-menu-modal");
const navContainer = document.querySelector(".nav-container");

const handleButtonClick = () => {
  menuButtons.forEach((button) => button.classList.toggle("hidden"));
  navContainer.classList.toggle("toggle-menu");
  modal.classList.toggle("hidden");
};

menuButtons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

function State() {
  this.container = null;
}

const state = new State();

export function init() {}
