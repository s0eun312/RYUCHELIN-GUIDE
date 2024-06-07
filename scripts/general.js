// nav 버튼 =========================================!!
document.addEventListener('DOMContentLoaded', () => {
    let navBtn = document.querySelector('.navBtn button');
    let navList = document.querySelector('#nav_list');

    navBtn.addEventListener('click', () => {
        navList.classList.toggle('slide');
    });
});

// top 버튼 =========================================!!
let topBtn = document.getElementById('topBtn');

// top scroll effect
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});