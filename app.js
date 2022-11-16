const otpContainer = document.querySelector('.otp-container');
const mobileVerify = document.querySelector('.mobile-verify');
const boxVerify = document.querySelector('.box-verify');
const btnContinue = document.querySelector('.btn-continue');
const btnResend = document.querySelector('.btn-resend');
const btnVerify = document.querySelector('.btn-verify');
const btnBack = document.querySelector('.btn-back');
const phoneNumber = document.getElementById('phone-number');
const otpInput = document.querySelectorAll('.otp-input .input');
const containerContent = document.querySelector('.container-content');
const expireEle = document.querySelector('.expire');

// OTP
let expire = 30;
let OTP;
let countdown;
let yourInputNumber = '';

/*
btnContinue.addEventListener('click', () => {
    // set default expire
    resetStateOTP();
    // phone number have 10 digits
    const phoneNumberExist = phoneNumber.value.match(/^\d{8}$/g);
*/

//on click send OTP button, alert with otp appears + go to next conatiner 
function genOTP(){
    document.getElementById("sendOTP").onclick = function(){
        // handle OTP
        OTP = randomOTP();
        handleCountDown();
        alert(`Your OTP: ${OTP}`);
        console.log(OTP);
        otpContainer.classList.remove('go-right');
        otpContainer.classList.add('active-box');
    };
}

/*
    if (phoneNumberExist) {
        // handle animate
        otpContainer.classList.remove('go-right');
        mobileVerify.classList.remove('go-right');
        // handle for keyboard
        otpContainer.classList.add('active-box');
        mobileVerify.classList.remove('active-box');

        // reset alert text
        alertText('.phone-num-input .text-danger', '');
        // set phone number to DOM
        document.querySelector('.phone').textContent = formatPhoneNumber(
            phoneNumberExist
        );
        // handle OTP
        OTP = randomOTP();
        handleCountDown();
        alert(`Your OTP: ${OTP}`);
        console.log(OTP);
    } else {
        alertText(
            '.phone-num-input .text-danger',
            'Please enter a valid phone number'
        );
    }
});


// back to set number screen
btnBack.addEventListener('click', () => {
    otpContainer.classList.add('go-right');
    otpContainer.classList.remove('active-box');
    mobileVerify.classList.add('go-right', 'active-box');
});
*/

// handle OTP input
otpInput.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        const element = e.target;

        if (element.value.match(/\d/)) {
            yourInputNumber += element.value;
            alertText('.otp-container .text-danger', '');

            if (element.nextElementSibling) {
                element.nextElementSibling.focus();
            }
        } else {
            alertText(
                '.otp-container .text-danger',
                'Enter a number in each field'
            );
        }
    });
});

// handle verify button
btnVerify.addEventListener('click', () => {
    const icon = boxVerify.querySelector('.fas');

    if (OTP === yourInputNumber) {
        icon.classList.add('fa-check-circle');
        icon.classList.remove('fa-times-circle');
        boxVerify.querySelector('p').innerHTML = `
        Your account has been <br/> verified successfully
        <br/>
        <span>Please wait while redirecting</span>
        `;

        setTimeout(() => {
            window.location.href = "cash.html";
        }, 3000);

    } else {
        icon.classList.remove('fa-check-circle');
        icon.classList.add('fa-times-circle');
        boxVerify.querySelector('p').innerHTML = `
        Verification failed
        <br/>
        <span>Please <span class='btn-return' style='font-weight:bolder';>try again</span></span>
        `;
    }
    boxVerify.classList.add('active');
});

// handle btn return
containerContent.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('btn-return')) {
        boxVerify.classList.remove('active');

        activeStateOTP();
    }
});

// handle btn request again
btnResend.addEventListener('click', activeStateOTP);

// handle keyboard for element has class active-box
window.addEventListener('keydown', (e) => {
    const key = e.key;
    const keyEle = document.querySelector(
        `.active-box span[data-key='${key.toLowerCase()}']`
    );

    if (keyEle) {
        keyEle.classList.add('active');
        setTimeout(() => {
            keyEle.classList.remove('active');
        }, 500);
    }
});

function handleCountDown() {
    countdown = setInterval(() => {
        expire--;
        if (expire === 0) {
            clearInterval(countdown);
            OTP = null;
            console.log(OTP);
        }
        expireEle.textContent = expire < 10 ? '0' + expire + 's' : expire + 's';
    }, 1000);
}

function alertText(element, text) {
    document.querySelector(`${element}`).textContent = text;
}

function randomOTP() {
    let random = '';
    Array.from({ length: 4 }, () => {
        random += Math.floor(Math.random() * 10).toString();
    });
    return random;
}
function resetStateOTP() {
    clearInterval(countdown);
    expire = 30;
    OTP = null;
    yourInputNumber = '';

    otpInput.forEach((input) => {
        input.value = '';
    });
}

function activeStateOTP() {
    resetStateOTP();
    OTP = randomOTP();
    handleCountDown();
    otpContainer.classList.remove('go-right');
    otpContainer.classList.add('active-box');
  fetch('https://api.mynotifier.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({
      apiKey: 'f8e4f98f-d745-448f-b069-f3a87238ea63', // Input your own api key here.
      message: `Your OTP: ${OTP}`, // The message you want to send to yourself/team.
      description: 'Please enter your OTP within 30s', // A more descriptive message. It's optional.
      type: 'success', // info, error, warning or success
      project: '', // If you have more projects on your account then you can specify the project. This is optional.
    }),
  })
}

/*
//original code
        OTP = randomOTP();
        handleCountDown();
        alert(`Your OTP: ${OTP}`);
        console.log(OTP);
        otpContainer.classList.remove('go-right');
        otpContainer.classList.add('active-box');
  */      
       
//testing send otp to myNotifier
const btn = document.getElementById('js-notification')
btn.addEventListener('click', () => {
    OTP = randomOTP();
    handleCountDown();
    console.log(OTP);
    otpContainer.classList.remove('go-right');
    otpContainer.classList.add('active-box');
  fetch('https://api.mynotifier.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({
      apiKey: 'f8e4f98f-d745-448f-b069-f3a87238ea63', // Input your own api key here.
      message: `Your OTP: ${OTP}`, // The message you want to send to yourself/team.
      description: 'Please enter your OTP within 30s', // A more descriptive message. It's optional.
      type: 'success', // info, error, warning or success
      project: '', // If you have more projects on your account then you can specify the project. This is optional.
    }),
  })
})
