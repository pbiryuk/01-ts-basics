function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

getFirstElement<number>([1, 2, 3]);           
getFirstElement<string>(["a", "b", "c"]);     
getFirstElement<boolean>([true, false, true]);
  

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));
console.log(getFirstElement<boolean>([true, false, true]));
