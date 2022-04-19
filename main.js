var hundredths = 0
var seconds = 0
var minutes = 0
var started = false

var interval

function twoDigits (digit) {
    if(digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function start(){
    if(!started) interval = setInterval(watch, 10)
    started = true
}

function stop() {
    clearInterval(interval)
    started = false
}

function reset() {
    clearInterval(interval)
    hundredths = 0
    seconds = 0
    minutes = 0
    started = false
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
