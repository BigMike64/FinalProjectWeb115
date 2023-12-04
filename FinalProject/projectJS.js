document.addEventListener('DOMContentLoaded', function() {
    var generateMealPlanBtn = document.getElementById('generateMealPlanBtn');
    var printFormBtn = document.getElementById('printFormBtn');
    var clearFormBtn = document.getElementById('clearFormBtn');


    generateMealPlanBtn.addEventListener('click', generateMealPlan);
    printFormBtn.addEventListener('click', printMealPlan);
    clearFormBtn.addEventListener('click', clearForm);
});

function generateMealPlan() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!validateEmail(email)){
        alert('Please enter a valid email address.');
    }
    var breakfast = document.getElementById('breakfast').value;
    var snack1 = document.getElementById('snack1').value;
    var lunch = document.getElementById('lunch').value;
    var snack2 = document.getElementById('snack2').value;
    var dinner = document.getElementById('dinner').value;
    

    var mealPlanWindow = window.open();
    mealPlanWindow.document.write(`
        <html>
        <head>
            <title>Meal Plan</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                }
            </style>
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>

            <h2>Weekly Meal Plan</h2>
            <ul>
                <li><strong>Monday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner} </li>
                <li><strong>Tuesday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
                <li><strong>Wednesday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
                <li><strong>Thursday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
                <li><strong>Friday:</strong> ${breakfast}, ${snack1}, ${lunch}, ${snack2}, ${dinner}</li>
            </ul>
        </body>
        </html>
    `);
}

function printMealPlan() {
    window.print();
}

function clearForm() {
    var form = document.getElementById('mealPlanForm');
    form.reset();
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
