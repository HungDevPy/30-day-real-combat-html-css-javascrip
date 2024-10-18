const search = document.querySelector('.search-input');
const city = document.querySelector('.city');
const day = document.querySelector('.day');
const max = document.querySelector('.max p');
const min = document.querySelector('.min p');
const humidity = document.querySelector('.humadity p'); // Sửa chính tả nếu cần
const cloudy = document.querySelector('.cloudy p');
const wind = document.querySelector('.wind p');
const temp = document.querySelector('.information h2');
const btn = document.querySelector('button');

btn.addEventListener('click', changeWeatherUi);


async function changeWeatherUi() {
    const value = search.value.trim(); // Lấy giá trị từ input

    // Kiểm tra xem người dùng có nhập gì không
    if (!value) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        const formatDateTime = () => {
            const now = new Date();
        
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
        
        
            const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
            const day = now.getDate();
            const month = now.toLocaleDateString('en-US', { month: 'short' });
            const year = now.getFullYear().toString().slice(-2); 
        
            return `${hours}:${minutes} - ${weekday}, ${day} ${month} '${year}`;
        };
        
        day.textContent = formatDateTime();

        // Xử lý lỗi từ API (ví dụ: thành phố không tồn tại)
        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        // Cập nhật giao diện với dữ liệu thời tiết
        city.innerText = data.name;
        day.textContent = formatDateTime();
        max.innerText = `${data.main.temp_max}°`;
        min.innerText = `${data.main.temp_min}°`;
        humidity.innerText = `${data.main.humidity}%`;
        cloudy.innerText = `${data.clouds.all}%`;
        wind.innerText = `${data.wind.speed} Km/h`;
        temp.innerText = `${data.main.temp}°`;

        const lat = data.coord.lat;
        const lon = data.coord.lon;
        const url2 = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=d78fd1588e1b7c0c2813576ba183a667`;
        const res2 = await fetch(url2);
        const forecastData = await res2.json();

        // Xử lý và hiển thị dữ liệu dự báo nếu cần
        console.log(forecastData);

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
} 
// Gọi hàm khi nhấn Enter (ngoài nút bấm)
search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        changeWeatherUi();
    }
});
