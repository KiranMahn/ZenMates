import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PushNotificationHandler = () => {
    useEffect(() => {
        registerForPushNotificationsAsync();
        Notifications.addNotificationReceivedListener(handleNotification);
    }, []);

    const registerForPushNotificationsAsync = async () => {
        const settings = await Notifications.getPermissionsAsync();
        if (!settings.granted && !settings.canAskAgain) {
            alert("Permission to receive push notifications denied!");
            return;
        }

        if (!settings.granted) {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to receive push notifications denied!");
                return;
            }
        }

        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    };

    const handleNotification = async (notification) => {
        console.log(notification);
        await saveNotification(notification);
    };

    const saveNotification = async (notification) => {
        const existingNotifications = await AsyncStorage.getItem('notifications');
        let notifications = existingNotifications ? JSON.parse(existingNotifications) : [];
        notifications.push(notification);
        await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
    };

    return null;
};

export default PushNotificationHandler;
