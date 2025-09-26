const name = prompt("Masukan Nama Kamu:");

if (name) {
  document.getElementById("username").textContent = name;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // cegah reload halaman

    // Ambil value dari input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi manual
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Semua field wajib diisi!",
      });
      return;
    }

    // Kalau sukses
    Swal.fire({
      icon: "success",
      title: `Thanks, ${name}!`,
      text: "Form submitted successfully!",
      confirmButtonColor: "#C8A00C",
    });

    // Reset form setelah submit
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    });
  }
});
