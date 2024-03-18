import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const Sensor_PushNotifications = {
  registerForPushNotifications: async () => {
    // Check for existing permissions
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;

    // If no existing permissions, ask the user for permission
    if (status !== "granted") {
      const { status: askStatus } = await Permissions.askAsync(
        Permissions.NOTIFICATIONS
      );
      finalStatus = askStatus;
    }

    // If permission granted, get the device's push token
    if (finalStatus === "granted") {
      const token = await Notifications.getExpoPushTokenAsync();
      console.log("Push token:", token);
      return token;
    } else {
      console.log("Permission to receive push notifications denied");
      return null;
    }
  },

  scheduleNotification: async (title, body, data, trigger) => {
    // Schedule a local notification
    return await Notifications.scheduleLocalNotificationAsync(
      {
        title: title,
        body: body,
        data: data,
        sound: true,
      },
      { ...trigger }
    );
  },

  cancelScheduledNotification: async (notificationId) => {
    // Cancel a scheduled local notification
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  },
};

export default Sensor_PushNotifications;
