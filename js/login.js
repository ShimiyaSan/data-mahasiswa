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

  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Assume users.json contains user data in the format shown above
    fetch("./pengguna.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
          showLoading(); // Tampilkan animasi loading
          setTimeout(function () {
            // Redirect ke halaman utama setelah 2 detik
            window.location.href = "./home.html";
          }, 2000);
        } else {
          alert("Username atau password salah.");
        }
      })
      .catch((error) => console.error("Error:", error));
  });

  function showLoading() {
    document.getElementById("loadingOverlay").style.display = "block";
}
});
