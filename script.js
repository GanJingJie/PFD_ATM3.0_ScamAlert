//Account Number Validation
function validate() {
    if (document.myForm.acctnum.value == "" || isNaN(document.myForm.acctnum.value) ||
        document.myForm.acctnum.value.length != 8) {

        alert("Please provide an account number in the format #### ####.");
        document.myForm.acctnum.focus();
        return false;
    }
    return (true);
}

//PIN Number Validation
function validatePin() {
    //if false
    if (document.PinForm.pinnum.value == "" || isNaN(document.PinForm.pinnum.value) ||
        document.PinForm.pinnum.value.length != 6) 
    {
        alert("Please provide your 6-digit PIN number in the format ######.");
        window.location.assign("incorrectPin.html")
        document.PinForm.pinnum.focus();
        return false;
    }
    //if true
    return (true);
}

//if incorrect pin more than 3 times
function incorrectPin(){
    if((document.PinForm.pinnum.value.length == 6))
    {
        return true;
    }
    if((document.PinForm.pinnum.value == "" || isNaN(document.PinForm.pinnum.value) ||document.PinForm.pinnum.value.length != 6)>3)
    {
        window.location.assign("blockCard.html");
        return false;
    }
    window.location.assign("blockCard.html");
    return (false);
}

//tap anywhere on screen to begin
function clickFunction() {
    document.getElementById("click").onclick = function() {
        location.href = "cardnum.html";
    };
}

//tap to play audio
function play() {
    document.getElementById("thankaudio").play();
    };
setTimeout("play()", 10000);

//endpage click to go back to index for the next customer
function clickFunction2() {
    document.getElementById("click2").onclick = function() {
        location.href = "index.html";
    };
}


//$(":input").inputmask();

//withdraw an amount
function withdrawAmt(){
    if(document.withdrawForm.amt.value > 500 )
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
