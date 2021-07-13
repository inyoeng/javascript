function changeValue() {
    console.log(this);
    //id num3의 value속성 읽어와서 그 값의 대문자로 바꿔주는 기능!
    let elem = document.getElementById('num3').value;
    //console.log(elem);
    // console.log(elem.toUpperCase());
    document.getElementById('num3').value = elem.toUpperCase();
}

let obj = {
    name: "hong",
    hobby: ['running', 'reading', 'eating'],
    pet: [{
        dog: "bambbang"
    }, {
        cat: "yaong"
    }, {
        bird: 'parrot'
    }]
}

console.log(obj.name);
console.log(obj.hobby[0]);
console.log(obj['hobby'][1]);
console.log(obj.pet[0].dog);
console.log(obj.pet[2].cat);

//요소를 생성
let fruits = ['apple', 'orange', 'banana', 'Mango'];

function addfruit() {
    let addVal = document.getElementById('add').value;
    fruits[fruits.length] = addVal;
    document.getElementById('add').value = null; //값 가져왔다가 배열에 넣고 다시 지움.
    removeFromDoc();
    createElements();
}

function createElements() {
    //let ulTag = document.getElementsByTagName('ul')
    let ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'fruit');

    for (let fruit of fruits) {
        let liTag = document.createElement('li');
        let f = document.createTextNode(fruit);
        liTag.appendChild(f);
        ulTag.appendChild(liTag);
    }
    document.body.appendChild(ulTag);
}

function removeFromDoc() {
    if (document.getElementById('fruit')) { //요소 있으면 참. 
        document.getElementById('fruit').remove(); //이거 자체가 ul테그
    }
}


ulTag = document.getElementsByTagName('ul'); //document ul테그 찾아오기
let liTag = document.createElement('li'); //<li>Apple</li>
let apple = document.createTextNode('Apple');
liTag.appendChild(apple);
ulTag[0].appendChild(liTag); //<ul><li>apple</li></ul>

liTag = document.createElement('li');
let orange = document.createTextNode('Orange');
liTag.appendChild(orange);
ulTag[0].appendChild(liTag);