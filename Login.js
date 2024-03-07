import { View, Text, Button, StyleSheet, ButtonText, TextInput } from "react-native";
import { useState } from "react";
const EntryScreen = ({navigation}) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <View style={{
      flexDirection: 'col',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      alignSelf: 'flex-start',
      marginTop: 1,
      }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      
      <Button
      title="Login"
      onPress={() => {
        navigation.navigate('Home', {name: 'John'})
      }}>
      </Button>
      
      <Button
      title="Don't have an account? Signup here"
      onPress={() => {
        navigation.navigate('Signup')
      }}
      >
      </Button>
    </View>
  );
    
}

export default EntryScreen;