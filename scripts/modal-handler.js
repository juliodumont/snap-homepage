import * as MobileMenuHandler from "./mobile-menu-event-handler.js";

function State() {
  this.container = null;
}

const state = new State();

export function init() {
  state.container = document.querySelector(".mobile-menu-modal");
  state.container.addEventListener("click", handleContainerClick);
}

export function showModal() {
  state.container.classList.add("active");
}

export function hideModal() {
  state.container.classList.remove("active");
}

export function toggleModal() {
  state.container.classList.toggle("active");
}

function handleContainerClick(event) {
  if (this == event.target) {
    hideModal();
    MobileMenuHandler.toggleMenu();
  }
}
