let data = [{
    name: "이름",
    eng: "영어",
    math: "수학"
}, {
    name: "홍길동",
    eng: "100",
    math: "90"
}, {
    name: "최영수",
    eng: "90",
    math: "90"
}];

//방법1
function createTable2() {
    let all = '<table border ="1">';
    // all += "<tr><td>이름</td><td>영어</td><td>수학</td></tr>";
    // all += "<tr><td>김영수</td><td>100</td><td>100</td></tr>";
    // all += "<tr><td>김영희</td><td>90</td><td>90</td></tr>";
    for (let row of data) {
        all += '<tr>'
        for (let field in row) {
            all += "<td>" + row[field] + '</td>'
        }
        all += "</tr>"
    }
    all += '</table>'
    document.write(all);
}

//방법2
function createTable() {
    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', "1");
    for (let row of data) {
        let trTag = document.createElement('tr');
        for (let field in row) {
            let tdTag = document.createElement('td');
            if (field == 'name') {
                tdTag.style.color = 'red'; //스타일 속성 주기
            }
            let text = document.createTextNode(row[field]);
            tdTag.appendChild(text); //td테그 만드는 작업

            trTag.appendChild(tdTag);
        }
        tableTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);
}