window.addEventListener('scroll', () => {
    // 스크롤 위치 확인
    let scrollY = window.scrollY;
    console.log(scrollY);

    // CONCEPT
    let conceptTitle = document.querySelector('.concept_text h3');
    let logo = document.querySelector('.logo_img p');
    let star = document.querySelector('.star_img p');

    if (scrollY > 499) {
        conceptTitle.classList.add('slideUp');
        logo.classList.add('slideInRight');
    } else {
        conceptTitle.classList.remove('slideUp');
        logo.classList.remove('slideInRight');
    }
    if (scrollY > 699) {
        star.classList.add('slideInLeft');
    } else {
        star.classList.remove('slideInLeft');
    }

    // STANDARD
    let standardTitle = document.querySelector('#standard h3');
    let circle = document.querySelector('.circle');

    if (scrollY > 1100) {
        standardTitle.classList.add('slideUp');
    } else {
        standardTitle.classList.remove('slideUp');
    }
    if (scrollY > 1134) {
        circle.classList.add('fadeIn');
    } else {
        circle.classList.remove('fadeIn');
    }
});