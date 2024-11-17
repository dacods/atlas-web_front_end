function welcome(firstname, lastname) {
    let fullName = firstname + ' ' + lastname;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}