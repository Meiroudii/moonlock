const style = document.createElement("style");
style.textContent = `
  html, body {
    background: black !important;
    color: gray !important;
  }
  * {
    color: gray !important;
    background-color: transparent !important;
  }
`;
document.documentElement.appendChild(style);
