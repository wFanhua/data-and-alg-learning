import LinearSearch from '../src/alg/linear-search/index'
import { CompareTo } from '../src/type'

interface IStudent {
  firstName: string
  age: number
}

describe('Linear Search Test', () => {
  it('works if data is number', () => {
    const data: number[] = [3, 6, 9, 0, 1]

    expect(LinearSearch.search(data, 9)).toEqual(2)
    expect(LinearSearch.search(data, 100)).toEqual(-1)
  })

  it('works if data is string', () => {
    const data: string[] = ['a', 'b', 'c', 'e', 'm']

    expect(LinearSearch.search(data, 'c')).toEqual(2)
    expect(LinearSearch.search(data, 'q')).toEqual(-1)
  })

  it('works if data is object', () => {
    const studentOne: IStudent = {
      firstName: 'w',
      age: 18
    }
    const studentTwo: IStudent = {
      firstName: 'f',
      age: 16
    }
    const studentThree: IStudent = {
      firstName: 'a',
      age: 15
    }

    const data: IStudent[] = [studentThree, studentOne, studentTwo]

    const compareTo: CompareTo<IStudent> = (one, two) => {
      return one.age - two.age
    }
    expect(LinearSearch.search(data, { firstName: 'c', age: 15 })).toEqual(-1)
    expect(LinearSearch.search(data, { firstName: 'c', age: 15 }, compareTo)).toEqual(0)
    expect(LinearSearch.search(data, { firstName: 'c', age: 100 }, compareTo)).toEqual(-1)
  })
})
