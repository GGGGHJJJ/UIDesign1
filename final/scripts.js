document.addEventListener('DOMContentLoaded', function() {
    // 서치 버튼 클릭 이벤트 처리
    document.getElementById('searchButton').addEventListener('click', function() {
        // 결과 아이템을 보여줌
        showResults();

        // 페이지 최하단까지 부드럽게 스크롤
        smoothScrollTo(document.body.scrollHeight, 1500); // 2초 동안 스크롤
    });

    // 결과 아이템을 보여주는 함수
    function showResults() {
        const selectedWesternFood = document.getElementById('ball_westernfood').classList.contains('clicked');
        const selectedKoreanFood = document.getElementById('ball_koreanfood').classList.contains('clicked');
        const selectedAtmosphere = document.getElementById('ball_atmosphere').classList.contains('clicked');
        const selectedDrinking = document.getElementById('ball_drinking').classList.contains('clicked');
        const selected10000 = document.getElementById('ball_10000').classList.contains('clicked');
        const selected15000 = document.getElementById('ball_15000').classList.contains('clicked');

        // 모든 결과 아이템을 숨김
        document.querySelectorAll('.result-item').forEach(function(item) {
            item.style.display = 'none'; // 숨길 때는 .hidden 클래스를 사용하지 않고 style.display = 'none'을 사용합니다.
        });

        // 선택된 옵션에 따라 결과 아이템을 보여줌
        if (selectedWesternFood && selectedAtmosphere && selected10000) {
            document.querySelector('.western-food-atmosphere-10000').style.display = 'block';
        } else if (selectedWesternFood && selectedAtmosphere && selected15000) {
            document.querySelector('.western-food-atmosphere-15000').style.display = 'block';
        } else if (selectedWesternFood && selectedDrinking && selected10000) {
            document.querySelector('.western-food-drinking-10000').style.display = 'block';
        } else if (selectedWesternFood && selectedDrinking && selected15000) {
            document.querySelector('.western-food-drinking-15000').style.display = 'block';
        } else if (selectedKoreanFood && selectedAtmosphere && selected10000) {
            document.querySelector('.korean-food-atmosphere-10000').style.display = 'block';
        } else if (selectedKoreanFood && selectedAtmosphere && selected15000) {
            document.querySelector('.korean-food-atmosphere-15000').style.display = 'block';
        } else if (selectedKoreanFood && selectedDrinking && selected10000) {
            document.querySelector('.korean-food-drinking-10000').style.display = 'block';
        } else if (selectedKoreanFood && selectedDrinking && selected15000) {
            document.querySelector('.korean-food-drinking-15000').style.display = 'block';
        } else {
            // 아무 조건도 만족하지 않을 경우 처리
            console.log('선택된 조합에 대한 결과가 없습니다.');
        }
    }

    // 레버 클릭 이벤트 처리
    document.getElementById('lever').addEventListener('click', function() {
        // Rotate the lever by 25 degrees
        this.style.transform = 'rotate(25deg)';

        // Display the slot video
        const slotVideo = document.getElementById('slot');
        slotVideo.style.display = 'block';
        slotVideo.play();  // 비디오 재생

        // 비디오 재생 종료 시 이벤트 처리
        slotVideo.addEventListener('ended', function() {
            // Show the search button after the video has ended
            const searchButton = document.getElementById('searchButton');
            searchButton.style.display = 'block';
        });
    });

    // 각 ball 클래스를 가진 버튼에 대한 클릭 이벤트 리스너 추가
    document.querySelectorAll('.ball_westernfood, .ball_koreanfood, .ball_atmosphere, .ball_drinking, .ball_10000, .ball_15000').forEach(function(ball) {
        ball.addEventListener('click', function() {
            // 클릭된 버튼에 clicked 클래스를 추가하여 클릭 여부를 나타냄
            this.classList.toggle('clicked');
        });
    });

    // 부드럽게 스크롤하는 함수
    function smoothScrollTo(target, duration) {
        const start = window.scrollY;
        const distance = target - start;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInCubic(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInCubic(t, b, c, d) {
            t /= d;
            return c * t * t * t + b;
        }

        requestAnimationFrame(animation);
    }
});
