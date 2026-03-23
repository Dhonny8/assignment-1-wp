function validateRegistration(event) {
    event.preventDefault();
    let isValid = true;
    
    // Clear existing error messages
    document.querySelectorAll('#registrationForm .error-message').forEach(el => el.textContent = '');
    
    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }
    
    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }
    
    if (isValid) {
        alert('Registration successful! Welcome to LearnHub.');
        document.getElementById('registrationForm').reset();
    }
    
    return isValid;
}

function validateLogin(event) {
    event.preventDefault();
    let isValid = true;
    
    // Clear existing error messages
    document.querySelectorAll('#loginForm .error-message').forEach(el => el.textContent = '');
    
    // Validate Email
    const email = document.getElementById('loginEmail').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('loginEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate Password
    const password = document.getElementById('loginPassword').value;
    if (password.trim() === '') {
        document.getElementById('loginPasswordError').textContent = 'Password is required';
        isValid = false;
    }
    
    if (isValid) {
        alert('Login successful! Redirecting to your dashboard...');
        document.getElementById('loginForm').reset();
        // Option to redirect user: window.location.href = 'index.html';
    }
    
    return isValid;
}
