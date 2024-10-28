const snowflakeContainer = document.getElementById('snowflakeContainer');

// Tạo hiệu ứng hoa rơi với số lượng ít và ngẫu nhiên
function createSnowflake() {
  const snowflake = document.createElement('p');
  snowflake.className = 'snowflake';
  snowflake.textContent = '🌸';

  // Vị trí và kích thước ngẫu nhiên
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = 15 + Math.random() * 20 + 'px';

  // Thời gian và tốc độ rơi ngẫu nhiên
  snowflake.style.animationDuration = 15 + Math.random() * 10 + 's';
  snowflake.style.animationDelay = Math.random() * 5 + 's';

  snowflakeContainer.appendChild(snowflake);

  // Xóa hoa khi rơi xong và tạo lại hoa mới để duy trì hiệu ứng
  snowflake.addEventListener('animationend', () => {
    snowflakeContainer.removeChild(snowflake);
    createSnowflake();
  });
}

// Khởi tạo hiệu ứng với số lượng ít (10 hoa) để tạo cảm giác chill
for (let i = 0; i < 10; i++) {
  createSnowflake();
}
