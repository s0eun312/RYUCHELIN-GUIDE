// 이미지 호버시 이미지 변경
document.addEventListener('DOMContentLoaded', () => {
    let korea1 = document.getElementById('korea1');
    let korea2 = document.getElementById('korea2');
    let korea3 = document.getElementById('korea3');
    let firSrc = korea1.src;
    let secSrc = korea2.src;
    let thrSrc = korea3.src;
    let firSrcHover = '../img/food/korea1_hover.png';
    let secSrcHover = '../img/food/korea2_hover.png';
    let thrSrcHover = '../img/food/korea3_hover.png';

    korea1.addEventListener('mouseover', () => {
        korea1.src = firSrcHover;
    });
    korea1.addEventListener('mouseout', () => {
        korea1.src = firSrc;
    });

    korea2.addEventListener('mouseover', () => {
        korea2.src = secSrcHover;
    });
    korea2.addEventListener('mouseout', () => {
        korea2.src = secSrc;
    });

    korea3.addEventListener('mouseover', () => {
        korea3.src = thrSrcHover;
    });
    korea3.addEventListener('mouseout', () => {
        korea3.src = thrSrc;
    });
});

// 이미지 클릭시 sub2 페이지 이동
let korea_1 = document.getElementById('korea1');
let korea_2 = document.getElementById('korea2');
let korea_3 = document.getElementById('korea3');

korea_1.addEventListener('click', () => {
    window.location.href = "korea_1.html";
});
korea_2.addEventListener('click', () => {
    window.location.href = "korea_2.html";
});
korea_3.addEventListener('click', () => {
    window.location.href = "korea_3.html";
});