// 이미지 호버시 이미지 변경
document.addEventListener('DOMContentLoaded', () => {
    let etc1 = document.getElementById('etc1');
    let etc2 = document.getElementById('etc2');
    let firSrc = etc1.src;
    let secSrc = etc2.src;
    let firSrcHover = 'img/food/etc1_hover.png';
    let secSrcHover = 'img/food/etc2_hover.png';

    etc1.addEventListener('mouseover', () => {
        etc1.src = firSrcHover;
    });
    etc1.addEventListener('mouseout', () => {
        etc1.src = firSrc;
    });

    etc2.addEventListener('mouseover', () => {
        etc2.src = secSrcHover;
    });
    etc2.addEventListener('mouseout', () => {
        etc2.src = secSrc;
    });
});

// 이미지 클릭시 sub2 페이지 이동
let etc_1 = document.getElementById('etc1');
let etc_2 = document.getElementById('etc2');

etc_1.addEventListener('click', () => {
    window.location.href = "etc_1.html";
});
etc_2.addEventListener('click', () => {
    window.location.href = "etc_2.html";
});