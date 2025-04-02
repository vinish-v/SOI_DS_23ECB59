/*
let a=[10,20];
let b=a;
b.pop();
//console.log(a)


const obj ={
    name:"vinish",
    place:"cbe",
    fav:["red",'blue']
}
//console.log(obj.name);


function log(a){
    console.log(a);
}
//console.log(45,29);
*/
function palindrome(Number){
    let str = Number.toString();
    let rev = str.split('').reverse().join('');
    console.log(str==rev?"palindrome":"not palindrome");
}
palindrome(121);

