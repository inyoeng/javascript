let s1 = {
    sno: 1001,
    sname: "Park",
    sscore: 90
}

let field = 'sscore'
console.log(s1.sno);
console.log(s1['sname']); //sname 필드의 값을 가져오시옹
console.log(s1[field]); //field의 값~

//object의 필드 읽어올때 for in 반복문쓰기
//필드 이름만 가져오게 됨
for(let field in s1){
    console.log(field)
} 

for(let field in s1){
    console.log(field+', '+s1[field])
} 

//'배열'인 경우에 반복문 for ,,of
let numbers = [10, 32, 55, 27, 99];
let sum = 0;
for(let num of numbers){
    sum += num;
}
console.log('결과값: '+sum);
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

let s2 = {
    sno : 1002,
    sname :"hong",
    sscore: 80
}

let s3 = {
    sno : 1003,
    sname :"Hwang",
    sscore: 88
}

//s1, 2,3, 를 배열에 담아보기

let students = [s1, s2, s3];
for(let student of students){ //베열의 갯수만큼 반복
    for(let field in student){ //object 필드 반복
        console.log(field +"=> "+student[field]);
    }
    console.log('-------------------------')
}
