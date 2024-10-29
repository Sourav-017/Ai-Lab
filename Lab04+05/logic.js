function moveUp(row, col) {
  return { row: row - 1, col: col };
}

function moveDown(row, col) {
  return { row: row + 1, col: col };
}

function moveLeft(row, col) {
  return { row: row, col: col - 1 };
}

function moveRight(row, col) {
  return { row: row, col: col + 1 };
}

function detect_hurdle(grid, row, col) {
  if (grid[row][col] === "blocked") return true;
  else return false;
}

function detect_object(grid, row, col) {
  if (grid[row][col] === "object") return true;
  else return false;
}

function findNearestObject(row, col, grid) {
  const gridSize = grid.length;
  var queue = [{ row: row, col: col, path: [] }];
  var visited = new Set();
  visited.add(row + "," + col);

  while (queue.length) {
    var current = queue.shift();
    var currentRow = current.row;
    var currentCol = current.col;
    var path = current.path;

    if (detect_object(grid, currentRow, currentCol)) {
      console.log(path);
      return { path: path, location: { row: currentRow, col: currentCol } };
    }

    var directions = [
      moveUp(currentRow, currentCol),
      moveDown(currentRow, currentCol),
      moveLeft(currentRow, currentCol),
      moveRight(currentRow, currentCol),
    ];

    for (var i = 0; i < directions.length; i++) {
      var newRow = directions[i].row;
      var newCol = directions[i].col;
      var pos = newRow + "," + newCol;

      if (
        newRow >= 0 &&
        newRow < gridSize &&
        newCol >= 0 &&
        newCol < gridSize &&
        detect_hurdle(grid, newRow, newCol) == false &&
        !visited.has(pos)
      ) {
        visited.add(pos);
        queue.push({
          row: newRow,
          col: newCol,
          path: path.concat([{ row: newRow, col: newCol }]),
        });
      }
    }
  }
  return null; 
}

function moveAgent() {
  var row = agentPosition.row;
  var col = agentPosition.col;

  if (row === 0 || row === gridSize - 1 || col === 0 || col === gridSize - 1) {
    alert("Agent reached the edge of the grid. Simulation stopped!");
    return;
  }

  var result = findNearestObject(row, col, grid);
  if (result) {
    var path = result.path;
    if (path && path.length > 0) {
      var nextMove = path[0];
      grid[row][col] = "open";
      agentPosition = { row: nextMove.row, col: nextMove.col };
      grid[nextMove.row][nextMove.col] = "agent";
      createGrid();
      setTimeout(moveAgent, 500);
    }
  } else {
    alert("No object found. Terminating the simulation.");
    return;
  }
}
