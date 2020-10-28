export function swap<T>(ary: T[], index1: number, index2: number) {
  const temp = ary[index1]
  ary[index1] = ary[index2]
  ary[index2] = temp
}
