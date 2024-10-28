
const snowflakeContainer = document.getElementById('snowflakeContainer');

// Tạo hiệu ứng hoa rơi với số lượng ít và ngẫu nhiên
function createSnowflake() {
  const snowflake = document.createElement('p');
  snowflake.className = 'snowflake';
  snowflake.textContent = '🌸';

  // Vị trí và kích thước ngẫu nhiên
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = 10 + Math.random() * 20 + 'px';

  // Tốc độ và thời gian rơi
  snowflake.style.animationDuration = 10 + Math.random() * 15 + 's';
  snowflake.style.animationDelay = Math.random() * 5 + 's';
  snowflakeContainer.appendChild(snowflake);

  // Xóa hoa khi rơi xong để tạo lại hiệu ứng
  snowflake.addEventListener('animationend', () => {
    snowflakeContainer.removeChild(snowflake);
    createSnowflake(); // Tạo lại hoa rơi
  });
}

// Khởi tạo hiệu ứng với số lượng ít (5 hoa) để tạo cảm giác chill
for (let i = 0; i < 10; i++) {
  createSnowflake();
}