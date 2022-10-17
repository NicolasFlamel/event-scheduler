var timerBlocksEl = document.querySelectorAll('.time-block');

var DateTime = luxon.DateTime;
var taskList = ['testing1', 'testing2', 'testing3', 'testing4', 'testing5', 'testing6', 'testing7', 'testing8', 'testing9']; //emtpy out later

localStorage.setItem('tasks', JSON.stringify(taskList)); // delete later

function onLoad() {
    var previousDate;
    var currentDate = DateTime.now().toLocaleString();
    var currentDayEl = document.querySelector('#currentDay');

    currentDayEl.textContent = DateTime.now().toFormat('DDDD');

    //load local data if same day
    previousDate = localStorage.getItem('date');
    
    if(currentDate == previousDate) {
        taskList = JSON.parse(localStorage.getItem('tasks'));
    }else{
        taskList = [];
    }

    localStorage.setItem('date', currentDate);
}

function createTimeBlocks() {
    taskEl = document.querySelectorAll('.description');

    // 0900-1700 military time
    for(var i = 0; i < 9; i++) {
        taskEl[i].textContent = taskList[i];
    } 
}

onLoad();
createTimeBlocks();