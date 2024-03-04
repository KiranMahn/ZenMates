

import React, { useState } from 'react';
import { View, TextInput, Button, Platform } from 'react-native';
import SendIntent from 'react-native-send-intent';

const ChatScreen = ({navigation, route}) => {
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = () => {
    const phoneNumber = '1234567890'; // Replace with the recipient's phone number
    const text = encodeURIComponent(message);

    // Construct the WhatsApp intent
    const intent = `whatsapp://send?phone=${phoneNumber}&text=${text}`;

    SendIntent.openAppWithData({ action: SendIntent.ACTION_VIEW, data: intent })
      .then(isOpened => {
        if (isOpened) {
          console.log('WhatsApp opened successfully on iOS');
        } else {
          console.log('WhatsApp not installed on iOS');
        }
      })
      .catch(error => console.error('Error opening WhatsApp on iOS:', error));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send WhatsApp Message" onPress={sendWhatsAppMessage} />
    </View>
  );
};

export default ChatScreen;