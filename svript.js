let input = document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})



function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const tilldate = document.getElementById('tilldate').value;

    if (birthdate && tilldate) {
        const birthDate = new Date(birthdate);
        const tillDate = new Date(tilldate);

        let years = tillDate.getFullYear() - birthDate.getFullYear();
        let months = tillDate.getMonth() - birthDate.getMonth();
        let days = tillDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(tillDate.getFullYear(), tillDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    } else {
        document.getElementById('result').textContent = 'Please enter both dates.';
    }
}
function calculateVelocity() {
    const distance = document.getElementById('distance').value;
    const time = document.getElementById('time').value;

    if (distance && time) {
        const velocity = distance / time;
        document.getElementById('result2').textContent = `The velocity is ${velocity} meters per second.`;
    } else {
        document.getElementById('result2').textContent = 'Please enter both distance and time.';
    }
}


 
document.getElementById("btn").addEventListener("click", function() {
    var height_val = document.getElementById('height').value;
    var weight_val = document.getElementById('weight').value;

    if (height_val === '' || weight_val === '') {
        document.getElementById("result3").innerHTML = 'Please enter valid numbers for height and weight.';
        return;
    }

    var bmi = weight_val / (height_val / 100 * height_val / 100);
    var bmio = bmi.toFixed(2);

    document.getElementById("result3").innerHTML = "Your BMI is " + bmio;
    document.getElementById("bmiTable").style.display = 'block';
});


function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result6').textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalInterest = (emi * totalMonths) - principal;
    const totalAmount = principal + totalInterest;

    document.getElementById('result6').textContent = `Total Interest: ₹${totalInterest.toFixed(2)}\nTotal Amount to be Paid: ₹${totalAmount.toFixed(2)}\nMonthly EMI: ₹${emi.toFixed(2)}`;
}
