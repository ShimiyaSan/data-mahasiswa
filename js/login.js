document.addEventListener("DOMContentLoaded", function () {
  const toggleFormLinks = document.querySelectorAll(".toggle-form a");

  toggleFormLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const currentForm = document.querySelector(".form-container form.active");
      const targetForm = document.querySelector(".form-container form:not(.active)");

      currentForm.classList.remove("active");
      targetForm.classList.add("active");
    });
  });

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Perform validation (you can add more complex validation here)
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // For demonstration purpose, you can replace this with actual login logic
    // Simulate a delay to show an animation
    setTimeout(function() {
        alert("Logged in as: " + username);
        // Here you can redirect the user to the main page
        window.location.href = "./home.html"; // Change "main.html" to your actual main page URL
    }, 1000); // 1000 milliseconds = 1 second
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    // Perform validation (you can add more complex validation here)
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // For demonstration purpose, you can replace this with actual registration logic
    alert("Registered as: " + username);

    // Here you can send the data to your server (e.g., via AJAX) to store in a database
});


  function showLoading() {
    document.getElementById("loadingOverlay").style.display = "block";
}
});
