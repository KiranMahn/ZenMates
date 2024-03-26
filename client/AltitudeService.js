import { Alert } from "react-native";
import * as Location from "expo-location";

const AltitudeService = {
  // Function to fetch altitude data from the device's GPS
  fetchAltitudeData: async () => {
    try {
      // Request permission to access the device's location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Location permission is required to fetch altitude data."
        );
        return null;
      }

      // Get the device's current location
      let location = await Location.getCurrentPositionAsync({});
      if (location.coords.altitude === undefined) {
        Alert.alert(
          "Altitude data unavailable",
          "Altitude data is not available for the current location."
        );
        return null;
      }

      // Return the altitude data
      return location.coords.altitude;
    } catch (error) {
      console.error("Error fetching altitude data:", error);
      Alert.alert("Error", "An error occurred while fetching altitude data.");
      return null;
    }
  },
  processAltitudeData: async () => {
    try {
      // Fetch altitude data
      const altitude = await AltitudeService.fetchAltitudeData();
      if (altitude === null) {
        // Altitude data unavailable or permission denied
        return false;
      }

      // Check if altitude exceeds 2000 meters
      const threshold = 2000; // Example threshold in meters
      if (altitude > threshold) {
        // Altitude exceeds threshold, send notification
        return true;
      }

      // Altitude below threshold, no notification needed
      return false;
    } catch (error) {
      console.error("Error processing altitude data:", error);
      Alert.alert("Error", "An error occurred while processing altitude data.");
      return false;
    }
  },

  // Function to process altitude data and determine when to send push notifications
};

export default AltitudeService;
