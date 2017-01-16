
export const FrogJmp = (X, Y, D) => {
  let jump = Math.ceil((Y - X) / D);
  for(let i = (jump * D) + X; i < Y; i = i + D) {
    jump++;
  }
  return jump;
}
