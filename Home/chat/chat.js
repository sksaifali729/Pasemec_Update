document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const form = e.target;
    const successMessage = document.getElementById("formResponse");
    const errorMessage = document.getElementById("formError");
  
    // Reset response messages
    successMessage.style.display = "none";
    errorMessage.style.display = "none";
  
    try {
      const formData = new FormData(form);
  
      // Send form data to Formspree
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        successMessage.style.display = "block"; // Show success message
        form.reset(); // Clear form fields
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      errorMessage.style.display = "block"; // Show error message
    }
  });
  