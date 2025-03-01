let dateTime = new Date()
let date = dateTime.toDateString().split(' ')
document.getElementById('current-date')
    .innerText = date[1] + "  " + date[2] + "  " + date[3];
document.getElementById('current-day')
    .innerText = date[0] + "," ;

let time = dateTime.toLocaleTimeString()


// console.log(time)