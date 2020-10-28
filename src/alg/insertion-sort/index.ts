import { CompareTo } from '../../type'
import { swap } from '../util'

class InsertionSort {
  public static sort<T>(ary: T[], compareTo?: CompareTo<T>) {
    if (ary.length === 0) return

    for (let i = 0; i < ary.length; i++) {
      for (let j = i; j > 0; j--) {
        if ((compareTo && compareTo(ary[j], ary[j - 1]) < 0) || ary[j] < ary[j - 1]) {
          swap(ary, j, j - 1)
        } else {
          break
        }
      }
    }
  }
}

export default InsertionSort
