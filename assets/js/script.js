var timerBlocks = document.querySelector('#time-blocks');

var DateTime = luxon.DateTime;

function onLoad() {
    var currentDayEl = document.querySelector('#currentDay');

    currentDayEl.textContent = DateTime.now().toFormat('DDDD');

    createTimeBlocks();

    //load local data
}

function createTimeBlocks() {
    // 0900-1700 military time
    for(var i = 0; i < 9; i++) {
        
    } 
}

onLoad();