function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);    //// O/P will be 2
  }
  console.log(x);     //// O/p will be 1
}


///////

var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // global scope
  let b = 22; // the scope is inside the if-block

  console.log(a);  //// O/P will be  11
  console.log(b);  //// O/P will be  22
} 

console.log(a); //// O/P will be 11
console.log(b); //// O/P will be 2

/////////


var names = [
    'Anil Rao',
    'Ajay Kiran',
    'Ashish',
    'Arun'
  ];
  
  names.map(function(names) { 
    return names.length; 
  });
  
  names.map((names) => {
    return names.length;
  });
  
  names.map(names => names.length);

  //////

  const colors =[];
  colors.push('red');
  colors.pusg('green');
  colors.push('green');
  console.log(colors);

  ////////////
  
  var y = 'Indian'
  if (y = 'ANOTHER_Indian') { 
      console.log (y)
  }
/////////

 const x = 'Indian'
 if (x = 'ANOTHER_Indian') {  //// assigning a value variable in an if condition
                console.log (x)
            }
/////

var age = 25;
if(age > 10) {
  let yearsICanlive = age * 4;
  console.log(`Humans can live  ${yearsICanlive} years!`);
}

//////

let values = ['one', 'two', 'three']; ///// array destructuring

let [one, two, three] = values;
console.log(one);
console.log(two);
console.log(three);

/////

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest);

//////

let x = {p: 42, q: true};  ///// object destructuring
let {p, q} = x;

console.log(p);
console.log(q);

//////