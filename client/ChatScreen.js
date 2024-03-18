import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, TextInput, Text, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';
import ChooseContact from './ChooseContact';
const supportedURL = 'https://wa.me/447484823438?text=I%27m%20interested%20in%20your%20car%20for%20sale';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const ChatScreen = ({navigation, route}) => {
  

  let user = route.params.user;

  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState('');
  const [supportedURL, setSupportedURL] = useState('');
  const [contact, setContact] = useState('Choose a contact');
  const [chooseContact, setChooseContact] = useState(false);
  const promptPressed = () => {
    
  }

  const useMessage = (mess) => {
    setSelected(mess);
    setMessage(mess);
    setSupportedURL("https://wa.me/447484823438?text=" + encodeURIComponent(mess));
  }


  if(chooseContact) {
    return(
      <ChooseContact></ChooseContact>

    );

  } else{
    return (
      <View style={styles.container}>
        <View>
          <Text style={{
            fontSize: 20, 
          }}
          >Sending a message to: </Text>
          <TouchableOpacity style={{alignSelf: 'center', backgroundColor: 'lightblue', padding: 10, borderRadius: 15, margin: 10}}>
            <Text
            onPress={() => {navigation.navigate('ChooseContact'), {setContact: setContact}}}
            >{contact}</Text>
          </TouchableOpacity>
        </View>
        
        <Text>Choose a prompt: </Text>
        <View>
          <TouchableOpacity
            onPress={() => useMessage("Hello")}
            style={[{ backgroundColor: (selected == "Hello") ? "dodgerblue" : "white"}, styles.btn]}
          >
            <Text>Hello!</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => useMessage("How are you?")}
            style={[{ backgroundColor: (selected == "How are you?") ? "dodgerblue" : "white"}, styles.btn]}
          >
            <Text>How are you?</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => useMessage("Thinking of you today")}
            style={[{ backgroundColor: (selected == "Thinking of you today") ? "dodgerblue" : "white"}, styles.btn]}
          >
            <Text>Thinking of you today</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => useMessage("I hope you have an amazing day, you deserve it!")}
            style={[{ backgroundColor: (selected == "I hope you have an amazing day, you deserve it!") ? "dodgerblue" : "white"}, styles.btn]}
          >
            <Text>I hope you have an amazing day, you deserve it!</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => useMessage("Sending you peace and joy on your journey today")}
            style={[{ backgroundColor: (selected == "Sending you peace and joy on your journey today") ? "dodgerblue" : "white"}, styles.btn]}
          >
            <Text>Sending you peace and joy on your journey today</Text>
          </TouchableOpacity>
  
        </View>
        
        <Text>Or type your own: </Text>
        <TextInput
          placeholder="Enter your message"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '80%', height: '10%'}}
        />
        <OpenURLButton url={supportedURL}>Send in Whatsapp</OpenURLButton>
      </View>
    );

  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    padding: 10, borderRadius: 15, margin: 10, width: '50%', alignItems: 'center'
  }
});

export default ChatScreen;