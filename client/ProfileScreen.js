import { useState, useEffect } from "react";
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
    const [showError, setShowErr] = useState(false);
    const [error, setError] = useState("Invalid fields. Please try again");
    //need user stats

    useEffect(() => {
      const loadData = async () => {
        console.log("fetching");
        await fetch(`http://localhost:8082/getprofile/${userID}/`)
        .then(result => result.json())
        .then(jsonData => {
          console.log("data in requests: ")
          console.log(JSON.stringify(jsonData));
          setData(jsonData);
          //set user stats
          setUsername(jsonData[0]["username"]);
          setName(jsonData[0]["firstName"] + " " + jsonData[0]["lastName"]);
          setDOB(jsonData[0]["dob"]);
          setEmail(jsonData[0]["email"]);
          setPhoneNum(jsonData[0]["phone"]);
          setGender(jsonData[0]["gender"]);
          setStreak(jsonData[0]["streak"]);
          setMedals(jsonData[0]["medals"]);
          setPoints(jsonData[0]["points"]);
          setFriends(jsonData[0]["friends"]);
        })
        .catch(err => {
          console.log(err);
        });
      }
      loadData();
    }, []);


    const postData = async () => {
      const splitName = name.split(" ");
      console.log(splitName[0]);
      console.log(splitName[1]);
      await fetch(`http://localhost:8082/updateuser/${userID}/${splitName[0]}/${splitName[1]}/${gender}/${phoneNum}/`)
      .then(result => result.json())
      .then(jsonData => {
        console.log("data in requests: ");
        console.log(JSON.stringify(jsonData));
        //set user stats
        if (jsonData == "phone") {
          setError("username, email, phone number");
          setShowErr(true);
        }
        console.log("success");
      })
      .catch(err => {
        console.log(err);
      });
    }


    const editFields = () => {
      setEditMode(!editMode);
      if(!editMode) {
        setEditColor('lightgrey')
        setEditIcon(require('./assets/check.png'))
      } else {
        console.log("Posting data...");
        // post data
        setEditColor('white')
        setEditIcon(require('./assets/pen.png'))
        postData();
      }
    }

    const handleChange = () => {
      try {
        postData();
        //console.log(data);
      } catch (e) {
        console.log(err);
        console.log(e);

      }
    }


    console.log(name);

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
            <TextInput onChangeText={setName} style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>{name}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Gender: </Text>
            <TextInput onChangeText={setGender} style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>{gender}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Phone #: </Text>
            <TextInput onChangeText={setPhoneNum} style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={editMode} backgroundColor={editColor}>{phoneNum}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>DoB: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>{dob}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Streak: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>{streak}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Medals: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>{medals}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Friends: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>{friends}</TextInput>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Points: </Text>
            <TextInput style={{width: '60%', fontSize: 20, padding: 5, borderRadius: 10}} editable={false}>{points}</TextInput>
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
