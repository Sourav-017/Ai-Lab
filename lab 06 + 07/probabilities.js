let probabilities = [];
let tmp_prob = []; 

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

function calculateProbabilities() {
  probabilities = [];

  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(0);
    }
    probabilities.push(row);
    tmp_prob.push(row);
  }

  for (let i = 0; i < 200; i++) {
    generateGrid();
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        probabilities[x][y] += grid[x][y];
      }
    }
  }

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      probabilities[x][y] /= 200;
    }
  }
}
