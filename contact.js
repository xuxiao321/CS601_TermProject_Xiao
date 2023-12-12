function sendEmail() {
    let form = document.getElementById('contactForm');

    // Form validation check
    if (!form.checkValidity()) {
        alert('Please fill out the form correctly.');
        return false;
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "xu1471050391@gmail.com",
        Password: "BCA74AF5C366667A5FC5A1EB5719C0E1B3DB",
        To: 'xuxiao@bu.edu',
        From: "xu1471050391@gmail.com",
        Subject: "New Message from Contact Form",
        Body: "Name: " + document.getElementById('name').value +
            "<br/> Email: " + document.getElementById('email').value +
            "<br/> Phone: " + document.getElementById('phone').value +
            "<br/> Message: " + document.getElementById('message').value
    }).then(
        message => {
            alert("Sent Successfully!");
            form.reset();
        }
    );

    return false; // Prevent form submission
}
