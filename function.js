//함수 만들기
function plus() {
    let i1 = document.getElementById('num1'); //input테그 
    let i2 = document.getElementById('num2');
    let result = document.getElementById('result');
    result.value = sum(parseInt(i1.value), parseInt(i2.value));
}

function sum(v1, v2) {
    return v1 + v2; // string 일 경우에는 더하기할때 => concaterate.
}

var fnc = function (v1, v2) {
    return v1 + v2;
}
console.log(sum('10', 20));
console.log(fnc()); //매개값 없이 넣으면 nan (not a number)
console.log(fnc); //괄호없이 그냥 넣기만 하면 함수 자체가 튀어나옴.
console.log(fnc(10, 20, 30)); //앞에꺼 두 개만 됨