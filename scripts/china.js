// 이미지 호버시 이미지 변경
document.addEventListener('DOMContentLoaded', () => {
    let china1 = document.getElementById('china1');
    let china2 = document.getElementById('china2');
    let china3 = document.getElementById('china3');
    let firSrc = china1.src;
    let secSrc = china2.src;
    let thrSrc = china3.src;
    let firSrcHover = 'img/food/china1_hover.png';
    let secSrcHover = 'img/food/china2_hover.png';
    let thrSrcHover = 'img/food/china3_hover.png';

    china1.addEventListener('mouseover', () => {
        china1.src = firSrcHover;
    });
    china1.addEventListener('mouseout', () => {
        china1.src = firSrc;
    });

    china2.addEventListener('mouseover', () => {
        china2.src = secSrcHover;
    });
    china2.addEventListener('mouseout', () => {
        china2.src = secSrc;
    });

    china3.addEventListener('mouseover', () => {
        china3.src = thrSrcHover;
    });
    china3.addEventListener('mouseout', () => {
        china3.src = thrSrc;
    });
});

// 이미지 클릭시 sub2 페이지 이동
let china_1 = document.getElementById('china1');
let china_2 = document.getElementById('china2');
let china_3 = document.getElementById('china3');

china_1.addEventListener('click', () => {
    window.location.href = "china_1.html";
});
china_2.addEventListener('click', () => {
    window.location.href = "china_2.html";
});
china_3.addEventListener('click', () => {
    window.location.href = "china_3.html";
});