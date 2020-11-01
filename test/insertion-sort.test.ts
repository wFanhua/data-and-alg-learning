import InsertionSort from '../src/alg/insertion-sort'
import { CompareTo } from '../src/type'

interface IStudent {
  firstName: string
  age: number
}

describe('Insertion Sort Test', () => {
  it('works if data is number', () => {
    const data: number[] = [3, 6, 9, 0, 1]
    InsertionSort.sort(data)
    expect(data).toEqual([0, 1, 3, 6, 9])

    const data2: number[] = [3, 6, 9, 0, 1]
    InsertionSort.sort2(data2)
    expect(data).toEqual([0, 1, 3, 6, 9])
  })

  it('works if data is string', () => {
    const data: string[] = ['z', 'b', 'a', 'd', 'c']
    InsertionSort.sort(data)
    expect(data).toEqual(['a', 'b', 'c', 'd', 'z'])

    const data2: string[] = ['z', 'b', 'a', 'd', 'c']
    InsertionSort.sort2(data2)
    expect(data).toEqual(['a', 'b', 'c', 'd', 'z'])
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

    const data2: IStudent[] = [studentThree, studentOne, studentTwo]

    const compareTo: CompareTo<IStudent> = (one, two) => {
      return one.age - two.age
    }

    InsertionSort.sort(data, compareTo)

    expect(data).toEqual([studentThree, studentTwo, studentOne])

    InsertionSort.sort2(data2, compareTo)

    expect(data).toEqual([studentThree, studentTwo, studentOne])
  })
})
