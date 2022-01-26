class SetImplementation {
  constructor() {
    this.collection = [];
    this.size = this.collection.length;
    this.values = this.collection;
  }

  // check for the presence of an element in the set
  has = (element) => {
    if (this.collection.includes(element)) return true;
    return false;
  };

  // add an element to the collection
  add = (element) => {
    if (this.has(element)) return false;
    this.collection.push(element);
    return true;
  };

  // delete an element from the collection
  delete = (element) => {
    if (this.has(element)) {
      let elementIndex = this.collection.indexOf(element);
      this.collection.splice(elementIndex, 1);
      return true;
    }
    return false;
  };

  // return the union of two sets
  union = (otherSet) => {
    let firstSetValues = this.values;
    let unionSet = new SetImplementation();

    firstSetValues.forEach((item) => {
      unionSet.add(item);
    });

    otherSet.values.forEach((item) => {
      unionSet.add(item);
    });

    return unionSet.values;
  };

  // return the intersection of two sets
  intersect = (otherSet) => {
    let firstSetValues = this.values;
    let intersection = new SetImplementation();

    firstSetValues.forEach((value) => {
      otherSet.has(value) && intersection.add(value);
    });

    return intersection.values;
  };

  // return the difference between two sets
  difference = (otherSet) => {
    let firstSetValues = this.values;
    let differenceSet = new SetImplementation();

    firstSetValues.forEach((value) => {
      !otherSet.has(value) && differenceSet.add(value);
    });

    return differenceSet.values;
  };

  isSubSet = (otherSet) => {
    let firstSetValues = this.values;

    return firstSetValues.every((value) => {
      return otherSet.has(value);
    });
  };
}

let kenyanCities = new SetImplementation();
let africanCities = new SetImplementation();

kenyanCities.add("Nairobi");

africanCities.add("Dodoma");
africanCities.add("Nairobi");
africanCities.add("Ouagagougou");
africanCities.add("Bamako");

console.log("subset of african cities", kenyanCities.isSubSet(africanCities));
console.log("values", kenyanCities.values);
console.log(
  "difference of kenyan cities and african cities",
  africanCities.difference(kenyanCities)
);
