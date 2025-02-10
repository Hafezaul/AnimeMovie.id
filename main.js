document.addEventListener("DOMContentLoaded", function () {
    Swal.fire({
        title: "Selamat Datang!",
        text: "Ini Hanya Sebuah Contoh Website Anime",
        icon: "info",
        showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`
        },
        hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`
        }
    });
});
// Daftar genre anime yang bisa dicari
const animeGenres = [
    { "name": "Attack on Titan", "link": "" },
    { "name": "Boku no Hero Academia", "link": "" },
    { "name": "Chuunibyou demo Koi ga Shitai!", "link": "" },
    { "name": "Dandadan", "link": "" },
    { "name": "One Piece", "link": "" },
    { "name": "Naruto", "link": "" },
    { "name": "Bleach", "link": "" },
    { "name": "Fullmetal Alchemist: Brotherhood", "link": "" },
    { "name": "Death Note", "link": "" },
    { "name": "Sword Art Online", "link": "" }
];

function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("searchResults");
    results.innerHTML = ''; // Kosongkan hasil sebelumnya

    const filteredGenres = animeGenres.filter(genre => genre.name.toLowerCase().includes(input));
    
    if (filteredGenres.length > 0) {
        filteredGenres.forEach(genre => {
            const li = document.createElement("li");
            li.classList.add("dropdown-item");
            li.style.padding = "8px";
            li.style.cursor = "pointer";
            li.style.backgroundColor = "#fff";
            
            li.addEventListener("mouseover", () => li.style.backgroundColor = "#f0f0f0");
            li.addEventListener("mouseout", () => li.style.backgroundColor = "#fff");
            
            const link = document.createElement("a");
            link.href = genre.link;
            link.textContent = genre.name;
            link.style.color = "#000";
            link.style.textDecoration = "none";
            
            li.appendChild(link);
            results.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "Tidak ada dalam pencarian";
        li.style.padding = "8px";
        li.style.color = "red";
        li.style.fontStyle = "italic";
        results.appendChild(li);
    }
    
    results.style.display = input ? "block" : "none";
}

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // new
  
    const scrollContainer = document.querySelector(".card-wrapper1");
    const scrollLeftBtn = document.getElementById("scrollLeft");
    const scrollRightBtn = document.getElementById("scrollRight");

    // Fungsi untuk menggeser ke kiri
    scrollLeftBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
    });

    // Fungsi untuk menggeser ke kanan
    scrollRightBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
    });

    // Drag Scroll (Seperti geser pakai jari)
    let isDragging = false;
    let startX, scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        scrollContainer.classList.add("active");
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDragging = false;
        scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan geser
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

