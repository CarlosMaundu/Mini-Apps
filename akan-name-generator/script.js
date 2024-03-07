const form = document.getElementById('akan-name-form');
const birthdayInput = document.getElementById('birthday');
const genderSelect = document.getElementById('gender');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdayString = birthdayInput.value; // Get the user input

    // Split the date string into separate components (day, month, year)
    const birthdayParts = birthdayString.split('/');
    if (birthdayParts.length !== 3) {
        alert('Invalid date format! Please enter in dd/mm/yyyy format.');
        return;
    }

    const day = parseInt(birthdayParts[0], 10);
    const month = parseInt(birthdayParts[1], 10);
    const year = parseInt(birthdayParts[2], 10);

    // Validate month and day based on the new format
    if (month <= 0 || month > 12 || day <= 0 || day > 31) {
        alert('Invalid date! Please enter a valid day and month.');
        return;
    }
  

});
