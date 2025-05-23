

let str = "Hello world";
let count = 0;
for (let c of str) if ("aeiouAEIOU".includes(c)) count++;
console.log(count); 

str = "javascript is fun";
let words = str.split(" ");
for (let i = 0; i < words.length; i++)
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
console.log(words.join(" ")); 

str = "racecar";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) rev += str[i];
console.log(str == rev);

str = "hello world js";
let dash = "";
for (let c of str) dash += c == " " ? "-" : c;
console.log(dash); 

str = "banana";
let sym = "a", cnt = 0;
for (let c of str) if (c == sym) cnt++;
console.log(cnt); 


let arr = [5, 12, 7, 3, 22, 10];
let max = arr[0];
for (let n of arr) if (n > max) max = n;
console.log(max); 

arr = [1, 2, 3, 4, 5, 6];
let even = [];
for (let n of arr) if (n % 2 == 0) even.push(n);
console.log(even);

arr = [1, 2, 3];
let revArr = [];
for (let i = arr.length - 1; i >= 0; i--) revArr.push(arr[i]);
console.log(revArr); 

let a = [1, 2], b = [3, 4], all = [];
for (let x of a) all.push(x);
for (let x of b) all.push(x);
console.log(all); 

arr = [1, 2, 2, 3, 4, 4, 5];
let uniq = [];
for (let n of arr) if (uniq.indexOf(n) < 0) uniq.push(n);
console.log(uniq); 
