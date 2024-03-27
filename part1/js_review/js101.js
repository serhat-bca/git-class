console.log("hello world");
const x = 1;
let y = 5;

console.log(x, y);
y = "hello";
console.log(y);

const arr = [1, 2, 3];
arr.push("hello");
console.log(arr);

console.log(arr.length);

console.log(arr[2]);

arr.forEach((val) => {
  console.log(val);
});

const arr2 = arr;

arr2[1] = 4;
console.log("arr: ", arr, "arr2: ", arr2);

const arr3 = arr2.map((val) => val + "added");
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const [first, second, ...rest] = arr4;
console.log("first: ", first, "second: ", second, "rest: ", rest);

const obj1 = {
  name: "Serhat Sen",
  age: 35,
  education: "CS BA",
};

console.log(obj1);

const obj2 = {
  name: {
    first: "Serhat",
    last: "Sen",
  },
  grades: [56, 67, 78],
  department: "Computer Science",
};

console.log(obj2.name.first);

const sum = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};

const result = sum(5, 4);
console.log("result: ", result);
