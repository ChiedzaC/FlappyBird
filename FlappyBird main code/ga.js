// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Neuro-Evolution Flappy Bird

function nextGeneration() {
  console.log('next generation');
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    //New code
    let parentA = pickOne();
    let parentB = pickOne();
    let child = crossOver(parentA, parentB);
    //
    child.mutate();
    birds[i] = child; // we needed this
  }
  savedBirds = [];
}
//Cheidzas pickOne
function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedBirds[index].fitness;
    index++;
  }
  index--;
  return savedBirds[index];
}
//New function
function crossOver(parentA,parentB) {
  return new Bird(parentA.brain,parentB.brain);
}

function calculateFitness() {
  let sum = 0;
  for (let bird of savedBirds) {
    sum += bird.score;
  }
  for (let bird of savedBirds) {
    bird.fitness = bird.score / sum;
  }
}
