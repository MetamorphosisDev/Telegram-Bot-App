const mapsView = require("../utils/weather/weatherMap");

async function getWeather(telegramClient, callback, match) {
    const chatId = callback.chat.id;
    const cityName = match[1];

    // Pastikan proses env dibaca dengan benar
    const WEATHER_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_KEY}&units=metric&lang=id`;

    try {
        const response = await fetch(WEATHER_ENDPOINT);

        if (!response.ok) {
            return telegramClient.sendMessage(chatId, "❌ Kota tidak ditemukan.");
        }

        const weatherData = await response.json();

        const pesanWeather = `📍 *Lokasi & Kondisi*
Kota                     : ㅤ${weatherData.name}, ${weatherData.sys.country}
Cuaca                  : ㅤ${weatherData.weather[0].description}
Awan                   : ㅤ${weatherData.clouds.all}%
Jarak Pandang  : ㅤ${weatherData.visibility / 1000} Km

🌡 *Informasi Suhu*
Suhu                    : ㅤ${weatherData.main.temp}°C
Terasa                 : ㅤ${weatherData.main.feels_like}°C
Suhu Min/Max   : ㅤ${weatherData.main.temp_min}°C / ${weatherData.main.temp_max}°C
Kelembapan       : ㅤ${weatherData.main.humidity}%
Tekanan              : ㅤ${weatherData.main.pressure} hPa

💨 *Informasi Angin*
Angin                   : ㅤ${weatherData.wind.speed} m/s
Arah Angin         : ㅤ${weatherData.wind.deg}°

🌅 *Matahari (Waktu Lokal)*
Terbit                  : ㅤ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
Terbenam           : ㅤ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`;

        await telegramClient.sendPhoto(
            chatId,
            mapsView(weatherData.coord.lon, weatherData.coord.lat),
            {
                caption: pesanWeather,
                parse_mode: 'Markdown'
            }
        );

    } catch (error) {
        console.error("Weather Error:", error);
        telegramClient.sendMessage(chatId, "⚠️ Terjadi kesalahan saat mengambil data cuaca.");
    }
}

// Export function
module.exports = { getWeather };