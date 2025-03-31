let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveitemsOnClick('next')
btnBack.onclick = () => moveitemsOnClick('back')


function moveitemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')


    if (type == "next") {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')

    }

    setTimeout(() => {
        
        container.classList.remove('next')
        container.classList.remove('back')
        
    }, 3000);

}

const slides = document.querySelectorAll(".list-item");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

backBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// inicia com o primeiro slide ativo
showSlide(currentSlide);
