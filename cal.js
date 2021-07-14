function createCal() {
    let userYear = document.getElementById('year').value;
    let userMonth = document.getElementById('month').value;

    let now = new Date(userYear, userMonth-1, 1); 
    let firstDay = now.getDay();//첫째날의 요일정보: 0~6
    console.log(firstDay);

    let today = new Date(userYear, userMonth, 0); //2021,6,0 => 6월의 마지막날 -- 2021,7,1=>7월의 마지막날 +1일(다음달 첫 날)
    let year = today.getFullYear();
    let month = today.getMonth() + 1; //1월이 0부터 시작해서 
    let date = today.getDate();


    console.log(`년도: ${year},월:${month},일:${date}`);


    let days = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'];

    let all = '<table border ="1"><tr>';
    for (let i = 0; i < days.length; i++) {
        if (i % 7 == 0) {
            all += '<td style="color:red">' + days[i] + '</td>'
        } else if (i % 7 == 6) {
            all += '<td style="color:blue">' + days[i] + '</td>'
        } else {
            all += "<td>" + days[i] + "</td>"
        }
    }
    all += '</tr>'
    //요일 위치 맞춰주기 위해
    for(let i = 0; i < firstDay; i++){
        all += "<td></td>";
    }
    for (let i = 1; i <= date; i++) {
        if ((firstDay+i)% 7 == 1) { //일요일은 빨강
            all += '<td style="color:red">' + i + '</td>';
        } else if ((firstDay+i) % 7 == 0) {
            all += "<td style='color:blue'>" + i + "</td></tr><tr>";
        } else {
            all += '<td>' + i + '</td>';
        }

    }
    all += "</tr> </table>";
    document.write(all);
}