// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert("Your message has been sent!");
// });


// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent default form submission

//     const form = e.target;

//     fetch(form.action, {
//         method: form.method,
//         body: new FormData(form),
//         headers: {
//             Accept: "application/json",
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//                 document.getElementById("successMessage").style.display = "block";
//                 form.reset(); // Clear the form
//             } else {
//                 alert("There was an error. Please try again.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//             alert("An error occurred. Please try again.");
//         });
// });

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('contactForm');
    
    // Display a success message
    document.getElementById('formMessage').style.display = 'block';
    
    // Disable the submit button to prevent multiple submissions
    const submitButton = form.querySelector('button');
    submitButton.disabled = true;
    
    // Submit the form via Formspree
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            console.log('Form successfully submitted!');
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Oops! Something went wrong, please try again later.');
    })
    .finally(() => {
        // Re-enable the submit button
        submitButton.disabled = false;
    });
}
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItem = document.querySelector('.nav_item');
const mobileNav = document.querySelector('.mobile-nav');
hamburgerMenu.addEventListener('click', () => {
    navItem.classList.toggle('active');
    mobileNav.classList.toggle('active');
});