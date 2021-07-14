//json(string) - >obj JSNO parse();
let json = `[{"id":1,"first_name":"Fraze","last_name":"Fishburn","email":"ffishburn0@chronoengine.com","gender":"Non-binary"},
{"id":2,"first_name":"Shirl","last_name":"Zorn","email":"szorn1@pen.io","gender":"Agender"},
{"id":3,"first_name":"Meredithe","last_name":"Learmont","email":"mlearmont2@ihg.com","gender":"Genderfluid"},
{"id":4,"first_name":"Jemimah","last_name":"MacTeggart","email":"jmacteggart3@cbc.ca","gender":"Genderfluid"},
{"id":5,"first_name":"Kyla","last_name":"Dekeyser","email":"kdekeyser4@behance.net","gender":"Genderqueer"},
{"id":6,"first_name":"Corina","last_name":"Fawloe","email":"cfawloe5@godaddy.com","gender":"Polygender"},
{"id":7,"first_name":"Natka","last_name":"More","email":"nmore6@arizona.edu","gender":"Genderfluid"},
{"id":8,"first_name":"Henriette","last_name":"Moysey","email":"hmoysey7@google.nl","gender":"Polygender"},
{"id":9,"first_name":"Felicity","last_name":"Finneran","email":"ffinneran8@yellowpages.com","gender":"Female"},
{"id":10,"first_name":"Ralph","last_name":"Behrend","email":"rbehrend9@domainmarket.com","gender":"Non-binary"}]`

let data = JSON.parse(json);
//배열 형태로 보여줌 [{},{}]
console.log(data);

for (let row of data) {
    console.log(row)
}


let tableTag = document.createElement('table');
tableTag.setAttribute('border', "1");
createHeader();
for (let row of data) {
    let trTag = document.createElement('tr');
    trTag.setAttribute('id',row.id ) //tr을 id값으로 찾아올 용도
    //자식은 여러개니까 childnodes[] , 부모는 그냥parentnode
    trTag.onmouseover = clickfuc;
    trTag.onmouseout = originCol;
    trTag.onclick = clickEv;
    // {
    //    console.log(this.childNodes[1].childNodes[0])
    //} //클릭이벤트가 발생하는 대상이 되는 요소 =this
   // trTag.onclick = clickfuc;
    for (let field in row) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(row[field]);
        tdTag.appendChild(text); //td테그 만드는 작업
        trTag.appendChild(tdTag);
    }
    //<td><button>삭제</button></td>
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tableTag.appendChild(trTag);
}
document.getElementById('show').appendChild(tableTag);

//------------------------------화면에서 보여지는 부분 -------------------------

//데이터 삭제,,,, id를 기준으로 데이터 삭제
function deleteRow() {
    alert('delete');// 경고창 띄우기(tr을 누른거니까 이벤트 전파를 차단해야.)
    
    e.stopPropagation();



    let id = this.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue; //부모의 부모의 아들의 첫번쨰 그 아들의 첫 아들
    console.log(id);
    this.parentNode.parentNode.remove();
    //콘솔에 찍어보기
    //console.log(this.parentNode.parentNode.remove()) //td, tr 없앨게~~

    //db연결해서 삭제...sublet사용
    for (let i = 0; i < data.length; i++) {
        if (data[i] == id) {
            data.splice(i, 1) //지울 위지와 개수
            delete data[i];
            break;
        }
    }
    console.log(data);
}

function createHeader() {
    let title = ['id', 'first_name', 'last_name', 'email', 'gender', 'delete'];
    let tr = document.createElement('tr');
   
    for (let field of title) {
        let td = document.createElement('th')
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}


function createHeader2() {
    let thTag = document.createElement('th');
    for (let a in data[0]) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(a)
        tdTag.appendChild(text);
        thTag.appendChild(tdTag);
    }
    tableTag.appendChild(thTag);
}

//onclik event

function clickfuc() {
    this.style.backgroundColor = 'lightyellow'
}

function originCol() {
    this.style.backgroundColor = '';
}

//modrow
function modRow(){
    let id = document.getElementById('eid').value;//아이디로 값 변경하기

    let findTr = document.getElementById(id);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value;


}



//addrow
function addRow() {
    //사용자의 입력을 받아 테이블에 한 라인 추가. 
    let id = document.getElementById('eid').value; //node value로 실제 값 가져옴.
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let arry = [id, first_name, last_name, email, gender];

    let trTag = document.createElement('tr');
    trTag.onmouseover = clickfuc;
    trTag.onmouseout = originCol;
    for (let f of arry) { //배열은 of
        let tdTag = document.createElement('td');
        let text = document.createTextNode(f);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    //<td><button>삭제</button></td>
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tableTag.appendChild(trTag);
    document.getElementsByTagName('table')[0].appendChild(trTag)
}
//<td><button>삭제</button></td>
let btn = document.createElement('button');
btn.onclick = addRow;
let text = document.createTextNode('추가');
btn.appendChild(text);
let tdTag = document.createElement('td');
tdTag.appendChild(btn);
let trTag = document.createElement('tr')
trTag.appendChild(tdTag);



function clickEv(){
    alert('detail')

    //tr에 클릭하면 저 위칸으로 올라감. 
    let inputs = document.getElementsByTagName('input') //input테그 가져오겠습니다..
   // document.querySelectorAll();
   console.log(inputs);
   for(let i = 0; i< inputs.length; i++){
       inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
   }

    // let id = this.childNodes[0].childNodes[0].nodeValue;
    // let fn = this.childNodes[1].childNodes[0].nodeValue;
    // let ln = this.childNodes[2].childNodes[0].nodeValue;
    // let em = this.childNodes[3].childNodes[0].nodeValue;
    // let gd = this.childNodes[4].childNodes[0].nodeValue;

    // document.getElementById('eid').value = id;
    // document.getElementById('first_name').value = fn;
    // document.getElementById('last_name').value =ln;
    // document.getElementById('email').value =em;
    // document.getElementById('gender').value =gd;


}