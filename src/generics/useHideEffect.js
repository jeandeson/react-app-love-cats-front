export function hideEffect() {
  const nav = document.getElementById("main-nav");
  const header = document.getElementById("main-header");
  nav.classList.add("display-none");
  header.classList.add("display-none");
}

export function removeHideEffect() {
  const nav = document.getElementById("main-nav");
  const header = document.getElementById("main-header");
  nav.classList.remove("display-none");
  header.classList.remove("display-none");
}
