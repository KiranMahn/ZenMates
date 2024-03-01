import NavBar from "./NavBar";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <NavBar/>
            <Text style={styles.text}>CS317 Group 10s React Native Mobile App</Text>
            <Button
                title="My Profile"
                onPress={() => {
                    navigation.navigate('Profile', {name: 'John'})
                }}
            />
        </View>
    );
}

const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

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

  export {HomeScreen, ProfileScreen};
