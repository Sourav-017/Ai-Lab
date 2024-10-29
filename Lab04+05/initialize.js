const gridSize = 12;
let grid = Array.from({ length: gridSize }, () =>
  Array.from({ length: gridSize }, () => "open")
);

let agentPosition = { row: 0, col: 0 };
let lastPosition = null;

function initializeGrid() {
  // Set random blocked cells
  for (let i = 0; i < 20; i++) {
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    grid[row][col] = "blocked";
  }

  // Set random object cells

  for (let i = 0; i < 15; i++) {
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    if (
      grid[row][col] === "open" &&
      row != 0 &&
      row != 11 &&
      col != 0 &&
      col != 11
    )
      grid[row][col] = "object";
  }

  // Place agent in a random open cell
  let agentPlaced = false;
  while (!agentPlaced) {
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    if (
      grid[row][col] === "open" &&
      row != 0 &&
      row != 11 &&
      col != 0 &&
      col != 11
    ) {
      grid[row][col] = "agent";
      agentPosition = { row, col };
      agentPlaced = true;
    }
  }
}
