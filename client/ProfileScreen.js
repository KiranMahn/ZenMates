import { useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native";

const ProfileScreen = ({navigation, route}) => {
    let userID = route.params.userID;
    const [editMode, setEditMode] = useState(false);
    const [editColor, setEditColor] = useState('white');
    const [editIcon, setEditIcon] = useState(require('./assets/pen.png'));
    const [username, setUsername] = useState()
    const [name, setName] = useState()
    const [dob, setDOB] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()
    const [gender, setGender] = useState()
    const [streak, setStreak] = useState()
    const [medals, setMedals] = useState()
    const [friends, setFriends] = useState()
    const [points, setPoints] = useState()
    const [data, setData] = useState();
    //need user stats

    const loadData = async () => {
      await fetch(`http://localhost:8082/getprofile/${userID}/`)
      .then(result => result.json())
      .then(jsonData => {
        console.log("data in requests: ")
        console.log(JSON.stringify(jsonData));
        setData(jsonData);
        //set user stats
      })
      .catch(err => {
        console.log(err);
      });
    }

    console.log(data);
    try {
      loadData();
      //console.log(data);
    } catch (e) {
      console.log(err);
    }

    setUsername(data[0]["username"]);
    setName(data[0]["firstName"] + jsonData[0]["lastName"]);
    setDOB(data[0]["dob"]);
    setEmail(data[0]["email"]);
    setPhoneNum(data[0]["phone"]);
    setGender(data[0]["gender"]);
    setGender(data[0]["streak"]);
    setGender(data[0]["medals"]);
    setGender(data[0]["points"]);
    setGender(data[0]["friends"]);
    
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
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{username}</Text>
        </View>

        <ScrollView style={{width: '100%', height: '65%', marginTop: 30}}>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Name: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>{name}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>DoB: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>{dob}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Phone #: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>{phoneNum}</TextInput>
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
