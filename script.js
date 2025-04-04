// page loader
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simulate loading time
    setTimeout(() => {
        loader.style.opacity = "0"; // Smooth transition
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 500); // Give time for opacity transition
    }, 3000); // Adjust loading time if needed
});

// navbar scroll
const Navcolor = document.getElementById('Navcolor');
window.addEventListener("scroll",function(){
    let Navcolor = document.querySelector(".Navcolor");
    if (window.scrollY > 50){
        Navcolor.classList.add("scrolled");
    } else{
        Navcolor.classList.remove("scrolled");
    }
});

// scrolltotop
const scrollTop = document.getElementsByClassName('scrollTop');
window.addEventListener("scroll",function(){
    let scrollTop = document.querySelector(".scrollTop");
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
});


// Password
const passwordinput = document.getElementById("password");
const togglebtn = document.getElementById("togglebtn");
const icon = togglebtn.querySelector("i")

togglebtn.addEventListener("click", function() {
    if (passwordinput.type === "password") {
        passwordinput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        passwordinput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
})


// const sr = ScrollReveal({
//     origin: 'bottom',
//     distance: '60px',
//     duration: 2500,
// })

// sr.reveal(.image-1, {distance: '120px', delay: 400})
// sr.reveal(.home__title, {delay: 1000})
// sr.reveal(.home__description, {delay: 1200})
// sr.reveal(.home__button, {delay: 1400})
// sr.reveal(.home__footer, {delay: 1600})
// sr.reveal(.home__data div, {origin: 'right',interval: 100,delay: 1800})
