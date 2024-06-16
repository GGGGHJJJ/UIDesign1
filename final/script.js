document.getElementById('lever').addEventListener('click', function() {
    // Rotate the lever by 25 degrees
    this.style.transform = 'rotate(25deg)';

    // Display the slot video
    const slotVideo = document.getElementById('slot');
    slotVideo.style.display = 'block';
    slotVideo.play();  // Ensure the video plays when displayed

    // Listen for when the video ends
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

document.getElementById('searchButton').addEventListener('click', function() {
    const selectedWesternFood = document.getElementById('ball_westernfood').classList.contains('clicked');
    const selectedKoreanFood = document.getElementById('ball_koreanfood').classList.contains('clicked');
    const selectedAtmosphere = document.getElementById('ball_atmosphere').classList.contains('clicked');
    const selectedDrinking = document.getElementById('ball_drinking').classList.contains('clicked');
    const selected10000 = document.getElementById('ball_10000').classList.contains('clicked');
    const selected15000 = document.getElementById('ball_15000').classList.contains('clicked');

    // Determine the selected combination and redirect to the appropriate page
    if (selectedWesternFood && selectedAtmosphere && selected10000) {
        window.location.href = 'western_food_atmosphere_10000.html';
    } else if (selectedWesternFood && selectedAtmosphere && selected15000) {
        window.location.href = 'western_food_atmosphere_15000.html';
    } else if (selectedWesternFood && selectedDrinking && selected10000) {
        window.location.href = 'western_food_drinking_10000.html';
    } else if (selectedWesternFood && selectedDrinking && selected15000) {
        window.location.href = 'western_food_drinking_15000.html';
    } else if (selectedKoreanFood && selectedAtmosphere && selected10000) {
        window.location.href = 'korean_food_atmosphere_10000.html';
    } else if (selectedKoreanFood && selectedAtmosphere && selected15000) {
        window.location.href = 'korean_food_atmosphere_15000.html';
    } else if (selectedKoreanFood && selectedDrinking && selected10000) {
        window.location.href = 'korean_food_drinking_10000.html';
    } else if (selectedKoreanFood && selectedDrinking && selected15000) {
        window.location.href = 'korean_food_drinking_15000.html';
    } else {
        // No combination selected, handle error or redirect to a default page
        alert('Please select a valid combination before searching.');
    }
});


