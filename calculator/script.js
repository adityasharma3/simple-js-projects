//creating a function named 'display()' to output the numbers or operators entered by the user as well as the answers.
function display(message) {
    var output = document.getElementById('output');
    
    //concatenating message so entered values are easier to read and understand.
    output.innerText += message;
}

//'compute()' function retrieves the mathematical expression entered by user once the "=" key is pressed on calculator.
function compute() {
    var expression = document.getElementById('output').innerText;

    //using eval() inbuilt function to evaluate expression.
    var answer = eval(expression);

    //stroring the expression entered into a variable so that it can be displyed on top of current answer.
    var prev_expression = document.getElementById('prev-output');
    prev_expression.innerText = expression;

    //clearing the screen so that the ans is displayed clearly and not attatched to the query entered.
    clear_screen();

    //calling 'display()' method to finally output the answer.
    display(answer);
}

function clear_screen() {
    output.innerText = "";
}