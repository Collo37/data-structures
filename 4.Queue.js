class Queue {
  constructor() {
    this.collection = [];
  }

  // check the item at the start of the queue
  front = () => this.collection[0];

  // check the size of the queue
  size = () => this.collection.length;

  // print out the queue
  print = () => {
    return this.collection;
  };

  // adding to the queue
  enqueue = (item) => {
    this.collection.push(item);
  };

  // removing from the queue
  dequeue = (item) => {
    let index = collection.indexOf(item);
    this.collection.splice(index, 1);
  };

  // check if the queue is empty
  isEmpty = () => {
    return this.collection.length === 0;
  };
}

const printerQueue = new Queue();

console.log(printerQueue.isEmpty());
printerQueue.enqueue("word document 1");
printerQueue.enqueue("Excel document");
printerQueue.enqueue("Ms Access document");

console.log(printerQueue.front());
console.log(printerQueue.size());
