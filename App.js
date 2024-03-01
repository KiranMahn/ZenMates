import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './NavBar';
import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen, ProfileScreen} from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    
  );
}

