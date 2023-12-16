const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a = "AM";

    if (h > 12) {
        h = h - 12;
        a = "PM";
    }

    h = h < 10? "0" + h: h;
    m = m < 10? "0" + m: m;
    s = s < 10? "0" + s: s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerHTML = a;
    setTimeout(timeOut, 1000);

    function timeOut() {
        updateClock();
    }
}

updateClock();