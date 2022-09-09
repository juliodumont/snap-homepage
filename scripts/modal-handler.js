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

function handleContainerClick(event) {
  if (this == event.target) {
    hideModal();
  }
}
