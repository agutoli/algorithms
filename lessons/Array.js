
export const CyclicRotation = (A, K) => {
  if (!A.length) return [];
  for(let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}

export const OddOccurrencesInArray = (A) => {
  A.sort((a, b) => parseInt(a) - parseInt(b));
  for(let i = 0; i < A.length; i++) {
    if (A[i] !== A[i+1]) {
      return A[i];
    }
    i++;
  }
}
