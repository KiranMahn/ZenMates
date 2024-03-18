import axios from "axios";

const WEATHER_API_KEY = "9bbb5f5f4cd9531c9f1156d241d42dc4"; // fetch from open weather map. sign up and then go to api keys. copy the key and paste it here.
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data by city name
export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// Function to fetch weather data by coordinates (latitude and longitude)
export const fetchWeatherByCoordinates = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
