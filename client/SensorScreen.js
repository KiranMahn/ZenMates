//install expo-sensors package
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Barometer, Brightness } from "expo-sensors";

const SensorScreen = () => {
  const [altitude, setAltitude] = useState(null);
  const [brightness, setBrightness] = useState(null);

  useEffect(() => {
    // Subscribe to barometer updates
    const barometerSubscription = Barometer.addListener(({ pressure }) => {
      // Assuming constant temperature for simplicity
      const seaLevelPressure = 1013.25; // Standard atmospheric pressure at sea level in hPa
      const pascalsPerMeter = 12.01; // Approximate conversion factor from hPa to meters
      const calculatedAltitude =
        (1 - Math.pow(pressure / seaLevelPressure, 0.190284)) * 44330;
      setAltitude(calculatedAltitude.toFixed(2)); // Round to 2 decimal places
    });

    // Subscribe to brightness updates
    const brightnessSubscription = Brightness.addListener(({ brightness }) => {
      setBrightness(brightness);
    });

    // Cleanup subscriptions
    return () => {
      barometerSubscription.remove();
      brightnessSubscription.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`Altitude: ${altitude || "Calculating..."}`}</Text>
      <Text>{`Brightness: ${
        brightness !== null ? brightness.toFixed(2) : "Calculating..."
      }`}</Text>
    </View>
  );
};

export default SensorScreen;
