
document.addEventListener('DOMContentLoaded', function() {
 const contactForm = document.getElementById('contactForm');
    
if (contactForm) {
contactForm.addEventListener('submit', function(event) {
 event.preventDefault();
            
clearErrors();
    
const fullName = document.getElementById('fullName').value.trim();
const email = document.getElementById('email').value.trim();
const country = document.getElementById('country').value.trim();
const comments = document.getElementById('comments').value.trim();
            
 let isValid = true;
            

if (!fullName) {
    showError('nameError', 'Full name is required');
     isValid = false;
    } else if (fullName.length < 2) {
    showError('nameError', 'Full name must be at least 2 characters');
    isValid = false;   }
            
    if (!email) {
    showError('emailError', 'Email is required');
     isValid = false;
    } else if (!isValidEmail(email)) {
    showError('emailError', 'Please enter a valid email address');
     isValid = false;
            }
            
if (!country) {
    showError('countryError', 'Country is required');
    isValid = false;
    } else if (country.length < 2) {
    showError('countryError', 'Country must be at least 2 characters');
 isValid = false;}

if (!comments) {
showError('commentsError', 'Comments are required');
isValid = false;
} else if (comments.length < 10) {
showError('commentsError', 'Comments must be at least 10 characters');
isValid = false;}
            
if (isValid) {
alert('Form submitted successfully! Thank you for your message.');
    contactForm.reset();}
});
    }
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}


function clearErrors() {
    const errorElements = document.querySelectorAll('.invalid-feedback');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
}