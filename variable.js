//var 쓰면 중복해서 써도 되지만 let은 안됨!
var a = 20;
console.log(a);

var a = 30;
console.log(a);


let age = 10;
console.log(age);

age = 20;
console.log(age);

//상수 선언 : 재할당이 불가능!
const PI = 3.1415;

//새로운 블럭에서는 let 같은거 쓸 수 있당.
{
    let age = 0;
    console.log(age);
}

//typeof 하면 최종 선언된 타입이 나옴. 
let v1; //undefined 
v1 = 'Hello'; //string
v1 = 100.41; //number
v1 = true; //boolean
v1 = null; //object (class instance)
v1 = [1, 2, 3]; //배열도 object
v1 = {
    name: 'hong',
    age: 20,
    score: 80
}//object
v1 = function(a, b){
    return  a+b
}; // function
console.log(typeof v1);
console.log(v1(10,20));

v1 = 10>20;
v1 = 0; // 변수 안에 값이 있으면 참, but  0 null, false=>거짓
if(v1){
    console.log('참입니다.')
} else{
    console.log('거짓입니다.')
}