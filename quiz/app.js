console.log("works");

var datapoint = "./data/quiz.json";

var question_count = 0 , marks = 0;

async function main() {
    var response = await fetch(datapoint);
    var data = await response.json();
    var question_tally = data.questions;

    function get_q_and_a(question_count) {
        // var question_tally = data.questions;
        var q = (question_tally[question_count]);
        console.log(q);
        var questions = document.getElementById('question');

        console.log(q.question);
        questions.innerText = q.question;

        for (let i=0 ; i<=3 ; i++) {
            var answers1 = document.createElement('li');
            // var 
            answers1.innerHTML = "<input type = radio id = ans_options name = option> <p>" + data.questions[question_count].answers[i] + "</p>";
            
            var add_to = document.getElementById('answers');
            add_to.appendChild(answers1);
        }
    }

    get_q_and_a(0);

    document.getElementById('next').addEventListener('click' , () => {
        if (question_count === 10) {
            alert("no more questions left");
        }
        else {
            document.getElementById('question').value = "";
            document.getElementById('answers').innerHTML = "";
            question_count++;
            get_q_and_a(question_count);
        }
    });

    document.getElementById('prev').addEventListener('click' , () => {
        if (question_count === 0) {
            alert("no previous questions");
            question_count = 0;
        }
        else {
            document.getElementById('question').value = "";
            document.getElementById('answers').innerHTML = "";
            question_count--;
            get_q_and_a(question_count);
        }
    });

    document.getElementById('answers').querySelector('input').addEventListener('click' , () => {
        // var selected = document.getElementById('answers').querySelector('p').innerText;
        // selected.className = "selected-option";

        var options = document.getElementById('answers').querySelector('input');

        console.log(options);

        for (let i=0; i<4 ; i++) {
            if (options.checked === false) {
                console.log(options);
            }
        }
        // console.log(selected);
        var correct_option = question_tally[question_count].correctIndex;
        // if (selected.innerText === question_tally[question_count].answers[correct_option]) {
        //     marks++;
        //     console.log(selected.value);
        // }

        // console.log(question_tally[question_count].answers[correct_option]);
        

    });
}

main();