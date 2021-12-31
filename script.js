fetch('https://bhagavadgitaapi.in/slok?api_key=2ff2e9dec5a83e60e')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("slok").innerHTML = `
        <span>${data['adi']['et']}</span>
        `
    });


var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dt = new Date();
var date = monthArr[dt.getMonth()] +  " " + dt.getDate() ;
document.getElementById('date-time1').innerHTML = date;
document.getElementById('date-time2').innerHTML = date;