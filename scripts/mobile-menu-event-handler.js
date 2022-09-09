import * as modalController from "./modal-handler.js";

function State() {
  this.menuButtons = null;
  this.container = null;
}

const state = new State();

export function init() {
  state.menuButtons = [
    document.querySelector(".expand-button"),
    document.querySelector(".close-button"),
  ];
  state.menuButtons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
  );
  state.container = document.querySelector(".nav-container");
}

export const toggleMenu = () => {
  state.menuButtons.forEach((button) => button.classList.toggle("hidden"));
  state.container.classList.toggle("toggle-menu");
};

const handleButtonClick = () => {
  toggleMenu();
  modalController.toggleModal();
};
