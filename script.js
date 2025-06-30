// Event listener to toggle sidebar visibility when menu icon is clicked
document.querySelector('.menu-icon')?.addEventListener('click', function toggleSidebar() {
    try {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.toggle('active');
        } else {
            console.warn('Sidebar element not found in the DOM.');
        }
    } catch (error) {
        console.error('Error toggling sidebar:', error);
    }
});

// Function to toggle dropdown menu visibility
function toggleDropdown(event) {
    event.preventDefault();
    try {
        const dropdownElement = event.target.closest('.dropdown');
        if (dropdownElement) {
            const isExpanded = dropdownElement.classList.toggle('active');
            dropdownElement.setAttribute('aria-expanded', isExpanded);
        } else {
            console.warn('Dropdown element not found.');
        }
    } catch (error) {
        console.error('Error toggling dropdown:', error);
    }
}

// Event listener to close dropdowns and sidebar when clicking outside
document.addEventListener('click', function handleOutsideClick(event) {
    try {
        const dropdowns = document.querySelectorAll('.dropdown');
        const sidebar = document.querySelector('.sidebar');
        dropdowns.forEach(dropdown => {
            if (dropdown && !dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
                dropdown.setAttribute('aria-expanded', 'false');
            }
        });
        if (sidebar && !sidebar.contains(event.target) && !event.target.closest('.menu-icon')) {
            sidebar.classList.remove('active');
        }
    } catch (error) {
        console.error('Error handling outside click:', error);
    }
});

// Client-side form validation for contact page
function validateForm(event) {
    event.preventDefault();
    try {
        const form = event.target;
        const gender = form.querySelector('#gender');
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const needs = form.querySelector('#needs');

        let isValid = true;

        if (!gender.value || gender.value === '') {
            alert('Please select your gender.');
            isValid = false;
        }
        if (!name.value.match(/[A-Za-z\s-]{2,50}/)) {
            alert('Please enter a valid name (letters, spaces, hyphens only, 2-50 characters).');
            isValid = false;
        }
        if (!email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
        if (!needs.value || needs.value.length > 500) {
            alert('Please describe your needs (max 500 characters).');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully! (Note: Backend integration required for actual submission.)');
            form.reset();
        }
        return isValid;
    } catch (error) {
        console.error('Error validating form:', error);
        alert('An error occurred. Please try again.');
        return false;
    }
}

// Client-side form validation for contact page
function validateForm(event) {
    event.preventDefault();
    try {
        const form = event.target;
        const gender = form.querySelector('#gender');
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const needs = form.querySelector('#needs');
        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(error => error.style.visibility = 'hidden');

        // Validate Gender
        if (!gender.value || gender.value === '') {
            document.getElementById('gender-error').textContent = 'Please select your gender.';
            document.getElementById('gender-error').style.visibility = 'visible';
            isValid = false;
        }

        // Validate Name
        if (!name.value.match(/[A-Za-z\s-]{2,50}/)) {
            document.getElementById('name-error').textContent = 'Please enter a valid name (letters, spaces, hyphens only, 2-50 characters).';
            document.getElementById('name-error').style.visibility = 'visible';
            isValid = false;
        }

        // Validate Email
        if (!email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            document.getElementById('email-error').style.visibility = 'visible';
            isValid = false;
        }

        // Validate Needs
        if (!needs.value || needs.value.length > 500) {
            document.getElementById('needs-error').textContent = 'Please describe your needs (max 500 characters).';
            document.getElementById('needs-error').style.visibility = 'visible';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully! (Note: Backend integration required for actual submission to support@sackettwoodworking.com.)');
            form.reset();
        }
        return isValid;
    } catch (error) {
        console.error('Error validating form:', error);
        alert('An error occurred. Please try again or contact support.');
        return false;
    }
}

// Check if video is supported and load fallback image if not
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    const fallback = document.querySelector('.video-fallback');
    if (video && !video.canPlayType) {
        video.style.display = 'none';
        fallback.style.display = 'block';
    } else if (video) {
        video.play().catch(function(error) {
            console.warn('Video playback failed, using fallback image:', error);
            video.style.display = 'none';
            fallback.style.display = 'block';
        });
    }
});