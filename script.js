function submitForm() {
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display the submitted information
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Message:</strong> ${message}</p>`;
}

