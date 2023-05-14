const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

let darktolight = document.querySelectorAll(".darktolight")
let lighttodark = document.querySelectorAll(".lighttodark")
let imgdarkmode = document.querySelectorAll(".imgdarkmode")

modeToggle.addEventListener('click', () => {
    darktolight.forEach((a) => { a.classList.toggle("light-side") })
    lighttodark.forEach((b) => { b.classList.toggle("dark-side") })
    imgdarkmode.forEach((c) => { c.classList.toggle("img-darkmode") })




    body.classList.toggle('dark-mode');
    modeToggle.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun fa-xs" style="color: #ffffff;"></i>' : '<i class="fas fa-moon fa-xs" style="color: #ffffff;"></i>'; // Toggle moon and sun icons based on dark mode class
});

let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },

});





const carousel = document.querySelector(".carousel"),
    // firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    // carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop); 




const wrapper = document.querySelector('.wrapper')

let presAsed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if (!pressed) {
        return
    }

    this.scrollLeft += startX - e.clientX
})
























const data = [
    {
        name: "USD",
        cash: { buy: 1.695, sale: 1.7025, centeralBank: 1.7 },
        noCash: { buy: 1.697, sale: 1.702, centeralBank: 1.7 }
    },
    {
        name: "EUR",
        cash: { buy: 1.844, sale: 1.884, centeralBank: 1.8634 },
        noCash: { buy: 1.848, sale: 1.882, centeralBank: 1.8634 }
    },
    {
        name: "RUB",
        cash: { buy: 0.0205, sale: 0.0216, centeralBank: 0.0208 },
        noCash: { buy: 0.0205, sale: 0.0216, centeralBank: 0.0208 }
    },
    {
        name: "GBP",
        cash: { buy: 2.0205, sale: 2.144, centeralBank: 0.0208 },
        noCash: { buy: 2.0205, sale: 2.166, centeralBank: 2.1133 }
    },

]


const tbody = document.querySelector('tbody')
const inp = document.querySelector('#flexSwitchCheckChecked')


inp.onclick = function () {
    show()
}

function show() {


    let x = inp.checked ? "cash" : "noCash"
    tbody.innerHTML = data.reduce((kod, item) => kod += `<tr>
                                                                <th scope="row">${item.name}</th>
                                                                <td>${item[x].buy}</td>
                                                                <td>${item[x].sale}</td>
                                                                <td>${item[x].centeralBank}</td>
                                                             </tr>`, '')
}
show()







// const slider = document.getElementById("rangeinp")
const thisistheway = document.getElementById("thisistheway")
const slider = document.querySelector(".rangeinp")

const value = document.getElementById("value")

value.innerHTML = slider.value

slider.oninput = function () {
    value.innerHTML = this.value
    thisistheway.innerHTML = (slider.value / slider2.value + slider3.value * 2).toFixed(2) + ` ₼`
}

const slider2 = document.querySelector(".rangeinp2")

const value2 = document.getElementById("value2")

value2.innerHTML = slider2.value

slider2.oninput = function () {
    value2.innerHTML = slider2.value
    thisistheway.innerHTML = (slider.value / slider2.value + slider3.value * 2).toFixed(2) + ` ₼`
}
const slider3 = document.querySelector(".rangeinp3")

const value3 = document.getElementById("value3")

value3.innerHTML = slider3.value

slider3.oninput = function () {
    value3.innerHTML = slider3.value
    thisistheway.innerHTML = (slider.value / slider2.value + slider3.value * 2).toFixed(2) + ` ₼`
}




// -------- adding style to header after scroll

window.addEventListener('scroll', e => {
    if (scrollY > 50) {
        document.querySelector('.header-borderbox2').classList.add('header_active');
    } else {
        document.querySelector('.header-borderbox2').classList.remove('header_active');

    }

})