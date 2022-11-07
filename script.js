//Account Number Validation
function validate() {
    if (document.myForm.acctnum.value == "" || isNaN(document.myForm.acctnum.value) ||
        document.myForm.acctnum.value.length != 16) {

        alert("Please provide an account number in the format #### #### #### ####.");
        document.myForm.acctnum.focus();
        return false;
    }
    return (true);
}

//PIN Number Validation
function validatePin() {
    if (document.PinForm.pinnum.value == "" || isNaN(document.PinForm.pinnum.value) ||
        document.PinForm.pinnum.value.length != 6) {

        alert("Please provide your 6-digit PIN number in the format ######.");
        window.location.assign("/incorrectPin.html")
        document.PinForm.pinnum.focus();
        return false;
    }
    return (true);
}

//tap anywhere on screen to begin
function clickFunction() {
    document.getElementById("click").onclick = function() {
        location.href = "/index.html";
    };
}