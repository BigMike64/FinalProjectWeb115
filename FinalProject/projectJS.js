document.addEventListener('DOMContentLoaded', function() {
    var generateMealPlanBtn = document.getElementById('generateMealPlanBtn');
    var downloadFormBtn = document.getElementById('downloadFormBtn');
    var clearFormBtn = document.getElementById('clearFormBtn');

    generateMealPlanBtn.addEventListener('click', generateMealPlan);
});

function generateMealPlan() {
    var mealPlanWindow = window.open();
}