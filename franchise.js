// Smooth Page Transition from Home to Franchise Page
document.getElementById("franchiseBtn").addEventListener("click", function() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "franchise.html";  // Redirect to franchise page
    }, 500); // Wait for fade-out animation
});

// Franchise Form Validation and Success/Error Messages
document.getElementById("franchiseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Basic Validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const feedbackElement = document.getElementById("formFeedback");

    if (name && email && message) {
        feedbackElement.textContent = "Thank you for your interest! We'll get back to you soon.";
        feedbackElement.style.color = "green";
        feedbackElement.style.display = "block";
        document.getElementById("franchiseForm").reset(); // Reset form
    } else {
        feedbackElement.textContent = "Please fill out all fields.";
        feedbackElement.style.color = "red";
        feedbackElement.style.display = "block";
    }
});

// Parallax Effect on Franchise Page
window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".parallax");
    let offset = window.pageYOffset * 0.5; // Adjust the parallax speed
    parallax.style.backgroundPosition = `center ${offset}px`;
});
