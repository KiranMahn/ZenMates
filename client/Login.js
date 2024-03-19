import { View, Text, Button, StyleSheet, ButtonText, TextInput } from "react-native";
import { useState, useEffect } from "react";

const EntryScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const [showError, setShowErr] = useState(false);
  const loadData = async () => {
    await fetch(`http://localhost:8082/loginform/${username}/${password}`)
    .then(result => result.json())
    .then(jsonData => {
      console.log("data in requests: ")
      console.log(JSON.stringify(jsonData));
      setData(jsonData);
      setShowErr(false);
      navigation.navigate('Home', {id: jsonData[0]["profileID"]});
    })
    .catch(err => {
      setShowErr(true);
      console.log(err);
    });
  }

  const handleLogin = () => {
    try {
      loadData();
      //console.log(data);
    } catch (e) {
      console.log(err);
    }
  }
  console.log(username);
  const ErrorPage = () => {
    return (
      <View style={{height: '12%', backgroundColor: '#cc0000', borderRadius: '15', padding: 10, margin: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'white'}}>Error</Text>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 600, textAlign: 'center'}}>Incorrect username or password. Please try again</Text>
      </View>
    );
  };

  const LoginPage = () => {
    return (
      <View style={{
        flexDirection: 'col',
        width: '100%',
        justifyContent: 'center',
        height: '100%',
        alignSelf: 'flex-start',
        marginTop: 1,
        }}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize={"none"}
          style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '70%', height: '8%', alignSelf: 'center', fontSize: 20}}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize={"none"}
          style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '70%', height: '8%', alignSelf: 'center', fontSize: 20, marginBottom:  20}}
        />

        <Button
        title="Login"
        //onPress={() => handleLogin()}
        onPress={ () =>{
          navigation.navigate('Home', {id: 1});
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

  };

  return (
    <View>
      {showError && <ErrorPage/>}
      <LoginPage/>
    </View>

  );

}

export default EntryScreen;
