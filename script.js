function validate() {
    if (document.myForm.acctnum.value == "" || isNaN(document.myForm.acctnum.value) ||
        document.myForm.acctnum.value.length != 16) {

        alert("Please provide an account number in the format #### #### #### ####.");
        document.myForm.acctnum.focus();
        return false;
    }

    return (true);
}