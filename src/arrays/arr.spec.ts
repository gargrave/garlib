import { arr } from './arr'

describe('arr', () => {
  it('returns a new Array of the correct length, filled with `undefined`', () => {
    const result1 = arr(1)
    const result3 = arr(3)
    const result5 = arr(5)

    expect(result1).toEqual([undefined])
    expect(result3).toEqual([undefined, undefined, undefined])
    expect(result5).toEqual([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ])
  })

  it('returns an empty Array if `len` <= 0', () => {
    const result0 = arr(0)
    const result1 = arr(-1)

    expect(result0).toEqual([])
    expect(result1).toEqual([])
  })
})
