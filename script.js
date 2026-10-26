const regions = [
  { name: "Madikeri", rain: 286, description: "Illustrative high-rainfall collection zone.", status: "Collection" },
  { name: "Somwarpet", rain: 240, description: "Illustrative storage monitoring zone.", status: "Monitoring" },
  { name: "Dry-zone village", rain: 90, description: "Example priority area requiring local needs assessment.", status: "Priority" }
];

const regionButtons = document.querySelectorAll(".region-row");
const detailName = document.getElementById("detailName");
const detailRain = document.getElementById("detailRain");
const detailDescription = document.getElementById("detailDescription");

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const region = regions[Number(button.dataset.region)];
    if (!region) return;

    regionButtons.forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");

    detailName.textContent = region.name;
    detailRain.textContent = `${region.rain} mm`;
    detailDescription.textContent = region.description;
  });
});

document.getElementById("suggestionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("suggestion");
  const message = document.getElementById("formMessage");
  const suggestion = input.value.trim();

  if (!suggestion) {
    message.textContent = "Please enter a suggestion first.";
    return;
  }

  // Demo only: no backend or database is connected, so this does not save data.
  message.textContent = "Thanks! Your suggestion is shown as submitted in this demo. It has not been saved to a server.";
  input.value = "";
});

document.getElementById("year").textContent = new Date().getFullYear();
regionButtons.forEach((button) => button.setAttribute("aria-pressed", button.classList.contains("selected") ? "true" : "false"));
