let clock = document.getElementById("time");
let date = document.getElementById("date");

let Digitalclock = true;

let Hourfix = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11" , "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
let Minutfix = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11" , "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51" , "52", "53", "54", "55", "56", "57", "58", "59", "60"]
let Monthfix = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11" , "12"]
let Datefix = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11" , "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]

function DateandTime() {
    let newdate = new Date()
    const hours = Hourfix[newdate.getHours()]
    const minut = Minutfix[newdate.getMinutes()]
    const month = Monthfix[newdate.getMonth()+1]
    const day = Datefix[newdate.getDate()]

    clock.innerHTML = hours + ":" + minut
    date.innerHTML = newdate.getFullYear() + "/" + month + "/" + day
}

setInterval(DateandTime, 500)