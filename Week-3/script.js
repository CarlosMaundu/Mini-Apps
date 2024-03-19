// Get DOM elements
const emailInput = document.getElementById('email');
const saveButton = document.getElementById('saveButton');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');
const emailTable = document.getElementById('emailTable');
const deleteSelectedButton = document.getElementById('deleteSelectedButton');
const searchInput = document.getElementById('searchInput');
const selectAllCheckbox = document.getElementById('selectAll');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const currentPageDisplay = document.getElementById('currentPage');

// Pagination variables
const itemsPerPage = 5; // Change as needed
let currentPage = 1;


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

// Update pagination controls
function updatePaginationControls(totalPages) {
  const paginationControls = document.querySelector('.pagination-controls');
  paginationControls.innerHTML = ''; // Clear existing controls

  // Add "First" button
  const firstButton = document.createElement('button');
  firstButton.textContent = 'First';
  firstButton.addEventListener('click', () => {
      currentPage = 1;
      renderEmailTable();
  });
  paginationControls.appendChild(firstButton);

  // Add "Previous" button
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          renderEmailTable();
      }
  });
  paginationControls.appendChild(prevButton);

  // Add page buttons
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  for (let i = startPage; i <= endPage; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => {
          currentPage = i;
          renderEmailTable();
      });
      if (i === currentPage) {
          pageButton.classList.add('active');
      }
      paginationControls.appendChild(pageButton);
  }

  // Add "Next" button
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
          currentPage++;
          renderEmailTable();
      }
  });
  paginationControls.appendChild(nextButton);

  // Add "Last" button
  const lastButton = document.createElement('button');
  lastButton.textContent = 'Last';
  lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      renderEmailTable();
  });
  paginationControls.appendChild(lastButton);
}

// Render the email table
function renderEmailTable() {
    const tbody = emailTable.querySelector('tbody');
    tbody.innerHTML = ''; 
  
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
    const filteredEmails = savedEmails.filter(email => email.includes(searchInput.value));

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedEmails = filteredEmails.slice(startIndex, endIndex);

    displayedEmails.forEach((email, index) => {
      const row = tbody.insertRow();
      row.insertCell().innerHTML = `<input type="checkbox">`; 
      row.insertCell().innerHTML = `<span class="editable-email">${email}</span>`; 
      row.insertCell().innerHTML = `
          <button onclick="updateEmail(${startIndex + index})" class="edit-button"><i class="fas fa-edit"></i></button>
          <button onclick="deleteEmail(${startIndex + index})" class="delete-button"><i class="fas fa-trash-alt"></i></button>`;
    });

    // Update pagination controls
    const totalPages = Math.ceil(filteredEmails.length / itemsPerPage);
    currentPageDisplay.textContent = currentPage;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
    updatePaginationControls(totalPages); // Update pagination controls
}

// Update email function
function updateEmail(index) {
    const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
    const emailSpan = emailTable.querySelectorAll('.editable-email')[index]; 
  
    const oldEmail = emailSpan.textContent;
    emailSpan.contentEditable = 'true'; 
    emailSpan.focus(); 
  
    function saveEditedEmail() {
      const newEmail = emailSpan.textContent;
      emailSpan.contentEditable = 'false'; 
  
      if (newEmail !== null && newEmail !== oldEmail) {
        if (validateEmail(newEmail)) {
          savedEmails[index] = newEmail;
          localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
          successMessage.textContent = 'Email updated successfully!';
          successMessage.style.display = 'block';
        } else {
          emailError.textContent = 'Invalid email format';
          emailError.style.display = 'block';
          emailSpan.textContent = oldEmail; // Restore on error
        }
      } else {
        emailSpan.textContent = oldEmail; // Restore if nothing changed
      }
    }
  
    // Save on blur or Enter key press
    emailSpan.addEventListener('blur', saveEditedEmail);
    emailSpan.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        saveEditedEmail();
      }
    });
}

// Delete a single email
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

// Search functionality
searchInput.addEventListener('input', () => {
  currentPage = 1; // Reset to first page on search
  renderEmailTable();
});

// Select all functionality
selectAllCheckbox.addEventListener('change', () => {
  const checkboxes = document.querySelectorAll('#emailTable input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });
  toggleDeleteButton(); 
});

// Pagination event listeners
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderEmailTable();
  }
});

nextPageButton.addEventListener('click', () => {
  const savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
  const totalPages = Math.ceil(savedEmails.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderEmailTable();
  }
});
