import { Barometer, Brightness } from "expo-sensors";

const SensorService = {
  altitude: null,
  brightness: null,
  barometerSubscription: null,
  brightnessSubscription: null,

  start: () => {
    // Subscribe to barometer updates
    SensorService.barometerSubscription = Barometer.addListener(
      ({ pressure }) => {
        const seaLevelPressure = 1013.25; // Standard atmospheric pressure at sea level in hPa
        const pascalsPerMeter = 12.01; // Approximate conversion factor from hPa to meters
        SensorService.altitude =
          (1 - Math.pow(pressure / seaLevelPressure, 0.190284)) * 44330;
      }
    );

    // Subscribe to brightness updates
    SensorService.brightnessSubscription = Brightness.addListener(
      ({ brightness }) => {
        SensorService.brightness = brightness;
      }
    );
  },

  stop: () => {
    // Remove subscriptions
    SensorService.barometerSubscription &&
      SensorService.barometerSubscription.remove();
    SensorService.brightnessSubscription &&
      SensorService.brightnessSubscription.remove();
  },

  getAltitude: () => SensorService.altitude,

  getBrightness: () => SensorService.brightness,
};

export default SensorService;
