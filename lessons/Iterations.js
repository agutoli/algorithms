
/**
 * @see https://codility.com/programmers/lessons/1-iterations/binary_gap/
 */
export const BinaryGap = (N) => {
  let binary = N.toString('2');
  return binary
    .replace(/[0]+$/, '')// right trim zeros
    .split('1')
    .reduce((gap, zero) => Math.max(zero.length, gap), 0);
}
