import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, TextInput, Text, Pressable} from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
const supportedURL = 'https://wa.me/447484823438?text=I%27m%20interested%20in%20your%20car%20for%20sale';

const unsupportedURL = 'slack://open?team=123456';

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

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState('');

  const promptPressed = () => {
    
  }
  
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 20, 
      }}
      >Sending a message to: Kiran</Text>
      <Text>Choose a prompt: </Text>
      <View>
        <TouchableOpacity
          onPress={() => setSelected(!selected)}
          style={[{ backgroundColor: selected ? "dodgerblue" : "white"}, styles.btn]}
        >
          <Text>Helo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(!selected)}
          style={[{ backgroundColor: selected ? "dodgerblue" : "white"}, styles.btn]}
        >
          <Text>How are you?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.style.backgroundColor = 'red'}
          style={[{ backgroundColor: selected ? "dodgerblue" : "white"}, styles.btn]}
        >
          <Text>Thinking of you today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(!selected)}
          style={[{ backgroundColor: selected ? "dodgerblue" : "white"}, styles.btn]}
        >
          <Text>I hope you have an amazing day, you deserve it!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(!selected)}
          style={[{ backgroundColor: selected ? "dodgerblue" : "white"}, styles.btn]}
        >
          <Text>Sending you peace and joy on your journey today</Text>
        </TouchableOpacity>
      </View>
      
      <Text>Or type your own: </Text>
      <TextInput
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
        style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%',}}
      />
      <OpenURLButton url={supportedURL}>Send in Whatsapp</OpenURLButton>
    </View>
  );
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