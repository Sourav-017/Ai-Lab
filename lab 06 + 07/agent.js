async function moveAgent(probabilities) {
  const t_prob = JSON.parse(JSON.stringify(probabilities)); 

  while (true) {
    const maxProbabilityCell = findMaxProbabilityCell(t_prob);
    if (maxProbabilityCell.x === -1) {
      console.log("No valid move");
      break;
    }

    const { x, y } = maxProbabilityCell;

    if (grid[x][y] === 1) {
      probabilities[x][y] = Math.min(probabilities[x][y] + 0.05, 1); 
      collectedObjects++;
      grid[x][y] = 0;
      successfulMoves++;
    } else {
      probabilities[x][y] = Math.max(probabilities[x][y] - 0.05, 0); 
      unsuccessfulMoves++;
    }

    agentPosition = maxProbabilityCell;

    const agentCell =
      document.getElementById("grid").children[
        agentPosition.x * gridSize + agentPosition.y
      ];
    const existingAgent = agentCell.querySelector(".agent");

    if (existingAgent) {
      existingAgent.remove();
    }

    const agentDiv = document.createElement("div");
    agentDiv.classList.add("agent");
    agentDiv.innerText = "🏎️";
    agentCell.appendChild(agentDiv);

    // Update stats in the UI
    document.getElementById("successfulMoves").innerText = successfulMoves;
    document.getElementById("unsuccessfulMoves").innerText = unsuccessfulMoves;

    const totalMoves = successfulMoves + unsuccessfulMoves;

    if (totalMoves > 0) {
      perf = (successfulMoves / totalMoves) * 100;
      document.getElementById("perf").innerText = perf.toFixed(2) + "%";
    }

    console.log(`Performance: ${perf}%`);

    if (totalMoves > 25) {
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    t_prob[x][y] = 0;
  }
}

function findMaxProbabilityCell(t_probabilities) {
  let maxProbability = -1;
  let maxCell = { x: -1, y: -1 };

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      if (
        t_probabilities[x][y] >= 0.4 &&
        t_probabilities[x][y] > maxProbability
      ) {
        maxProbability = t_probabilities[x][y];
        maxCell = { x, y };
      }
    }
  }

  return maxCell;
}
