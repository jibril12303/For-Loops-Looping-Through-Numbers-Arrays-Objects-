for (var i=0; i <=2; i ++) {
  console.log("clap!!")
}
// < less than 
// > more than

var total = 0;
for (var num = 1; num < 11; num ++) {
  console.log(num)
  total += num
}

console.log("The total is " + total)

// var would equal 1; 1 > 11 num = num + 1

// total += num; 
// 0 = 0 + 1
// 0 = 0 + 2 


var fruits = ["mango", "banana", "apple"];

for (var i=0; i<fruits.length; i++) {
   console.log(fruits[i]);
 }

// var i = 0; i < 3 ; i++
// i = 0; i less than 3; i = i + 0


var data = {
  name: "Jibril",
  age: 22,
  martialStatus: true
}

for (var elem in data) {
  console.log(elem, data[elem]);
}


console.log(data["martialStatus"])
// data[elem] will give you the name and the data status