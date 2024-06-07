let korea = document.getElementById('korea');
let china = document.getElementById('china');
let japan = document.getElementById('japan');
let etc = document.getElementById('etc');

korea.addEventListener('click', () => {
    // changePage("korea.html");
    window.location.href = "korea.html";
});
china.addEventListener('click', () => {
    // changePage("china.html");
    window.location.href = "china.html";
});
japan.addEventListener('click', () => {
    // changePage("japan.html");
    window.location.href = "japan.html";
});
etc.addEventListener('click', () => {
    // changePage("etc.html");
    window.location.href = "etc.html";
});

// changePage 효과 사용 X
function changePage(page) {
    document.body.classList.add("fadeOut"); // 페이지 fadeOut 애니메이션 클래스 추가
    setTimeout(function() {
        window.location.href = page; // 페이지 변경
    }, 100); // n초 후에 페이지 변경
}