
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
