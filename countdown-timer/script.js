const days_el = document.getElementById('days_display'); 
const hours_el = document.getElementById('hours_display'); 
const minutes_el = document.getElementById('minutes_display'); 
const seconds_el = document.getElementById('seconds_display'); 

const getDate =  document.getElementById('dateInput').value;


function main() {

    var raw_date =  document.getElementById('dateInput').value;
    date_input = Date.parse(raw_date);

    document.getElementById('dateInput').addEventListener("change" , function() {
        var input = this.value;
        var dateEntered = new Date(input);

        date_input = Date.parse(dateEntered);
        console.log(date_input);
    });

    // var display_date = document.getElementById('dateInput').value;
    // console.log(getElementById(display_date));

    const time_now = new Date().getTime();
    const time_diff = Math.round(Math.floor(date_input - time_now)/1000);

    var total_time = time_diff;

    const days = Math.floor(total_time / 3600/24);
    const hours = Math.floor(total_time/3600 % 24);
    const minutes = Math.floor(total_time / 60 % 60);    
    const seconds = Math.floor(total_time % 60);

    days_el.innerText = days;
    hours_el.innerText = hours;
    minutes_el.innerText = minutes;
    seconds_el.innerText = seconds;
    
}

setInterval(main , 1000);