import { View, Text, Button, StyleSheet, ButtonText, TextInput } from "react-native";
import { useState, useEffect } from "react";
const ErrorPage = ({error}) => {
  return (
    <View style={{height: '12%', backgroundColor: '#cc0000', borderRadius: '15', padding: 10, margin: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center', top: 0}}>
      <Text style={{fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'white'}}>Error</Text>
      <Text style={{color: 'white', fontSize: 15, fontWeight: 600, textAlign: 'center'}}>{error}</Text>
    </View>
  );
};

const EntryScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();
  const [showError, setShowErr] = useState(false);
  const [error, setError] = useState("Incorrect username or password. Please try again");

  const loadData = async () => {
    await fetch(`http://localhost:8082/loginform/${username}/${password}`)
    .then(result => result.json())
    .then(jsonData => {
      console.log("data in requests: ")
      console.log(JSON.stringify(jsonData));
      setData(jsonData);
      setShowErr(false);
      if (jsonData.length > 1) {
        navigation.navigate('Home', {id: jsonData[0]["profileID"]});
      }else {
        setShowErr(true);
      }
    })
    .catch(err => {
      setShowErr(true);
      console.log("err: " + err)
      setError(err.toString());
      console.log(err);
    });
  }

  const handleLogin = () => {
    try {
      loadData();
      //console.log(data);
    } catch (e) {
      console.log(err);
      console.log(e);

    }
  }


  return (
    <View style={{
      flexDirection: 'col',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      alignSelf: 'flex-start',
      marginTop: 1,
      }}>
      {showError && <ErrorPage error={error}/>}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize={"none"}
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
      onPress={() => handleLogin()}
      /*onPress={ () =>{
        navigation.navigate('Home', {id: 0});
      }}*/>
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
