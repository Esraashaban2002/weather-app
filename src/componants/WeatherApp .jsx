import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import './weather.css';

function WeatherApp() {
    const [city, setCity] = useState(''); // State for the city input
    const [weatherData, setWeatherData] = useState(null); // State for current weather data
    const [forecastData, setForecastData] = useState(null); // State for forecast data
    const [error, setError] = useState(null); // State for error messages
    const apiKey = '48b067219cd689496cde55d8079b6752'; // Replace with your actual API key

    // useEffect to fetch weather data whenever city changes
    useEffect(() => {
        if(!city) return;
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                    params: {
                        q: city,
                        appid: apiKey,
                        units: 'metric'
                    }
                });
                setWeatherData(response.data);

                // Fetch the forecast data using the coordinates from the current weather data
                fetchForecastData(response.data.coord.lat, response.data.coord.lon);
                setError(null); // Reset error state on successful fetch
            } catch (error) {
                setError(' invalid city name. Please try again.'); 
                setWeatherData(null);
                setForecastData(null);
            }
        };

        fetchWeatherData();
    }, [city]);

    
    // Function to fetch forecast data using latitude and longitude
    const fetchForecastData = async (lat, lon) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: apiKey,
                    units: 'metric'
                }
            });
            setForecastData(response.data); // Set the forecast data
        } catch (error) {
            console.error('Error fetching forecast data:', error); // Log any errors
        }
    };

    // Handler function for the search bar input
    const handleSearch = (cityName) => {
        setCity(cityName);
    };

    return (
        <div className='weather-app'>
            <h1 className='title'>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {error && <p>{error}</p>} {/* Display error message */}
            {weatherData && <CurrentWeather data={weatherData} city={city.toUpperCase()} />} 
            {forecastData && <Forecast data={forecastData} />} 
        </div>
    );
}

export default WeatherApp;
