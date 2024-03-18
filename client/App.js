import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import registerNNPushToken from "native-notify";
import {HomeScreen} from './HomeScreen';
import ProfileScreen from "./ProfileScreen";
import GuideScreen from "./GuideScreen";
import Chat from "./ChatScreen";
import CreatePost from './CreatePost';
import ArticleDetails from './ArticleDetails';
import Login from './Login';
import Signup from './Signup';
import DiscussionBoard from './DiscussionBoard';
import WeatherScreen from "./WeatherScreen";
import NotificationHistory from "./NotificationHistoryScreen";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
    Notifications.addNotificationReceivedListener(handleNotification);
    /* return () => {
      Notifications.removeNotificationReceivedListener(handleNotification);
    }; */
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };

  const handleNotification = (notification) => {
    console.log(notification);
    // Handle received notification here
  };

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Notifications")}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons name="notifications" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="GuideScreen" component={GuideScreen} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
          <Stack.Screen name="Notifications" component={NotificationHistory} />
          <Stack.Screen
            name="ArticleDetails"
            component={ArticleDetails}
            initialParams={{ itemId: 0 }}
          />
          <Stack.Screen
            name="DiscussionBoard"
            component={DiscussionBoard}
            initialParams={{ itemId: 0 }}
          />
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
