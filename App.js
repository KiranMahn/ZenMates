import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './NavBar';
import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import ProfileScreen from "./ProfileScreen";
import GuideScreen from "./GuideScreen";
import Chat from "./ChatScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
              {/* HomeScreen */}
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
              {/* Profile */}
              <Stack.Screen 
                name="Profile" 
                component={ProfileScreen} 
              />
              {/* Guide */}
               <Stack.Screen 
                name="GuideScreen" 
                component={GuideScreen} 
              />
              {/* Chat */}
              <Stack.Screen 
                name="Chat" 
                component={Chat} 
              />

        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    
  );
}

