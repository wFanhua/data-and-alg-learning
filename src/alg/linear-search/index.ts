import { CompareTo } from '../../type'

class LinearSearch {
  public static search<T>(data: T[], target: T, compare?: CompareTo<T>) {
    for (let index = 0; index < data.length; index++) {
      const val = data[index]
      if ((compare && compare(val, target) === 0) || val === target) {
        return index
      }
    }

    return -1
  }
}

export default LinearSearch
