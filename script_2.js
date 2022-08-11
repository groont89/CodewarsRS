//#1 Take an Arrow to the knee, Functionally
let ArrowFunc = function(arr) {
    return arr.map(e => e=String.fromCharCode(e)).join(''); //Complete this function
};
console.log(ArrowFunc([84,101,115,116]));

//#2 Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  let result = [];
  let arr = arr1.concat(arr2);
  arr.forEach((item) => {
    if (result.indexOf(item) == -1) {
      result.push(item);
    }
  });
  return result.sort((a,b) => a-b); 
}
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);

//#3 16+18=214
function add(num1, num2) {
  num1 = ('' + num1).split('').reverse();
  num2 = ('' + num2).split('').reverse();
  console.log(num1);
  console.log(num2);
  let max = Math.max(num1.length, num2.length);
  let str = [];
  for(let i = 0; i < max; i++)
    str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0));
console.log(str);
  num1 = str.reverse().join('');
  console.log(num1);
    return parseInt(num1);
  }
  console.log(add(122, 81));

//#4 Add property to every object in array
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
questions.forEach(function(q) {
    q.usersAnswer = null;
  });
console.log(questions);

//#5 Colour Association
function colourAssociation(array){
    let result = array.map(([i,e]) =>( { [i] : e }) );
    return result;
}

//#6__Combine objects
function comb(){
  let arr = [...arguments];
  let result = {};
  for( let i =0; i <= arr.length; i ++){
      for( let key in arr[i]) {
          if(!result[key]) {
              result[key] = arr[i][key];
          } else {
              result[key] += arr[i][key];
          }
      }
  }
  return result;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
comb(objA,objB);
//#7__Count the Digit
function nbDig(n, d) {
  let result = [];
  let arr = [];
  for( let i = 0; i<=n; i++){
   arr.push(i*i);
  }
   arr.map((item) => {
   if( String(item).length > 1){
     (String(item).split("").map((el) => {
       if( el == d){
         result.push(el);
       }
     } )) ;
   } else {
      if( item == d){
       result.push(item);
      }
   }
 });
 return result.length;
 }
 console.log(nbDig(10,1));

//#8__Find the missing element between two arrays
function find(arr1, arr2) {
  let index;
  for (let i = 0; i < arr1.length; i++) {
      index = arr2.indexOf(arr1[i]);
      if (index == -1) {
          return arr1[i];
      } else {
          arr2.splice(index, 1);
      }

  }
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 5, 1];
console.log(find(arr1, arr2));

//#9__Get decimal part of the given number
function getDecimal(n) {
  if (n % 1 == 0) {
      return 0;
  } else {
      return Number('0.' + String(n).split('.')[1]);
  }
}
console.log(getDecimal(4.5));

//#10__Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers){
  let result =[];
  let arr = numbers.sort((a,b) => b-a);
  for( let i = 0; i < arr.length; i ++){
      if(result.indexOf(arr[i])== -1) {
          result.push(arr[i]);
      } 
  }
  
  return result.splice(0,3).reduce((sum,el)=> sum +el,0);
  }
  console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]));

//#11__Whose bicycle?
function whoseBicycle(diary1, diary2, diary3) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
for( let marks of Object.values(diary1)) {
  sum1 += marks;
}
for( let marks of Object.values(diary2)) {
  sum2 += marks;  

}
for( let marks of Object.values(diary3)) {
  sum3 += marks;  
}
let result = [sum1,sum2,sum3];
let index= result.lastIndexOf(Math.max(...result));
return `I need to buy a bicycle for my ${index===0?'first':index===1?'second':'third'} son.`;

}
console.log(whoseBicycle(
  {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 8,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
    },
    {
      'algebra': 6,
      'history': 5,
      'physics': 5,
      'geography': 9,
      'chemistry': 10
    }
  ));

// function whoseBicycle(diary1, diary2, diary3) {
//     let arr = [Object.values(diary1),Object.values(diary2),Object.values(diary3)].map(v=>v.reduce((a,b)=>a+b,0))
//     let index= arr.lastIndexOf(Math.max(...arr))
//     return `I need to buy a bicycle for my ${index===0?'first':index===1?'second':'third'} son.`
//   }

//#12__Nickname Generator
function nicknameGenerator(name) {
  let vowels = "aeiou";
  if (name.length < 4) {
    return "Error: Name too short";
  } else {
    if (vowels.includes(name[2])) {
      return name.toLowerCase().slice(0, 1).toUpperCase() + name.slice(1, 4);
    } else {
      return name.toLowerCase().slice(0, 1).toUpperCase() + name.slice(1, 3);
    }
  }

}
console.log(nicknameGenerator("samantha"));

//#13__Odd-Even String Sort
function sortMyString(S) {
  let even = S.split('').filter((item,index)=> index %2 == 0).join("");
  let odd = S.split("").filter((item,index) => index %2 != 0).join("");
return even +" "+ odd;
}
console.log((sortMyString("YCOLUE'VREER")));

//#14__Power of two
function isPowerOfTwo(n){
  return  Number.isInteger(Math.log2(n));
}
console.log(isPowerOfTwo(6));

//#15__String Reordering
//#15.1
// function sentence(List) {
//     List.sort((a,b)=> Object.keys(a) - Object.keys(b));
//     let result = [];
//     for(let item of List){
//         result.push(Object.values(item));
//     }
//    return (result.join(" "));
// }

// let List = [
//     {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
//     {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
// ];
// sentence(List);//'Vatsan took his dog for a spin'
//#15.2
function sentence(List) {
  let result = (List.sort((a,b)=> Object.keys(a) - Object.keys(b)))
  .map( obj => Object.values(obj)[0])
  .join(" ");
  return (result);
}

let List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
];
console.log(sentence(List));//'Vatsan took his dog for a spin'

//#16__Sum with Arrows
var Sum = 'sum = (arr) =>arr.reduce((acc,num) => acc + num,0 )'; 

//#17__Unpacking Arguments
function spread(func, args) {
  return func(...args);
}
console.log(spread(function(x,y){return x+y}, [1,2]));

//#18__Vowel one
//#18.1
function vowelOne(s) {
  let vowels = "aeiou";
  let result = [];
  for (let i of s.toLowerCase()) {
      (vowels.includes(i)) ? result.push("1"): result.push("0");
      }
  return result.join("");
}
console.log(vowelOne("u@y5PEM/UoIAIA/ENAZ|eE9e{Ei;Io")); // "100001001111110101001101011011"
//#18.2
function vowelOne(s) {
  let vowels = "aeiou";
  return s.toLowerCase().split("")
      .map(item => vowels.includes(item) ? item = "1" : item = "0").join("");
}