const days_el = document.getElementById('days_display'); 
const hours_el = document.getElementById('hours_display'); 
const minutes_el = document.getElementById('minutes_display'); 
const seconds_el = document.getElementById('seconds_display'); 

const getDate =  document.getElementById('dateInput').value;
const date_button = document.getElementById('datebtn');

date_button.click(function() {
    
});

console.log(getDate);

const date_input = Date.parse(getDate);

function main() {

    const time_now = new Date().getTime();
    const time_diff =Math.round(Math.floor(date_input - time_now)/1000);

    var total_time = time_diff;
    // console.log(total_time);

    const days = Math.floor(total_time / 3600/24);
    const hours = Math.floor(total_time/3600 % 24);
    const minutes = Math.floor(total_time / 60 % 60);    
    const seconds = Math.floor(total_time % 60);

    // console.log(days , hours , minutes , seconds);


    // function convert_time(total_time) {
    //     const days = Math.floor(total_time / 3600/24);
    //     const hours = Math.floor(total_time/3600 % 24);
    //     const minutes = Math.floor(total_time / 60 % 60);    
    //     const seconds = Math.floor(total_time % 60);

    //     console.log(days , hours , minutes , seconds);
    // }

    // function countDown() {
    //     const newYearsDate = new Date(newYears);
    //     const currentDate = new Date();
        
    //     const total_seconds = (newYearsDate - currentDate)/1000;

    //     const days = Math.floor(total_seconds / 3600/24);
    //     const hours = Math.floor(total_seconds/3600 % 24);
    //     const minutes = Math.floor(total_seconds / 60 % 60);    
    //     const seconds = Math.floor(total_seconds % 60);

        days_el.innerText = days;
        hours_el.innerText = hours;
        minutes_el.innerText = minutes;
        seconds_el.innerText = seconds;
    // }
}
// countDown();
setInterval(main , 1000);
