const gridContainer = document.getElementById("grid-container");

function createGrid() {
  gridContainer.innerHTML = "";

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      if (grid[row][col] === "blocked") cell.classList.add("blocked");
      else if (grid[row][col] === "object") cell.classList.add("object");
      else if (grid[row][col] === "agent") cell.classList.add("agent");
      else cell.classList.add("open");

      gridContainer.appendChild(cell);
    }
  }
}

// Initialize the grid and start the simulation
initializeGrid();
createGrid();
setTimeout(moveAgent, 1000);
