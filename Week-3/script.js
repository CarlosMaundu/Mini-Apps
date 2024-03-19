// Get DOM elements
const emailInput = document.getElementById('email');
const saveButton = document.getElementById('saveButton');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');
const emailTable = document.getElementById('emailTable');
const deleteSelectedButton = document.getElementById('deleteSelectedButton');

// Email validation function
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Save email to local storage
function saveEmail(email) {
  let savedEmails = localStorage.getItem('savedEmails');
  savedEmails = savedEmails ? JSON.parse(savedEmails) : [];
  savedEmails.push(email);
  localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
  renderEmailTable(); 
}

// Render the email table
function renderEmailTable() {
  const tbody = emailTable.querySelector('tbody');
  tbody.innerHTML = ''; // Clear existing rows

  const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];

  savedEmails.forEach((email, index) => {
    const row = tbody.insertRow();
    row.insertCell().innerHTML = `<input type="checkbox">`; 
    row.insertCell().textContent = email;
    row.insertCell().innerHTML = `
        <button onclick="updateEmail(${index})">Edit</button>
        <button onclick="deleteEmail(${index})">Delete</button>`;
  });

  // Add event listeners to checkboxes for toggling the delete button
  const checkboxes = document.querySelectorAll('#emailTable input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', toggleDeleteButton);
  });
}

// (Placeholder) Update email function
function updateEmail(index) {
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
    const oldEmail = savedEmails[index];
  
    const newEmail = prompt("Enter the updated email:", oldEmail);
  
    if (newEmail !== null && newEmail !== oldEmail) {
      if (validateEmail(newEmail)) {
        savedEmails[index] = newEmail;
        localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
        renderEmailTable(); 
        successMessage.textContent = 'Email updated successfully!';
        successMessage.style.display = 'block';
      } else {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
      }
    }
  }

// (Placeholder) Delete a single email
function deleteEmail(index) {
    if (confirm('Are you sure you want to delete this email?')) {
      const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
      savedEmails.splice(index, 1); // Remove the email at the specified index
      localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
      renderEmailTable(); // Update the table view
      successMessage.textContent = 'Email deleted successfully!';
      successMessage.style.display = 'block';
    }
  }

// Delete selected emails
function deleteSelectedEmails() {
    const checkboxes = document.querySelectorAll('#emailTable input[type="checkbox"]');
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
  
    let newSavedEmails = savedEmails.filter((_, index) => !checkboxes[index].checked);
  
    // Don't update if nothing is selected to delete
    if (savedEmails.length === newSavedEmails.length) return;
  
    localStorage.setItem('savedEmails', JSON.stringify(newSavedEmails));
    renderEmailTable(); 
  }

// Function to toggle the delete button visibility
function toggleDeleteButton() {
  const checkboxes = document.querySelectorAll('#emailTable input[type="checkbox"]');
  let anySelected = false;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      anySelected = true;
      break;  
    }
  }

  deleteSelectedButton.style.display = anySelected ? 'block' : 'none';
}

// Event listeners
saveButton.addEventListener('click', () => {
  const email = emailInput.value;
  emailInput.value = ''; // Clear the input field

  // Clear any previous messages
  emailError.textContent = '';
  successMessage.textContent = '';

  // Validate the email
  if (validateEmail(email)) {
    saveEmail(email);
    successMessage.textContent = 'Email saved successfully!';
    successMessage.style.display = 'block'; 
  } else {
    emailError.textContent = 'Invalid email format';
    emailError.style.display = 'block'; 
  }
});

deleteSelectedButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete selected emails?')) {
        deleteSelectedEmails();
        successMessage.textContent = 'Selected emails deleted successfully!';
        successMessage.style.display = 'block';
        }
});

// Initially hide the delete button
deleteSelectedButton.style.display = 'none';

// Load initial data on page load
renderEmailTable();
