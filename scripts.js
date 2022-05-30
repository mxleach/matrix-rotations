const makeNewMatrix = function () {
  return [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
  ];
};

let processedMatrix;

const populateCell = function (cellId, value) {
  const element = document.getElementById("c" + cellId);
  element.innerHTML = value;
  return true;
};

const displayMatrix = function (matrix) {
  //process rows
  for (let r=0; r < matrix.length; r++){
    const row = matrix[r];
    // process columns
    for (let c=0; c < row.length; c++) {
      const column = row[c];
      const cellId = r.toString() + c.toString();
      populateCell(cellId, column);
    }
  }
};


function swap(matrix, r ,c, newR, newC) {
  let temp = matrix[c][r];
  matrix[c][r] = matrix [newC][newR];
  matrix[newC][newR] = temp; 

};

// exchange columns
function exchangeCols(matrix){
  // Working in from the Outside
  let N = matrix.length; // we need only swap N/2 (rounded down)
  let n = Math.floor(N / 2); // round down to integer
  for (let col = 0; col <N; col++) {
    for (let row =0; row < N; row++) {
      swap(matrix, col, row, N - 1 - col, row);
    }
  }
};

function transpose() {
  processedMatrix = makeNewMatrix();
  // process row 
  for (let r = 0; r < processedMatrix.length - 1; r++) {
    for (let c = r + 1; c < processedMatrix.length; c++){
      swap(processedMatrix, r, c, c, r);
    }
  }
};

function rotate() {
  transpose();
  exchangeCols(processedMatrix);
};

function update() {
  displayMatrix(processedMatrix);
};

function reset() {
  processedMatrix = makeNewMatrix();
  displayMatrix(processedMatrix);
};

reset();