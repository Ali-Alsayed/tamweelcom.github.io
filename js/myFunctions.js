//******************* FORM VALIDATION FUNCTION *******************//
function validation(){
    // getting elements by id and storing in variables
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let nationalNumber = document.getElementById('National-Number').value;
    let dob = document.getElementById('dt').value;
    let phoneNumber = document.getElementById("pNum").value;
    let email = document.getElementById("email").value;
    let loanType = document.getElementById('LoanType').value;
    let loanYears = document.getElementById('loanYears').value;
    let loanValue = document.getElementById('LoanValue').value;

    // mailRegex: mail perfix can contain all letters, underscore and \escaped character dot and dash (-), @ after mail perfix
    // mail domain can contain the same as mail perfix except should be dot (.) after with two or three charactes (eg .com)
    var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // phoneRegex: starts with 09, can contain all numbers from 0 to 9 in addtion to -, should be ten numbers only
    var phoneRegex= /^[0][9][0-9+-]{10}$/;
    // nameRegex: all letters from A to Z captial and small letters and should be between 3 and 30
    var nameRegex = /^[a-zA-Z ]{3,30}$/; 
    // nationalNumberRegex: should be 11 numbers only,First two numbers should be between 01 and 14, the other nine numbers free from 0 to 9 
    var nationalNumberRegex = /^0[1-9]|1[0-4]([0-9]{6})$/;
    // loanValueRegex: from 1,000,000 to 9,999,999 and 10,000,000
    var loanValueRegex = /^[1-9][0-9]{10}$|^10000000$/;
    
    // trim() is string method to remove spaces
    if(!firstName.trim().match(nameRegex)){
        alert("Please Enter a valid First Name.");
        return false;
    }
    else if(!lastName.trim().match(nameRegex)){
        alert("Please Enter a valid Last Name.");
        return false;
    }        
    else if(!nationalNumber.match(nationalNumberRegex)){
        alert("National Number should match the Syrian format (11 Numbers).\nFirst two numbers represent country (From 01 To 14 only).");
        return false;
    }
    else if(!dob){
          alert("Please Enter your Birth Date.");
          return false;
    }
    else if(!phoneNumber.match(phoneRegex)){
        alert("Please Enter a valid Syrian Phone Number.")
        return false;
    } 
    else if(!email.match(mailRegex)){
        alert('Please Enter a valid email address.');
        return false;
    }
    else if(!loanValue.trim().match(loanValueRegex)){
        alert("Please Enter a value between 1,000,000 and 10,000,000");
        return false;
    }
    else if(!loanType){
        alert("Please Select a Loan Type.");
        return false;
    }
    else if(!loanYears){
        alert("Please Select a Loan Period.");
        return false;
    }
    else if(userText.value !== c) {
        submitButton.addEventListener('click', function(){
            {
                output.classList.add("incorrectCaptcha");
                output.innerHTML = "Incorrect Captcha, please try again";
            }
        })
        return false;
    } 
    else if(getAge(dob) < 18 || getAge(dob) > 80){
        alert("Our Loans doesn't involve ages above 80 and below 18.");
        return false;
    }
    else {
        return true
    }
    
}

//******************* DATE FORMAT CHANGER TO DD/MM//YYYY FUNCTION *******************//
function mydate()
{
    // getting date inputs 
    document.getElementById("dt").style.display = "inline-block";
    document.getElementById("ndt").style.display = "none";
}

function mydate1()
{   
    d=new Date(document.getElementById("dt").value); // storing the date whic user choose 
    dt=d.getDate(); //storing the day the user choose
    mn=d.getMonth(); //storing the month 
    mn++; // increment month by 1 (first month index is 0 and so on)
    yy=d.getFullYear(); // storing the year
    // storing the given date value as we want (dd/mm/yyyy) and storing it in our another date input
    document.getElementById("ndt").value = dt +  " " +  "/" + " " + mn + " "  + "/" + " " + yy
    document.getElementById("ndt").style.display = "inline-block"; // making our date format display
    document.getElementById("dt").style.display = "none"; // making browser format disappear
}

//******************* CALCULATE AGE FUNCTION *******************//
function getAge(x) {
    var today = new Date();
    var birthDate = new Date(x);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//******************* PHONE NUMBER FORMATER FUNCTION *******************//
function formatPhoneNumber(value) {
    // if input value is falsy or the user deletes the input, return
    if (!value) return value;
    
    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');
    
    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;
    
    // return the value without formatting if its less than four digits
    if (phoneNumberLength < 4) return phoneNumber;
    
    // if phoneNumberLength is greater than 4 and less then 7 we start to return the formatted number
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(4)}`;
    }
  
    // if the phoneNumberLength is greater then seven, we add the last bit of formatting and return it.
    return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 10)}`;
}

function phoneNumberFormatter() {
    // grab the value of what the user is typing into the input
    const inputField = document.getElementById('pNum');
  
    // we're going to format this input with the `formatPhoneNumber` function, which we'll write next.
    const formattedInputValue = formatPhoneNumber(inputField.value);
    
    // Then we'll set the value of the inputField to the formattedValue we generated with the formatPhoneNumber
    inputField.value = formattedInputValue;
} 

//******************* CAPTCHA GENERATOR *******************//
let captchaText = document.querySelector('#captcha'); 
if (captchaText) {
    var ctx = captchaText.getContext("2d");// getting canvas tag and storing it
    ctx.font = "20px Roboto"; // putting font size: 20 and roboto font type
}

