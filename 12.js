function getConfirmation() {
    var retVal = confirm("Do you want to continue?");
    if (retVal == true) {
        document.write("User wants to continue!");
        return true
    } else {
        document.write("User does not want to continue!");
        return false;
    }
}
