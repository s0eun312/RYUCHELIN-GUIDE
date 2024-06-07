// 이미지 호버시 이미지 변경
document.addEventListener('DOMContentLoaded', () => {
    let japan1 = document.getElementById('japan1');
    let japan2 = document.getElementById('japan2');
    let japan3 = document.getElementById('japan3');
    let firSrc = japan1.src;
    let secSrc = japan2.src;
    let thrSrc = japan3.src;
    let firSrcHover = '../img/food/japan1_hover.png';
    let secSrcHover = '../img/food/japan2_hover.png';
    let thrSrcHover = '../img/food/japan3_hover.png';

    japan1.addEventListener('mouseover', () => {
        japan1.src = firSrcHover;
    });
    japan1.addEventListener('mouseout', () => {
        japan1.src = firSrc;
    });

    japan2.addEventListener('mouseover', () => {
        japan2.src = secSrcHover;
    });
    japan2.addEventListener('mouseout', () => {
        japan2.src = secSrc;
    });

    japan3.addEventListener('mouseover', () => {
        japan3.src = thrSrcHover;
    });
    japan3.addEventListener('mouseout', () => {
        japan3.src = thrSrc;
    });
});

// 이미지 클릭시 sub2 페이지 이동
let japan_1 = document.getElementById('japan1');
let japan_2 = document.getElementById('japan2');
let japan_3 = document.getElementById('japan3');

japan_1.addEventListener('click', () => {
    window.location.href = "japan_1.html";
});
japan_2.addEventListener('click', () => {
    window.location.href = "japan_2.html";
});
japan_3.addEventListener('click', () => {
    window.location.href = "japan_3.html";
});