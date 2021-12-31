export function hideEffect() {
  const header = document.getElementById("main-header");
  header.classList.add("display-none");
}

export function removeHideEffect() {
  const header = document.getElementById("main-header");
  header.classList.remove("display-none");
}
