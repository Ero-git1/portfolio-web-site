let nav = document.querySelector('#nav')
let navBtn = document.querySelector('#nav-btn')
let navBtnimg = document.querySelector('#nav-btn-img')


navBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});