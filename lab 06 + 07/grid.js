let gridSize = 5;
let grid = [];

function generateGrid() {
  grid = [];

  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      if (Math.random() < 0.5) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    grid.push(row);
  }
}

function displayGrid(probabilities) {
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      const probability = probabilities[x][y];
      cell.style.backgroundColor = `rgba(0, 150, 0, ${probability})`;
      if (grid[x][y] === 1) {
        cell.style.backgroundColor = "blue";
      } else {
        cell.style.backgroundColor = "white";
      }

      const probabilityText = document.createElement("div");
      probabilityText.innerText = probability.toFixed(2);
      cell.appendChild(probabilityText);
      gridElement.appendChild(cell);
    }
  }
}
