const nav = document.querySelector(".nav");
const navAs = document.querySelectorAll(".nav-a");

window.addEventListener("scroll", navShrink)

function navShrink() {
    if (window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add("active-nav");
    } else {
        nav.classList.remove("active-nav");
    }
}

navAs.forEach((a) => {
    a.addEventListener("click", () => {
        removeActiveClasses();
        a.classList.add("current");
    })
})

function removeActiveClasses() {
    navAs.forEach((a) => {
        a.classList.remove("current");
    })
}


// navA.addEventListener("click", function () {
//     for(a of navA) {
//         a.classList.add("current");
//     }
// })
// This doesn't work oh no! Google what to do...



// portfolio section

const imgs = document.querySelector("#imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}




