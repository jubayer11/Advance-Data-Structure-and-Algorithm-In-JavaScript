class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, current = this.root) {


    if (!this.root) {
      const newNode = new Node(value);
      this.root = newNode;
      return this;
    }

    if (value < current.value) {
      if (!current.left) {
        const newNode = new Node(value);
        current.left = newNode;
      } else {

        this.insert(value, current.left);
      }
    } else {
      if (!current.right) {
        const newNode = new Node(value);
        current.right = newNode;
      } else {
        this.insert(value, current.right);
      }
    }

    return this;
  }
}
