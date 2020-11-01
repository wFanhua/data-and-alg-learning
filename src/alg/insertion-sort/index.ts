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

  public static sort2<T>(ary: T[], compareTo?: CompareTo<T>) {
    if (ary.length === 0) return

    for (let i = 0; i < ary.length; i++) {
      let val = ary[i]
      let j
      for (j = i; j > 0; j--) {
        if ((compareTo && compareTo(val, ary[j - 1]) < 0) || val < ary[j - 1]) {
          ary[j] = ary[j - 1]
        }
      }

      ary[j] = val
    }
  }
}

export default InsertionSort
