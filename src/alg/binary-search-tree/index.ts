import { CompareTo } from '../../type'

class BSTNode<T> {
  private _value: T
  private _left: BSTNode<T> | null
  private _right: BSTNode<T> | null

  constructor(value: T) {
    this._value = value
    this._left = null
    this._right = null
  }

  get value() {
    return this._value
  }

  get right() {
    return this._right
  }

  get left() {
    return this._left
  }

  set value(val: T) {
    this._value = val
  }

  set left(val: BSTNode<T> | null) {
    this._left = val
  }

  set right(val: BSTNode<T> | null) {
    this._right = val
  }
}

class BST<T> {
  private _root: BSTNode<T> | null
  private _size: number
  private _compareTo: CompareTo<T>

  constructor(compareTo: CompareTo<T>) {
    this._root = null
    this._size = 0
    this._compareTo = compareTo
  }

  get size() {
    return this._size
  }

  get isEmpty() {
    return this._size === 0
  }

  public add(value: T) {
    this._root = this._add(this._root, value)
  }

  private _add(node: BSTNode<T> | null, value: T): BSTNode<T> {
    if (node === null) {
      this._size++
      return new BSTNode(value)
    }

    const compareVal = this._compareTo(node.value, value)
    // 需要被插入到右子树
    const needToInsertRightTree = compareVal < 0
    // 需要被插入到左子树
    const needToInsertLeftTree = compareVal > 0

    if (needToInsertRightTree) {
      return this._add(node.right, value)
    }

    if (needToInsertLeftTree) {
      return this._add(node.left, value)
    }

    return node
  }
}

export default BST
