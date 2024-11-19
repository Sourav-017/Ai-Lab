
function createGrid(size) {
  const grid = [];
  for (let row = 0; row < size; row++) {
    const gridRow = [];
    for (let col = 0; col < size; col++) {
      gridRow.push(Math.random() < 0.2 ? "object" : "open");
    }
    grid.push(gridRow);
  }
  return grid;
}


function detect_object(grid, row, col) {
  return grid[row][col] === "object";
}

function calculateProbabilities(grid, testCases) {
  const probabilities = [];
  for (let row = 0; row < grid.length; row++) {
    const probRow = [];
    for (let col = 0; col < grid[row].length; col++) {
      let count = 0;
      for (let i = 0; i < testCases; i++) {
        if (grid[row][col] === "object") count++;
      }
      probRow.push(count / testCases);
    }
    probabilities.push(probRow);
  }
  return probabilities;
}
