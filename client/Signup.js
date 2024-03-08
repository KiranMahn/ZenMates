import { View, Text, Button, StyleSheet, ButtonText, TextInput } from "react-native";
import { useState } from "react";
const EntryScreen = ({navigation}) => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [phoneNum, setPhoneNum] = useState()

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
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Phone #"
        value={phoneNum}
        onChangeText={setPhoneNum}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Re-enter password"
        value={password}
        onChangeText={setPassword}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      
      <Button
      title="Sign up"
      onPress={() => {
        navigation.navigate('Home', {name: 'John'})
      }}>
      </Button>
      
    </View>
  );
    
}

export default EntryScreen;