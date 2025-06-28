function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }

  getFirstElement<number>([1, 2, 3]);           
  getFirstElement<string>(["a", "b", "c"]);     
  getFirstElement<boolean>([true, false, true]);
  

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));      
console.log(getFirstElement([true, false, true]));
