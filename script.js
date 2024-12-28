myWorkingHours.innerHTML = localStorage.getItem('html');

function addWorktime() {

    let currentDate = myDate.value;
    let startTime = mystarttime.value;
    let endTime = myendTime.value;

    myWorkingHours.innerHTML +=`
    <div class="list-item">
        <img class="small-image" src="images/clock.png">
        ${currentDate} ${startTime} -  ${endTimeTime}
    </div>`;

    localStorage.setItem('html', myWorkingHours.innerHTML);
}