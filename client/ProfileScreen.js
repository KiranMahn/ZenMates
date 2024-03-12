import { useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native";

const ProfileScreen = ({navigation, route}) => {
    const [editMode, setEditMode] = useState(false);
    const [editColor, setEditColor] = useState('white');
    const [editIcon, setEditIcon] = useState(require('./assets/pen.png'));
    const editFields = () => {
      setEditMode(!editMode);
      if(!editMode) {
        setEditColor('lightgrey')
        setEditIcon(require('./assets/check.png'))
      } else {
        setEditColor('white')
        setEditIcon(require('./assets/pen.png'))
      }
    }

    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <View style={{width:"100%", height:"20%", display: "flex", justifyContent: 'space-around', alignItems: 'center'}}>
          <Image source={require('./assets/userIcon.png')} style={{margin: 30, height: 100, width: 100}}/>
          {/* <Text>{route.params.name}</Text>; */}
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Username</Text>
        </View>

        <ScrollView style={{width: '100%', height: '65%', marginTop: 30}}>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Name: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>myname</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Age: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>21</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Phone #: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>(+1)650-660-3438</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Streak: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>6 days</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Medals: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>0</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Friends: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>0</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Points: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>0</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>DOB: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>00/00/0000</TextInput>
          </View>
        </ScrollView>

        <View style={{width: '100%', height: '10%', display: 'flex', alignItems: 'flex-end'}}>
          <Pressable style={{width: 10, height: 10, display: 'flex', alignItems: 'center', marginRight: '10%'}} onPress={() => editFields()}>
            <Image source={editIcon} style={{height: 50, width: 50}}/>
          </Pressable>
        </View>
      </View>
      
      
    );
    
  }

export default ProfileScreen;