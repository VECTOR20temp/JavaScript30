let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(secs){
    clearInterval(countdown);

    const now = Date.now();
    const then = now + secs * 1000;
    displayTimeLeft(secs);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secsLeft = Math.round((then - Date.now()) / 1000);
        if(secsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secsLeft);
    },1000);
};

function displayTimeLeft(secs){
    const minutes = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    const display = `${minutes}:${remainderSecs < 10 ? '0' : '' }${remainderSecs}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timeStamp){
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;

}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(min);
    timer(mins * 60);
    this.reset();
});