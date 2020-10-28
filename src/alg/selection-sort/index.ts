import { CompareTo } from '../../type'
import { swap } from '../util'

class SelectionSort {
  public static sort<T>(ary: T[], compareTo?: CompareTo<T>) {
    if (ary.length === 0) return

    for (let i = 0; i < ary.length; i++) {
      let minIndex = i
      for (let j = i; j < ary.length; j++) {
        if ((compareTo && compareTo(ary[j], ary[minIndex]) < 0) || ary[j] < ary[minIndex]) {
          minIndex = j
        }
      }
      if (i !== minIndex) {
        swap(ary, i, minIndex)
      }
    }
  }
}

export default SelectionSort
