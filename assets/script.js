
//------------------------------------
// adds a darkmode class to the body
//------------------------------------
document.querySelector('#darkmode').addEventListener('click', function() {
	document.getElementsByTagName('body')[0].classList.toggle('dark');
});

// JavaScript (assets/script.js)

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star.large");
    const body = document.body;

    // 마우스를 가져다 대면 애니메이션 멈춤 및 배경색 변경
    stars.forEach(star => {
        star.addEventListener("mouseenter", function() {
            star.style.animationPlayState = "paused";
            star.style.backgroundColor = "yellow";
        });

        star.addEventListener("mouseleave", function() {
            star.style.animationPlayState = "running";
            star.style.backgroundColor = "white";
        });
    });
});

function updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    const timeButton = document.getElementById('time-button');
    timeButton.textContent = currentTime;
}

updateCurrentTime(); // 페이지 로드 시 한 번 호출하여 초기 시각 표시

setInterval(updateCurrentTime, 1000); // 1초마다 현재 시각 업데이트