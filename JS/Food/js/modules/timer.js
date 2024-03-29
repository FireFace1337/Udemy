function timer(id, deadline) {
    // timer 

// console.log(Date.parse(new Date ()));
// console.log(new Date());


function getTimeRemaining(endTime) {
    let total = Date.parse(endTime) - Date.parse(new Date ());
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hours = Math.floor(total / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(total / (1000 * 60) % 60);
    let seconds = Math.floor ((total / 1000) % 60);


    return {
        total: total,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function setClock(selector, endTime) {
    let timer = document.querySelector(selector);
    let days = timer.querySelector('#days');
    let hours = timer.querySelector('#hours');
    let minutes = timer.querySelector('#minutes');
    let seconds = timer.querySelector('#seconds');
    let timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        let t = getTimeRemaining(endTime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock(id, deadline);
}

export default timer;
