// stack implementation

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  //adding an item to the stack
  push = (item) => {
    this.storage[this.count] = item;
    this.count++;
  };

  // remove and return the last item in the stack
  pop = () => {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
  };

  // get the size of the stack
  size = () => {
    return this.count;
  };

  // check the value at the last index
  peek = () => {
    return this.storage[this.count - 1];
  };
}

let history = new Stack();

history.push("wikipedia");
history.push("stackoverflow");
history.push("youtube");

console.log(history.peek());
