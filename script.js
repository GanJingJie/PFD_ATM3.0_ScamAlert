//Account Number Validation // change 8 here to user's {acctnum}
function validate() {
    if (document.myForm.acctnum.value == "" || isNaN(document.myForm.acctnum.value) ||
        document.myForm.acctnum.value.length != 8) {

        alert("Please provide an account number in the format #### ####.");
        document.myForm.acctnum.focus();
        return false;
    }
    return (true);
}

//PIN Number Validation // change 6 here to user's {pin}
function validatePin() {
    //if false
    if (document.PinForm.pinnum.value == "" || isNaN(document.PinForm.pinnum.value) ||
        document.PinForm.pinnum.value.length != 6 || document.PinForm.pinnum.value == "654321") 
    {
        alert("Please provide the correct 6-digit PIN number in the format ######.");
        window.location.assign("incorrectPin.html")
        document.PinForm.pinnum.focus();
        return false;
    }
    //if true
    return (true);
}

//if incorrect pin more than 3 times // change 6 here to user's {pin}
function incorrectPin(){
    if((document.PinForm.pinnum.value == "" || isNaN(document.PinForm.pinnum.value) ||document.PinForm.pinnum.value.length != 6
    || document.PinForm.pinnum.value == "654321"))
    {
        window.location.assign("incorrectPin2.html");
        return false;    
    }
    else if((document.PinForm.pinnum.value.length == 6))
    {
        return true;
    }
    window.location.assign("incorrectPin2.html");
    return (false);
}

function incorrectPin2(){
    if((document.PinForm.pinnum.value == "" || isNaN(document.PinForm.pinnum.value) ||document.PinForm.pinnum.value.length != 6
    || document.PinForm.pinnum.value == "654321"))
    {
        window.location.assign("blockcard.html");
        return false;    
    }
    else if((document.PinForm.pinnum.value.length == 6))
    {
        return true;
    }
    window.location.assign("blockcard.html");
    return (false);
}
//tap anywhere on screen to begin
function clickFunction() {
    document.getElementById("click").onclick = function() {
        location.href = "cardnum.html";
    };
}

//tap to play audio for thank.html
function play() {
    document.getElementById("thankaudio").play();
    };
setTimeout("play()", 8000);

//play cash + thank audio  after delay
function playCashAudio(){
    document.getElementById("cashaudio").play();
};
setTimeout("playCashAudio()", 10000);


//endpage click to go back to index for the next customer
function clickFunction2() {
    document.getElementById("click2").onclick = function() {
        location.href = "index.html";
    };
}


//$(":input").inputmask();

//withdraw an amount // change 500 here to user's {dailylimit}
function withdrawAmt(){
    if(document.withdrawForm.amt.value > 500)
    {
        window.location.assign('otpindex.html')
        return (false);
    }    
    return (true);
}

//current date time
var time = new Date().toLocaleTimeString();
var date = new Date().toDateString();
var datetime = date + ' | ' + time;
console.log(datetime);
 // it will represent date in the console of developers tool
document.getElementById("date-time").textContent = datetime; // represent on html page
