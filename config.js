// Create a config.js file (add to .gitignore)
const API_KEYS = {
    WEATHER: 'your_openweather_key',
    NEWS: 'your_newsapi_key'
};

// In your contact.js
const response = await fetch(`https://api.openweathermap.org/...&appid=${API_KEYS.WEATHER}`);