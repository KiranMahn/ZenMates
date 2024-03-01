import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './NavBar';
import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import MiniMap from './MiniMap';

export default function App() {
  return (
    <View style={styles.container}>
      <GluestackUIProvider config={config}>
        <NavBar/>
        <StatusBar style="auto" />
        <Text style={styles.text}>CS317 Group 10's React Native Mobile App</Text>
        <MiniMap/> 
      </GluestackUIProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    margin: '2em',
    padding: 5,
    textAlign: 'center',
    fontWeight: '100',
    borderRadius: 1,
  },
});
