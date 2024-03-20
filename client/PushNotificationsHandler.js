import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PushNotificationHandler = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
    Notifications.addNotificationReceivedListener(handleNotification);
  }, []);

  const registerForPushNotificationsAsync = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to receive push notifications denied!");
        return;
      }

      // Construct the experienceId using the owner and slug from Constants.manifest
      const experienceId = `${Constants.manifest.owner}/${Constants.manifest.slug}`;

      // Call getExpoPushTokenAsync with the constructed experienceId
      const token = await Notifications.getExpoPushTokenAsync({ experienceId });
      console.log(token);
    } catch (error) {
      console.error("Error registering for push notifications:", error);
    }
  };

  const handleNotification = async (notification) => {
    try {
      // Save the notification to AsyncStorage
      const storedNotifications = await AsyncStorage.getItem("notifications");
      const parsedNotifications = storedNotifications
        ? JSON.parse(storedNotifications)
        : [];
      const updatedNotifications = [...parsedNotifications, notification];
      await AsyncStorage.setItem(
        "notifications",
        JSON.stringify(updatedNotifications)
      );
    } catch (error) {
      console.error("Error saving notification to AsyncStorage:", error);
    }
  };

  return null; // This component does not render anything
};

export default PushNotificationHandler;