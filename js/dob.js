
let todayDate= new Date().getDate();
let todayMonth = new Date().getMonth()+1;
let todayYear = new Date().getFullYear();

let dobDate = 5;
let dobMonth = 10;
let dobYear = 1996;
console.log(todayDate, todayMonth, todayYear);
console.log(dobDate, dobMonth, dobYear);

function calculateDob(dobDate, dobMonth, dobYear){

    if(todayDate< dobDate){
        todayDate+=30;
        dobMonth+=1;
    }
    if(todayMonth < dobMonth){
        todayMonth+=12;
        dobYear+=1;
        
    }
    const ageDate = todayDate - dobDate;
    const ageMonth = todayMonth -dobMonth;
    const ageYear = todayYear - dobYear;

    return  ageYear + ' years ' + ageMonth + ' months ' + ageDate + ' days.';

}
let output = calculateDob(5,10,1996);

//  document.getElementById('age-calculation').textContent = output.toString();
 document.getElementById('age-calculation').innerText = output.toString();
console.log(output.toString());