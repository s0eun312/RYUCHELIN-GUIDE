// 이미지 호버시 이미지 변경
document.addEventListener('DOMContentLoaded', () => {
    let dessert1 = document.getElementById('dessert1');
    let dessert2 = document.getElementById('dessert2');
    let dessert3 = document.getElementById('dessert3');
    let dessert4 = document.getElementById('dessert4');
    let firSrc = dessert1.src;
    let secSrc = dessert2.src;
    let thrSrc = dessert3.src;
    let fourSrc = dessert4.src;
    let firSrcHover = 'img/dessert/dessert1_hover.png';
    let secSrcHover = 'img/dessert/dessert2_hover.png';
    let thrSrcHover = 'img/dessert/dessert3_hover.png';
    let fourSrcHover = 'img/dessert/dessert4_hover.png';

    dessert1.addEventListener('mouseover', () => {
        dessert1.src = firSrcHover;
    });
    dessert1.addEventListener('mouseout', () => {
        dessert1.src = firSrc;
    });

    dessert2.addEventListener('mouseover', () => {
        dessert2.src = secSrcHover;
    });
    dessert2.addEventListener('mouseout', () => {
        dessert2.src = secSrc;
    });

    dessert3.addEventListener('mouseover', () => {
        dessert3.src = thrSrcHover;
    });
    dessert3.addEventListener('mouseout', () => {
        dessert3.src = thrSrc;
    });

    dessert4.addEventListener('mouseover', () => {
        dessert4.src = fourSrcHover;
    });
    dessert4.addEventListener('mouseout', () => {
        dessert4.src = fourSrc;
    });
});

// 이미지 클릭시 sub2 페이지 이동
let dessert_1 = document.getElementById('dessert1');
let dessert_2 = document.getElementById('dessert2');
let dessert_3 = document.getElementById('dessert3');
let dessert_4 = document.getElementById('dessert4');

dessert_1.addEventListener('click', () => {
    window.location.href = "dessert_1.html";
});
dessert_2.addEventListener('click', () => {
    window.location.href = "dessert_2.html";
});
dessert_3.addEventListener('click', () => {
    window.location.href = "dessert_3.html";
});
dessert_4.addEventListener('click', () => {
    window.location.href = "dessert_4.html";
});