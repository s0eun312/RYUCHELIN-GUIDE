// 배경 슬라이드=========================================!!
// 이미지 배열 정리
const images = [
    "../img/index/bg1.png",
    "../img/index/bg2.png",
    "../img/index/bg3.png",
    "../img/index/bg4.png",
    "../img/index/bg5.png"
];

let currentIndex = 0;
let main = document.querySelector('main');

const mainElement = main;

function changeBackgroundImage() {
    // 메인 배경 이미지 배열의 현재 인덱스에 해당하는 이미지로 설정
    mainElement.style.backgroundImage = `url(${images[currentIndex]})`;
    // 이미지 배열 순환(다시 bg1부터 bg5까지)
    currentIndex = (currentIndex + 1) % images.length;
}

// 처음 이미지를 설정하고 5초마다 변경
changeBackgroundImage();
setInterval(changeBackgroundImage, 2000);

// nav 메뉴 슬라이드=========================================!!

let btn = document.querySelector('.button button');
let nav = document.querySelector('.button');
let isMenuOpen = false;

btn.addEventListener('click', (section, index) => {
    // 섹션 배열 정리
    const sections = document.querySelectorAll('.menu section');

    sections.forEach((section, index) => {
        setTimeout(() => {
            if (isMenuOpen) {
                // 슬라이드 인
                section.style.left = '-100%';
                section.style.opacity = '0';
                nav.classList.remove('leftSlide');
            } else {
                // 슬라이드 아웃
                section.style.left = '0';
                section.style.opacity = '1';
                nav.classList.add('leftSlide');
            }
        }, index * 150); // 각 섹션끼리 .15초 간격주기
    });

    // 메뉴 상태 토글
    isMenuOpen = !isMenuOpen;
});