// getting elements by id (querySelector)
let userText = document.querySelector('#textBox'); 
let submitButton = document.querySelector('#submitButton');
let refreshButton = document.querySelector('#refreshButton');
let output = document.querySelector('#output');
// what captcha will contain
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = []; // declaring empty array, to store captcha text later

for (let i = 1; i <= 7; i++) { // 7 represnt captcha length
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        // pushing elements into the array which we declared, using math object and it's functions
    }
    
if (captchaText) { // if captchaText not falsy (true value)
    var c = emptyArr.join(''); //putting space between every element in that array
    if (captchaText) {
        ctx.fillText(c,captchaText.width/4, captchaText.height/2); 
        // fillText is canvas method which will take:
        //text to render/draw, the point at which to begin drawing the text, the baseline on which to begin drawing the text
    }

    // addEventListener function to check if user input match the given captch

    // when refresh making user text empty and generating another captha
    refreshButton.addEventListener('click', function() {
            userText.value = "";
            let refreshArr = [];
            for (let j = 1; j <= 7; j++) {
            refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
            }
    
            ctx.clearRect(0, 0, captchaText.width, captchaText.height);
            c = refreshArr.join('');
            ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
            output.innerHTML = "";        
        });
}

//******************* DISPLAYING USER INPUT ON RESULT PAGE USING LOCAL STORAGE *******************//
let submitData = document.getElementById("resultForm")
if (submitData) {
    submitData.onsubmit = (e) => {
        if (validation()) {
            // 
            var firstName = document.getElementById('fname').value;
            localStorage.setItem('firstName', firstName);
            
            var lastName = document.getElementById('lname').value;
            localStorage.setItem('lastName', lastName);
            
            var dateOfBirth = document.getElementById('ndt').value;
            localStorage.setItem('dateOfBirth', dateOfBirth);
            
            var paymentMethod = document.querySelector('#payMeth input:checked').value;
            localStorage.setItem('paymentMethod', paymentMethod);
            
            var nationalNumber = document.getElementById('National-Number').value;
            localStorage.setItem('nationalNumber', nationalNumber);
            
            var phoneNumber = document.getElementById("pNum").value;
            localStorage.setItem('phoneNumber', phoneNumber);
            
            var email = document.getElementById("email").value;
            localStorage.setItem('email', email);
            
            var loanValue = document.getElementById('LoanValue').value;
            localStorage.setItem('loanValue', loanValue);
            
            var loanYears = document.getElementById('loanYears').value;
            localStorage.setItem('loanYears', loanYears)
            
            var LoanType = document.getElementById('LoanType').value;
            localStorage.setItem('loanType', LoanType);
            
            
            var governorates = {'01': 'Damascus', '02': 'Aleppo', '03': 'Rif-Dimashq', '04': 'Homs', '05': 'Hama',
            '06': 'Lattakia', '07': 'Idlib', '08': 'Hassakeh', '09': 'Deir ez-Zur', '10': 'Tartous',
            '11': 'Ar-Raqqah', '12': 'Daraa', '13': 'As-Suwayda' ,'14': 'Kenitra'}; 
            
            var governorate = governorates[nationalNumber.slice(0,2).toString()];

            localStorage.setItem('governorate', governorate);

            var annualInterest;
            switch(LoanType){
                case "Saving Account":
                    annualInterest = "5%"
                    break;
                case "Checking Account": case "Eductional":
                    annualInterest = "10%"
                    break;
                case "Agriculture": case "Workshop":
                    annualInterest = "14%"
                    break;
                case "Business":
                    annualInterest = "18%"
                    break;
                case "Home":
                    annualInterest = "11%"
                    break;
                case "Transport":
                    annualInterest = "12%"
                    break;
            }

            localStorage.setItem('annualInterest', annualInterest);
                    
        return
        } 
        else {
            e.preventDefault()
        }
    }
}
        
if (document.body.id == "result") {
    document.getElementById('firstName1').innerHTML = localStorage.getItem('firstName');
    document.getElementById('lastName1').innerHTML= localStorage.getItem('lastName');
    document.getElementById('nationalNumber1').innerHTML= localStorage.getItem('nationalNumber');
    document.getElementById('dateOfBirth1').innerHTML= localStorage.getItem('dateOfBirth');
    document.getElementById('phoneNumber1').innerHTML= localStorage.getItem('phoneNumber');
    document.getElementById('email1').innerHTML= localStorage.getItem('email');
    document.getElementById('loanValue1').innerHTML= localStorage.getItem('loanValue');
    document.getElementById('laonType1').innerHTML= localStorage.getItem('loanType');
    document.getElementById('paymentMethod1').innerHTML= localStorage.getItem('paymentMethod');
    document.getElementById('yearsOfLoan1').innerHTML= localStorage.getItem('loanYears');
    document.getElementById('annualInterest1').innerHTML= localStorage.getItem('annualInterest');
    document.getElementById('governorate1').innerHTML= localStorage.getItem('governorate');
}

//******************* LEARN MORE BUTTONS *******************//
let lMoreBtn = document.querySelectorAll('#products .card .para .btn')

if (lMoreBtn) {
    lMoreBtn.forEach(btn => {
        btn.onclick = () => {
            let modalEl = btn.parentNode.nextElementSibling
            modalEl.classList.add('open')
            modalEl.querySelector('.close-modal').onclick = () => {
                modalEl.classList.remove('open')
            }
        }
    })
}