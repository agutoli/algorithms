
export const FrogRiverOne = (X, A) => {
  const founded = {};
  const N = A.length;

  let steps = X;
  for (let time = 0; time < N; time++){
    if (!founded[A[time]]) {
      founded[A[time]] = true;
      steps--;
    }
    if(steps === 0) return time;
  }
  return -1;
}
