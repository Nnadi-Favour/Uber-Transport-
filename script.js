// Mock user data
// Retrieve user data from localStorage or use default values
var user = JSON.parse(localStorage.getItem('user')) || {
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    payment_method: 'credit_card',
    preferences: 'None'
};

// Function to load user profile data
window.onload = function() {
    // Populate form fields with user data
    document.getElementById('full_name').value = user.full_name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('paymentMethod').value = user.payment_method;
    document.getElementById('preferences').value = user.preferences;

    // Display user data in view profile
    document.getElementById('viewFullName').innerText = user.full_name;
    document.getElementById('viewEmail').innerText = user.email;
    document.getElementById('viewPhone').innerText = user.phone;
    document.getElementById('viewPaymentMethod').innerText = user.payment_method;
    document.getElementById('viewPreferences').innerText = user.preferences;
};

function showEditProfile() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('viewProfile').style.display = 'none';
}

function showViewProfile() {
    document.getElementById('editProfileForm').style.display = 'none';
    document.getElementById('viewProfile').style.display = 'block';
}

function updateProfile() {
    // Update user object with new values
    user.full_name = document.getElementById('full_name').value;
    user.email = document.getElementById('email').value;
    user.phone = document.getElementById('phone').value;
    user.payment_method = document.getElementById('paymentMethod').value;
    user.preferences = document.getElementById('preferences').value;

    // Update localStorage with new user data
    localStorage.setItem('user', JSON.stringify(user));

    // Update view profile with new values
    document.getElementById('viewFullName').innerText = user.full_name;
    document.getElementById('viewEmail').innerText = user.email;
    document.getElementById('viewPhone').innerText = user.phone;
    document.getElementById('viewPaymentMethod').innerText = user.payment_method;
    document.getElementById('viewPreferences').innerText = user.preferences;

    // Hide edit profile form and show view profile
    showViewProfile();

    alert('Profile updated successfully!');
}
