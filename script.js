// script.js
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Prepare form data for sending
    var formData = new FormData(this);

    // AJAX request to Formspree
    fetch('https://formspree.io/f/mvoegjvv', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Display thank you message
            var thankYouMessage = '<p>Thank you for your submission! You will receive an email with DropshipAI V1 releases.</p>';
            document.querySelector('.form-container').innerHTML = thankYouMessage;
        } else {
            // Handle errors
            alert('Oops! There was a problem submitting your form');
        }
    })
    .catch(error => console.error('Error:', error));
});