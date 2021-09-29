import { MSDSort } from '../src/alg/msd-sort'

describe('test MSDSort', () => {
  it('test MSDSort', () => {
    const input = ['BCA', 'CBAA', 'AC', 'BADFE', 'ABC', 'CBA']
    const output = ['ABC', 'AC', 'BADFE', 'BCA', 'CBA', 'CBAA']
    expect(MSDSort(input)).toEqual(output)
  })
})
