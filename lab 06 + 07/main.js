async function runSimulation() {
  collectedObjects = 0;
  successfulMoves = 0;
  unsuccessfulMoves = 0;

  calculateProbabilities();

  tmp_prob = probabilities;
  for (let i = 0; i < 10; i++) {
    document.getElementById("tc").innerText = i + 1;

    tmp_prob = probabilities;
    console.log(tmp_prob);
    collectedObjects = 0;
    successfulMoves = 0;
    unsuccessfulMoves = 0;
    agentPosition = { x: 0, y: 0 };
    generateGrid();
    displayGrid(probabilities);
    await moveAgent(probabilities);
    // for (let j = 0; j < 5; j++) {
    //   for (let k = 0; k < 5; k++) {
    //     probabilities[j][k] = tmp_prob[j][k];
    //   }
    // }
    console.log(probabilities);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
runSimulation();
