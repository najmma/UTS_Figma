// main.js

// Fungsi untuk menangani pengguliran halaman
window.addEventListener("scroll", function() {
    // Misalnya, tambahkan kelas 'scroll' ke elemen navbar saat pengguna menggulir
    var navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});

// Fungsi untuk menangani klik pada tautan navigasi
document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll("nav ul.navbar a");
    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Ambil target dari atribut href
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            // Gulir ke elemen target dengan efek animasi
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});