function countUniqueValues(arr) {
  console.log(`Input value is ${arr} and looking for unique values`);
  if (arr.length === 0) return 0;

  let head = 0;

  console.log(`Starting loop:`);
  for (
    let countingPointer = 1;
    countingPointer < arr.length;
    countingPointer++
  ) {
    console.log(
      `Current Pointer @ ${countingPointer} and Current Head @ ${head}`
    );
    console.log(`Comparing values ${arr[head]} to ${arr[countingPointer]}`);
    if (arr[head] !== arr[countingPointer]) {
      console.log(`Increment head as comparison was false`);
      head += 1;
      arr[head] = arr[countingPointer];
    }
  }
  console.log(`End of loop--- Current Unique Values ${head}`);
  return head + 1;

}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
