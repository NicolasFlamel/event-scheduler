var timerBlocksEl = document.querySelectorAll('.time-block');

var DateTime = luxon.DateTime;
var taskList = new Array(9);

function onLoad() {
    var saveBtnEl = document.querySelectorAll('.saveBtn');
    var currentDayEl = document.querySelector('#currentDay');

    currentDayEl.textContent = DateTime.now().toFormat('DDDD');

    for(var i = 0; i < saveBtnEl.length; i++){
        saveBtnEl[i].addEventListener('click', saveTask);
    }

    setWorkTimes();
    loadLocalData();
    fillTimeBlocks();
}

//load local data if same day
function loadLocalData() {
    var previousDate = localStorage.getItem('date');
    var currentDate = DateTime.now().toLocaleString();

    if(currentDate == previousDate && localStorage.getItem('tasks')) {
        taskList = JSON.parse(localStorage.getItem('tasks'));
    }else{
        taskList.fill(null)
    }

    localStorage.setItem('date', currentDate);
}

function setWorkTimes() {
    var hoursEl = document.querySelectorAll('.hour p');

    for(var i = 0; i < hoursEl.length; i++){
        var hour = DateTime.fromObject({hour: i + 9})
        
        hoursEl[i].textContent = hour.toLocaleString(DateTime.TIME_SIMPLE);

        setColorClass(i, hour.toFormat('HH'))
    }
}

//sets hours for blocks depending on time
function setColorClass(index, hour) {
    var timeBlockEl= document.getElementById((index + 9) * 100);
    var currentHour = DateTime.now().toFormat('HH');

    if(hour < currentHour) {
        timeBlockEl.classList.add('past')
        //console.log(hour + " is earlier than " + currentHour);
    }else if (hour == currentHour) {
        timeBlockEl.classList.add('present')
        //console.log(hour + " is the same as " + currentHour);
    }else {
        timeBlockEl.classList.add('future')
        //console.log(hour + " is later than " + currentHour);
    }
}

function saveTask(event) {
    //selects grand-parent div then selects desc inside it
    currentDescEl = event.composedPath()[2].querySelector('.description');
    //uses id to find index in task list
    index = (event.composedPath()[2].id / 100) - 9;
    taskList[index] = currentDescEl.value

    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function fillTimeBlocks() {
    taskEl = document.querySelectorAll('.description');

    for(var i = 0; i < taskEl.length; i++) {
        taskEl[i].value = taskList[i];
    } 
}

onLoad();