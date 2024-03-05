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
    if (username === "arman" && password === "1212") {
        showLoading(); // Tampilkan animasi loading
        setTimeout(function() {
            // Redirect ke halaman utama setelah 2 detik
            window.location.href = "./home.html";
          }, 2000);
        } else {
          alert("Username atau password salah.");
        }
      });
      
      function showLoading() {
        document.getElementById("loadingOverlay").style.display = "block";
      }
      
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


});
