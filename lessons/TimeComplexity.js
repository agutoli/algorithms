
export const FrogJmp = (X, Y, D) => {
  let jump = Math.ceil((Y - X) / D);
  for(let i = (jump * D) + X; i < Y; i = i + D) {
    jump++;
  }
  return jump;
}

export const PermMissingElem = (A) => {
  A.sort((a, b) => parseInt(a) - parseInt(b));
  for(let i = 0; i < A.length + 1; i++) {
    let index = i + 1;
    if (index !== A[i]) {
      return index;
    }
  }
  return 1;
}

export const TapeEquilibrium = (A) => {
    const N = A.length;

    if (N === 1) return Math.abs(A[0]);

    let leftSum = A[0];
    let rightSum = A.filter((a, index) => index >= 1).reduce((a, b) => a + b, 0);
    let minDiff = Math.abs(leftSum - rightSum);

    for (let P = 1; P < (N - 1); P++) {
      leftSum += A[P];
      rightSum -= A[P];
      minDiff = Math.min(minDiff, Math.abs(leftSum - rightSum));
    }
    return minDiff;
}
