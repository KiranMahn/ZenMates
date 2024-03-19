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
  const [duplicateError, setDuplicateError] = useState("no data entered")
  const [showError, setShowErr] = useState(false);
  const [error, setError] = useState("Invalid fields. Please try again");

  const loadData = async () => {
    if (firstName != undefined && lastName != undefined && dob != undefined && gender != undefined && email != undefined && password != undefined && phoneNum != undefined) {
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
        if (jsonData == "1") {
          //show user/email/phone error
          setDuplicateError("username, email, phone number");
          setShowErr(true);
        }else if (jsonData == "2") {
          //show user/email error
          setDuplicateError("username, email");
          setShowErr(true);
        }else if (jsonData == "3") {
          //show email/phone error
          setDuplicateError("email, phone number");
          setShowErr(true);
        }else if (jsonData == "4") {
          //show user/phone error
          setDuplicateError("username, phone number");
          setShowErr(true);
        }else if (jsonData == "5") {
          //show email error
          setDuplicateError("email");
          setShowErr(true);
        }else if (jsonData == "6") {
          //show user error
          setDuplicateError("username");
          setShowErr(true);
        }else if (jsonData == "7") {
          //show phone error
          setDuplicateError("phone number");
          setShowErr(true);
        }else{
          navigation.navigate('Login'); //fix this navigation
        }
      })
      .catch(err => {
        console.log(err);
      });
    }else {
      setShowErr(true);
    }

  }

  const handleSignUp = () => {
    try {
      loadData();
      //console.log(data);
    } catch (e) {
      console.log(err);
    }
  }
  console.log(firstName);
  const ErrorPage = () => {
    return (
      <View style={{height: '12%', backgroundColor: '#cc0000', borderRadius: '15', padding: 10, margin: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center', width: '90%'}}>
        <Text style={{fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'white'}}>Error</Text>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 600, textAlign: 'center'}}>Invalid fields: {duplicateError}. Please try again</Text>
      </View>
    );
  };

  const SignupPage = () => {
    return (
      <View style={{
        flexDirection: 'col',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignSelf: 'flex-start',
        marginTop: '5%',
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

  };


  return (
    <View>
      {showError && <ErrorPage/>}
      <SignupPage/>
    </View>
  );

}

export default EntryScreen;
