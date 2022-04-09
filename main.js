var hundredths = 0
var seconds = 0
var minutes = 0

var interval

function twoDigits (digit) {
    if(digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function start(){
    watch()
    interval = setInterval(watch, 10)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)
    document.getElementById('time').innerText = '00:00:00'
}

function watch() {
    hundredths++
    if(hundredths == 100) {
        seconds++
        hundredths = 0
        
        if(seconds == 60) {
            seconds = 0
            minutes++
        }
    }
    document.getElementById('time').innerText = twoDigits(minutes) + ':' + twoDigits(seconds) + ':'+ twoDigits(hundredths)
}