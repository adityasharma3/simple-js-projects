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

        for (let i=0 ; i<4 ; i++) {
            var answers1 = document.createElement('li');
            answers1.id = "ans_op";
            // var 
            answers1.innerHTML = "<input type = radio id = ans_options name = option checked = false> </input><p>" + data.questions[question_count].answers[i] + "</p>";
            
            var add_to = document.getElementById('answers');
            add_to.appendChild(answers1);
        }

        // var option1 = document.createElement('li');
        // var option2 = document.createElement('li');
        // var option3 = document.createElement('li');
        // var option4 = document.createElement('li');

        // option1.innerHTML = "<input type = radio class = options name = option id = option1></input><p>"+ data.questions[question_count].answers[0]; + "</p>";
        // option2.innerHTML = "<input type = radio class = options name = option id = option2></input><p>"+ data.questions[question_count].answers[1]; + "</p>";
        // option3.innerHTML = "<input type = radio class = options name = option id = option3></input><p>"+ data.questions[question_count].answers[2]; + "</p>";
        // option4.innerHTML = "<input type = radio class = options name = option id = option4></input><p>"+ data.questions[question_count].answers[3]; + "</p>";

        // var add_to = document.getElementById('answers');

        // add_to.appendChild(option1);
        // add_to.appendChild(option2);
        // add_to.appendChild(option3);
        // add_to.appendChild(option4);
    }

    get_q_and_a(0);

    document.getElementById('next').addEventListener('click' , () => {
        if (question_count === 11) {
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

        var options = document.getElementById('ans_options');

        console.log(options);

        // for (let i=0; i<4 ; i++) {
        //     if (!options.checked) {
        //         console.log(options[i]);
        //     }
        // }

        // console.log(options[0].innerHTML , options[1] , options[2] , options[3]);
        // console.log(selected);

        // options.array.forEach(element => {
            
        // });

        var correct_option = question_tally[question_count].correctIndex;
        // if (selected.innerText === question_tally[question_count].answers[correct_option]) {
        //     marks++;
        //     console.log(selected.value);
        // }

        // console.log(question_tally[question_count].answers[correct_option]);
        
        var ans_list = document.getElementById('ans_op');

        for (let i=0 ; i<4 ; ++i) {
            console.log(ans_list.innerHTML);
        }

    });
}

main();