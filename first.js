/*
Function
 block of code that perfoms a specific task, can be inoked whenever needed
*/
//nan -> not a number
/*function myFunction() {
    console.log("Welcome to apna college")
    console.log("Welcome to home")
}
myFunction();
myFunction();
myFunction();

fun porams -> like local variable  -> block scope
               of function
*/
/*
function sum(x,y){
    s = x + y;
    return s;
}
let val = sum(3,4);
console.log(val);
*/
/*
Arrow Functions
Compact way of writing a function
 */
//Multiplication function
/*
function mul(a,b){
    return a*b;
}
const arrowMul = (a, b) => {
  return a*b;
};

const printHello = () => {
    console.log("Hello");
};
*/
/*
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(
            char === "a" || 
            char === "e" || 
            char === "i" ||
            char === "o" || 
            char === "u"
          ) {
                count++;
            }
        }
            console.log(count);
}
 */
/*
function countchar(str){
 let count = 0;
 for(const  char of str ){
  if(
     char === "a"||
     char === "b"||
     char === "c"||
     char === "d"||
     char === "e"
  ) {
    count++;
  }
 }
 console.log(count);
}
 */
/*
function Mul (a,b){
return a*b;
}
const arrowMul = (a,b) => {
    console.log(a*b);
}
    */

/*forEach Loop in arrays
callbackfuncction here it is a function to execute for each elemnet in a array
A callback is a function passed as an argument to another function
*/

/*
let arr = [1,2,3,4,5,6];
arr.forEach(function privateVka(aa){
    console.log(aa);
});
let arr2 = ["Nitin","Dipak","Abhir"];
arr2.forEach(function passed(bb){
    console.log(bb.toUpperCase(arr2));

});
let arr3 =["sachin","Rohan"];
 arr3.forEach((cc ,idx) =>{
    console.log(cc , idx);
 });
 let arr4 =[1,2,3,4,5];
 arr4.forEach((dd)=>{
 console.log(dd*dd)
 });
*/
// map method
/*
let arr5 = [9,10,11,12];
let newarr=arr5.map((valu) =>{
    return valu*valu;
})
console.log(newarr);

let arr6 = [13,14,15,16];
let new6=arr6.map((valu2)=>{
    return valu2*2;
}) 
console.log(new6);
*/
//filter
/*
let arr7 = [13,12,14,15];
let newarr=arr7.filter((valu)=>{
 return valu%2===0;
});
console.log(newarr);

let arr8 = [16,17,18,19,20];
let newarr1=arr8.filter((val)=>{
 return val%2!==0; 
});
console.log(newarr1);

let arr9 = [16,17,18,19,20];
let newarr3=arr8.filter((val)=>{
 return val > 18; 
});
console.log(newarr3);
*/
// Reduce
/*
let arr10 = [1,2,3,4,5];
let newarr10=arr10.reduce((res,curr)=>{
    return res + curr;
});
console.log(newarr10);

let arr11 = [6,7,8,9,10];
let newarr11=arr11.reduce((res, curr)=>{
    return res + curr;
});
console.log(newarr11);

let arr12 = [11,12,133,14,15];
let newarr12=arr12.reduce((pre,curr) =>{
    return pre > curr ? pre : curr;
});
console.log(newarr12);

let arr13 = [16,17,18,19,20];
let newarr14=arr13.reduce((pre,curr)=>{
    return pre < curr ? pre:curr;
});
console.log(newarr14);
*/

let marks =[85,86,87,88,89,90,91,92,93];
let newarr= marks.filter((valu)=>{
  return valu>90;
 })
 console.log(newarr);

 let n = prompt("number from 1 to 10")
 let arr = [];
 for(let i = 1; i <= n; i++){
    arr[i-1] = i;
 }
 console.log(arr);

 let sum = arr.reduce((pre, curr) => {
    return pre + curr;
 })
 console.log(sum);

 let factorial = arr.reduce((pre, curr) => {
    return pre*curr;
 })
 console.log(factorial);