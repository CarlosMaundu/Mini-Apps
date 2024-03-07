const form = document.getElementById('akan-name-form');
const birthdayInput = document.getElementById('birthday');
const genderSelect = document.getElementById('gender');
const resultDiv = document.getElementById('result');
const errorDiv = document.createElement('div');
errorDiv.classList.add('error-message'); // No 'hide' class initially

const maleNames = {
    0: 'Kwasi',
    1: 'Kwadwo',
    2: 'Kwabena',
    3: 'Kwaku',
    4: 'Yaw',
    5: 'Kofi',
    6: 'Kwame'
};

const femaleNames = {
    0: 'Akosua',
    1: 'Adwoa',
    2: 'Abenaa',
    3: 'Akua',
    4: 'Yaa',
    5: 'Afua',
    6: 'Ama'
};

// Event listener for form submission  
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear any previous error messages
    clearError();

    // Get birthday and gender
    const birthdayString = birthdayInput.value; 
    const gender = genderSelect.value; 

    // Split the date string
    const birthdayParts = birthdayString.split('/');
    if (birthdayParts.length !== 3) {
        displayError('Invalid date format! Please enter in dd/mm/yyyy format.', birthdayInput);
        return;
    }

    // Parse and validate date components
    const day = parseInt(birthdayParts[0], 10);
    const month = parseInt(birthdayParts[1], 10);
    const year = parseInt(birthdayParts[2], 10);

    if (month <= 0 || month > 12 || day <= 0 || day > 31) {
        displayError('Invalid date! Please enter a valid day and month.', birthdayInput);
        return;
    }

    // Additional validation for specific months
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) { 
        displayError('Invalid date! There are only 30 days in this month.', birthdayInput);
        return;
    }
    if (month === 2 && (day > 29 || (day === 29 && !isLeapYear(year)))) {
        displayError('Invalid date! February has only 28 or 29 days.', birthdayInput);
        return;
    }

    // Calculate day of week
    const dayOfWeek = calculateDayOfWeek(year, month, day);

    // Determine Akan name
    let akanName;
    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    // Display result
    resultDiv.textContent = `Your Akan name is ${akanName}`;
    resultDiv.classList.add('result-visible'); 
}); 

// Function to display error message
function displayError(message, field) {
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv); 
    errorDiv.classList.add('show');
    setTimeout(() => {
        errorDiv.classList.remove('show');  
    }, 3000); // 3 seconds delay
}

// Function to clear error messages
function clearError() {
    errorDiv.classList.remove('show'); 
}

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Logic to calculate day of the week based on date (considering leap years)
function calculateDayOfWeek(year, month, day) {
    const adjustedYear = month === 1 || month === 2 ? year - 1 : year;
    const adjustedMonth = month === 1 || month === 2 ? month + 12 : month;
    const century = Math.floor(adjustedYear / 100);
    const yearOfCentury = adjustedYear % 100;

    let dayOfWeek = (day + Math.floor(2.6 * adjustedMonth - 0.2) - 2 * century - Math.floor(century / 4) + yearOfCentury + Math.floor(yearOfCentury / 4)) % 7;
    dayOfWeek = (dayOfWeek + 6) % 7; // Adjust for 0 being Sunday

    return dayOfWeek;
}

// Event listeners to clear errors on user interaction
birthdayInput.addEventListener('input', clearError); 
genderSelect.addEventListener('change', clearError);
