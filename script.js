// Function to calculate age
function calculateAge() {
    // Get the birth date input value
    const birthDateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');
    
    // Check if a date is selected
    if (!birthDateInput.value) {
        resultDiv.textContent = 'Please select your date of birth';
        resultDiv.classList.remove('show');
        return;
    }
    
    // Get the birth date
    const birthDate = new Date(birthDateInput.value);
    const today = new Date();
    
    // Check if birth date is in the future
    if (birthDate > today) {
        resultDiv.textContent = 'Birth date cannot be in the future!';
        resultDiv.classList.remove('show');
        return;
    }
    
    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if birthday hasn't occurred this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Display the result
    if (age === 1) {
        resultDiv.textContent = `You are ${age} year old`;
    } else {
        resultDiv.textContent = `You are ${age} years old`;
    }
    
    resultDiv.classList.add('show');
}

// Add event listener for Enter key
document.getElementById('birthdate').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});

// Set max date to today (prevent future dates)
document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];