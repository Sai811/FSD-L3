function validateForm() {
    console.log("Form validation triggered");
    // Clear previous error messages
    clearErrors();

    // Get the values from the form
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const zipcode = document.getElementById("zipcode").value.trim();
    
    let isValid = true; // To check if the form is valid

    // Validate name (mandatory)
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Validate phone number (mandatory and numeric)
    const phonePattern = /^\d{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
        isValid = false;
    }

    // Validate email address (mandatory and format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email address is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Validate zip code (mandatory and numeric)
    const zipPattern = /^\d{5}$/;
    if (zipcode === "") {
        document.getElementById("zipError").textContent = "Zip code is required.";
        isValid = false;
    } else if (!zipPattern.test(zipcode)) {
        document.getElementById("zipError").textContent = "Zip code must be 5 digits.";
        isValid = false;
    }

    return isValid; // Prevent form submission if validation fails
}

function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("zipError").textContent = "";
}
