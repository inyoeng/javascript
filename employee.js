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

for(let row of data){
    console.log(row)
}


let tableTag = document.createElement('table');
    tableTag.setAttribute('border', "1");
    for (let row of data) {
        let trTag = document.createElement('tr');
        for (let field in row) {
            let tdTag = document.createElement('td');
            if (field == 'id') {
                tdTag.style.color = 'red'; //스타일 속성 주기
            }
            let text = document.createTextNode(row[field]);
            tdTag.appendChild(text); //td테그 만드는 작업

            trTag.appendChild(tdTag);
        }
        tableTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);