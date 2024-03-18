import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationsHistoryScreen = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from AsyncStorage when the component mounts
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            // Retrieve notifications from AsyncStorage
            const storedNotifications = await AsyncStorage.getItem("notifications");
            const parsedNotifications = storedNotifications
                ? JSON.parse(storedNotifications)
                : [];
            console.log("Fetched notifications:", parsedNotifications);
            setNotifications(parsedNotifications);
        } catch (error) {
            console.error("Error fetching notifications from AsyncStorage:", error);
        }
    };

    // Render each notification item
    const renderNotificationItem = ({ item }) => (
        <View style={styles.notificationItem}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications History</Text>
            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    notificationItem: {
        marginBottom: 20,
    },
});

export default NotificationsHistoryScreen;