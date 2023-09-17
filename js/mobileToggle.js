// 모바일 메뉴 토글

const body = document.querySelector('body')
const menuToggle = document.querySelector('.header .menuBtn')
const back = document.querySelector('.header .backArr')
const menuClose = document.querySelector('.header .close')
const target = document.querySelector('.header .mobileMenu')
// const dim = document.querySelector('.header .dim')
function modalToggle() {
    target.classList.toggle('ac')
    body.classList.toggle('modalOn')
}

menuToggle.addEventListener('click', () => {
    modalToggle();
})
menuClose.addEventListener('click', () => {
    modalToggle();
})