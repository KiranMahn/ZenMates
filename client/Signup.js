import { View, Text, Button, StyleSheet, ButtonText, TextInput } from "react-native";
import { useState } from "react";
const EntryScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dob, setDOB] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [phoneNum, setPhoneNum] = useState()
  const [gender, setGender] = useState()
  const [data, setData] = useState()
  const [duplicateError, setDuplicateError] = useState()


  const loadData = async () => {
    await fetch(`http://localhost:8082/signup/${firstName}/${lastName}/${dob}/${gender}/${username}/${email}/${password}/${phoneNum}/`)
    .then(result => result.json())
    .then(jsonData => {
      console.log("data in requests: ")
      console.log(JSON.stringify(jsonData));
      let returnData = JSON.stringify(jsonData);
      /*
      if data = username / email / phone etc, show error on signup page
      server handles duplicates and returns either, success or an error based on what is duplicated
      */
      console.log(returnData);
      if (returnData == "1") {
        //show user/email/phone error
        setDuplicateError("User, email, phone");
      }else if (returnData == "2") {
        //show user/email error
        setDuplicateError("User, email");
      }else if (returnData == "3") {
        //show email/phone error
        setDuplicateError("phone, email");
      }else if (returnData == "4") {
        //show user/phone error
        setDuplicateError("User, phone");
      }else if (returnData == "5") {
        //show email error
        setDuplicateError("email");
      }else if (returnData == "6") {
        //show user error
        setDuplicateError("User");
      }else if (returnData == "7") {
        //show phone error
        setDuplicateError("phone");
      }else{
        navigation.navigate('Login'); //fix this navigation
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  const handleSignUp = () => {
    try {
      loadData();
      //console.log(data);
    } catch (e) {
      console.log(err);
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
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Date of Birth (dd-mm-yyyy)"
        value={dob}
        onChangeText={setDOB}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Phone #"
        value={phoneNum}
        onChangeText={setPhoneNum}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize={"none"}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
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
        autoCapitalize={"none"}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Re-enter password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize={"none"}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
      />

      <Button
      title="Sign up"
      onPress={() => {
        handleSignUp();
      }}>
      </Button>

    </View>
  );

}

export default EntryScreen;
