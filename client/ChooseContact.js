import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, TextInput, Text, Pressable, ScrollView, Image} from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';
import { SafeAreaView } from 'react-native';

const ChatScreen = ({navigation, route}) => {
  let listComponents = [];

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          for(i = 0; i < data.length; i++) {
            const contact = data[i];
            console.log("contact " + i + ": ");
            console.log(contact);
            listComponents.push(
                <TouchableOpacity key={contact.id} style={{display:'flex', flex: 1, width: '100%', backgroundColor: 'rgba(202, 227,248, 0.5)', margin: 10, padding: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', borderRadius: 15}} onPress={() => handleClick(data.articles[i]["id"])}>
                  <Text style={{margin: 15, fontSize: 30, position: 'absolute', right: 5, flex: 1}}>{contact.firstName}</Text>
                </TouchableOpacity>
          );
          }
          
        } else {
            listComponents.push(
                <Text>You have no Contacts</Text>
            );
        }
        
      }
    })();
  }, []);


  const [contact, setContact] = useState('');
  const [selected, setSelected] = useState('');


  const useContact = (id) => {
    setSelected(id);
    setContact(id);
  }


  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
        <Text style={{alignSelf: 'center', margin: '5%', fontSize:30, fontWeight:'bold'}}>Choose a contact</Text>
        <ScrollView id="ArticleBtnContainer" style={{ flex: 1, height: 'auto', width: '100%', padding: 10, marginBottom: 10}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexGrow: 1}}>
            {listComponents}
        </ScrollView>
      </View>
    </SafeAreaView>
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