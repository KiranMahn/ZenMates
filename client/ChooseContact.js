import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, TextInput, Text, Pressable, ScrollView, Image} from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';
import { SafeAreaView } from 'react-native';
let contactNumber = "";
let contactName = "Choose a contact";
const ChooseContact = ({navigation, route}) => {
  let listComponents = [];
  const [contacts, setContacts] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        let thisdata = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        setContacts(thisdata);
      }
    })();
  }, []);


  const [selected, setSelected] = useState('');

  const handleClick = (contact) => {
    setSelected(contact.id);
    contactNumber = contact.phoneNumbers[0].digits;
    contactName = contact.firstName;
    navigation.navigate('Chat');
  }
  

  if (contacts != null) {
    console.log("you have contacts! of length: " + contacts.data.length)
    for(i = 0; i < contacts.data.length; i++) { // cant get length of data object
      const contact = contacts.data[i];
      console.log("contact " + i + ": ");
      console.log(contact);
      listComponents.push(
          <TouchableOpacity key={contact.id} style={{display:'flex', flex: 1, width: '100%', backgroundColor: 'rgba(202, 227,248, 0.5)', margin: 10, padding: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', borderRadius: 15}} onPress={() => handleClick(contact)}>
            <Image source={require('./assets/userIcon.png')}></Image>
            <Text style={{margin: 15, fontSize: 30, marginLeft: 35}}>{contact.firstName}</Text>
          </TouchableOpacity>
        );
    }
    
  } else {
      listComponents.push(
          <Text key="0">You have no Contacts</Text>
      );
  }
  console.log("list componenets: " + listComponents.toString())

  
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
// 
export default ChooseContact;
export {contactNumber, contactName};