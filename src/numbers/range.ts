/**
 * Returns an Array of ints from `start` to `start + size`.
 * Note that `start` defaults to 0 and `size` is exclusive.
 *
 * @param size
 * @param start
 */
export const range = (size: number, start = 0): number[] =>
  Array(size)
    .fill(null)
    .map((_, i) => i + start)
