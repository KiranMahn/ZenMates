import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { fetchWeatherByCoordinates } from "./WeatherService";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AltitudeService from "./AltitudeService";

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [unitSystem, setUnitSystem] = useState("metric");
  const [altitude, setAltitude] = useState(null);

  useEffect(() => {
    fetchWeatherBasedOnLocation();
  }, []);

  const fetchWeatherBasedOnLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude, altitude: currentAltitude } = location.coords;
      setAltitude(currentAltitude);
      const data = await fetchWeatherByCoordinates(latitude, longitude);
      setWeatherData(data);
      setLoading(false);

      // Check weather conditions and send notifications
      sendNotifications(data);

      // Check altitude
      checkAltitude();
    } catch (error) {
      console.error("Error fetching weather based on location:", error);
    }
  };

  const sendNotifications = (data) => {
    // Check temperature
    if (data.main.temp > 11) {
      sendNotification("Temperature Alert", "Temperature is above 11°C");
    }

    // Check for rain
    if (data.weather[0].main === "Rain") {
      sendNotification("Weather Alert", "It's going to rain");
    }

    // Check for windy conditions
    if (data.wind.speed > 10) {
      sendNotification("Weather Alert", "It's windy outside");
    }
  };

  const checkAltitude = async () => {
    const shouldNotify = await AltitudeService.processAltitudeData();
    if (shouldNotify) {
      sendNotification("Altitude Alert", "Altitude is above 200 meters");
    }
  };

  const sendNotification = async (title, body) => {
    const notificationContent = { title, body };

    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: null, // Send immediately
    });

    // Store in AsyncStorage
    try {
      const existingNotifications = await AsyncStorage.getItem("notifications");
      const notifications = existingNotifications
        ? JSON.parse(existingNotifications)
        : [];
      notifications.push(notificationContent);
      await AsyncStorage.setItem(
        "notifications",
        JSON.stringify(notifications)
      );
    } catch (error) {
      console.error("Error saving notification to AsyncStorage:", error);
    }
  };

  // Function to convert temperature from Kelvin to Celsius or Fahrenheit
  const convertTemperature = (temperature, toUnit) => {
    let convertedTemp = temperature;
    if (toUnit === "metric") {
      convertedTemp = temperature - 273.15; // Convert from Kelvin to Celsius
    } else if (toUnit === "imperial") {
      convertedTemp = ((temperature - 273.15) * 9) / 5 + 32; // Convert from Kelvin to Fahrenheit
    }
    return Math.round(convertedTemp);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.city}>{weatherData.name}</Text>
          <View style={styles.weatherContainer}>
            <Image
              source={{
                uri: https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png,
              }}
              style={styles.weatherIcon}
            />
            <Text style={styles.temperature}>
              {convertTemperature(weatherData.main.temp, unitSystem)}°
            </Text>
          </View>
          <Text style={styles.weather}>{weatherData.weather[0].main}</Text>
          <Text style={styles.description}>
            {weatherData.weather[0].description}
          </Text>
          <Text style={styles.details}>
            Pressure: {weatherData.main.pressure} hPa
          </Text>
          <Text style={styles.details}>
            Humidity: {weatherData.main.humidity}%
          </Text>
          <Text style={styles.details}>Wind: {weatherData.wind.speed} m/s</Text>
          <Text style={styles.details}>Altitude: {altitude ? ${altitude.toFixed(2)} meters : 'N/A'}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Light gray background
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  weatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  temperature: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  weather: {
    fontSize: 20,
    marginBottom: 5,
    color: "#666",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },

  details: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
});

export default WeatherScreen;
