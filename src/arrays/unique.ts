type ArgType = string | number

/**
 * Filters any duplicate values out of an Array, effectively letting you use a
 * basic Array as a Set.
 *
 * Note that this uses simple value comparison, and will only work as
 * expected with primitive numbers and string, since objects will always
 * serialize to something like [Object object].
 * @param arr
 */
export function unique(arr: ArgType[]): ArgType[] {
  const used: { [key: string]: boolean } = {}
  const uniq: ArgType[] = []

  for (const val of arr) {
    if (!(val in used)) {
      uniq.push(val)
    }

    used[val] = true
  }

  return uniq
}
