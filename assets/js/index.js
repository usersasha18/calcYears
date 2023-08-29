const form = document.querySelector('form'),
      buttonFrom = form.querySelector('button'),
      messageError = document.querySelector('.messageError'),
      closeError = document.querySelector('.close'),
      outputDate = document.querySelector('.outputDate');

let YEAR = new Date().getFullYear();
let MONTHS = new Date().getMonth() + 1;
let DAYS = new Date().getDate();

let day;
let months;
let years;

let result = {};

function checkDataFromInputs() {
    const input = form.querySelectorAll('input');
    input.forEach((inputs) => {
            validateData(inputs)
    });
    calcResult(day, months, years) 
}

function validateData(inputs) {

    const numValue = Number(inputs.value)
    const label = form.querySelector(`label[for="${inputs.id}"]`)
    if(!numValue) {
        inputs.style.border = "1px solid red"
        label.style.color = "red";
        showMessError()
        return
    } else {
        inputs.style.border = "1px solid rgb(165, 165, 165)";
        label.style.color = "rgb(123, 123, 123)";
    }
    switch (inputs.name) {
        case 'input1':
            if(!isNaN(numValue) && numValue > DAYS) {
                inputs.style.border = "1px solid red"
                label.style.color = "red";
                showMessError()
                return
            } 
            day = numValue;
             break;
        case 'input2':
            if(!isNaN(numValue) && numValue > 12) {
                inputs.style.border = "1px solid red"
                label.style.color = "red";
                showMessError()
                return
            }
            months = numValue;
            break;
        case 'input3':
            if(!isNaN(numValue) && numValue > YEAR) {
                inputs.style.border = "1px solid red"
                label.style.color = "red";
                showMessError()
                return
            }
            years = numValue;
            break;
        default:
            break;
    }
}

function showMessError() {
    let count = 3;
    const interval = setInterval(() => {
        count--
        if(count < 1){
            clearInterval(interval)
        }
    },1000)
    messageError.classList.add("active");
    setTimeout(() => {
        messageError.classList.remove("active");
    }, 3400)
} 

function showResult(day, months, years) {
    htmlResult = 
    `
        <div class="years">
            <span>${day}</span><p class="text">years</p>
        </div>
        <div class="months">
            <span>${months}</span><p class="text">months</p> 
        </div>
        <div class="days">
            <span>${years}</span><p class="text">days</p>
        </div>
    `
    outputDate.innerHTML = htmlResult;
}

function calcResult(day, months, years) {
    let ageYears = YEAR - years;
    let ageMonths = MONTHS - months;
    let ageDays = DAYS - day;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(YEAR, MONTHS - 1, 0).getDate();
    }

    // if (ageMonths < 0) {
    //     ageYears--;
    //     ageMonths += 12;
    // }

    showResult(ageYears, ageMonths, ageDays);
}

buttonFrom.addEventListener('click', (event) => {
    event.preventDefault();
    checkDataFromInputs();
});







