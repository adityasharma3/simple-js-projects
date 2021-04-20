const datapoint = './data/quiz.json';

var question_count = 0;
var marks = 0;

async function main() {
    const response = await fetch(datapoint);
    const data = await response.json();
    
    var question_bank = data.questions;

    console.log(question_bank);


    function getQuestions(question_count) {
        var question = question_bank[question_count].question;

        console.log(question);

        document.getElementById('question').innerText = question;

        getAnswers(question_count);
    }

    getQuestions(0);

    function getAnswers(question_count) {
        var answers = question_bank[question_count].answers;

        console.log(answers);

        document.getElementById('option-a').value = answers[0];
        document.getElementById('option-b').value = answers[1];
        document.getElementById('option-c').value = answers[2];
        document.getElementById('option-d').value = answers[3];
    }

    document.getElementById('next').addEventListener('click' , () => {
        if (question_count === 11) {
            alert("no more questions left");
        }
        else {
            document.getElementById('question').value = "";
            question_count++;
            getQuestions(question_count);
        }

        for (let i=0 ; i<4 ; ++i) {
            var x = document.getElementsByClassName('btn-ans')[i];
            x.style.background = "black";
        }
    });

    document.getElementById('prev').addEventListener('click' , () => {
        if (question_count === 0) {
            alert("no previous questions");
            question_count = 0;
        }
        else {
            document.getElementById('question').value = "";
            question_count--;
            getQuestions(question_count);
        }

        for (let i=0 ; i<4 ; ++i) {
            var x = document.getElementsByClassName('btn-ans')[i];
            x.style.background = "black";
        }
    });

    function getCorrectAns(question_count) {
        var getCorrectAns = question_bank[question_count].correctIndex;
        console.log(getCorrectAns);

        var color_this = '';

        var answer_selected = -1;

        document.getElementById('option-a').addEventListener('click' , () => {
            answer_selected = 0;
            color_this = document.getElementById('option-a');
        });

        document.getElementById('option-b').addEventListener('click' , () => {
            answer_selected = 1;
            color_this = document.getElementById('option-b');
        });

        document.getElementById('option-c').addEventListener('click' , () => {
            answer_selected = 2;
            color_this = document.getElementById('option-c');
        });

        document.getElementById('option-d').addEventListener('click' , () => {
            answer_selected = 3;
            color_this = document.getElementById('option-d');
        });

        var a = document.getElementsByClassName('btn-ans')[getCorrectAns];
        a.style.background= "green";
    }

    document.getElementById('answer-container').addEventListener('click' , () => {
        getCorrectAns(question_count);
    });
}

main();  