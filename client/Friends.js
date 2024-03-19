import { Pressable, View, Text, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from "react";
export const Friends = ({navigation, route}) => {
    const [userID, setUserid] = useState(route.params.userID);
    let listComponents = [];
    const [contacts, setContacts] = useState();
    const [data, setData] = useState();
    const [showMyFriends, setShowMyFriends] = useState(false);
    const [showAddFriends, setShowAddFriends] = useState(true);
    const [addFriendsUsername, setAddFriendUsername] = useState();
    const [selected, setSelected] = useState();

    useEffect(() => {
        const loadData = async () => {
          await fetch(`http://localhost:8082/getfriends/${userID}`)
          .then(result => result.json())
          .then(jsonData => {
            //console.log("data in requests: ")
            //console.log(JSON.stringify(thisdata));
            setData(jsonData);
          })
          .catch(err => {
            console.log(err);
          });
        }
        loadData();

      }, []);



    const handleClick = (contact) => {
      setSelected(contact.id);
      contactNumber = contact.phoneNumbers[0].digits;
      contactName = contact.firstName;
      navigation.navigate('Chat');
    }


    if(data != [] && data != null) {
        for(let i = 0; i < data.length; i++) {
            listComponents.push(
                <View key={i} style={{alignItems: 'center', backgroundColor: 'lightgrey', borderRadius: 15, padding: 20, margin: 10, width: '100%'}}>
                    <Text style={{marginBottom: 10, fontWeight: 700, fontSize:18}}>{data[i].firstName}</Text>
                    <Text style={{margin: 5, alignSelf: 'flex-start'}}>Post by: {data[i].lastName}</Text>
                    <Text style={{margin: 5}}>{data[i].medals}</Text>
                </View>
            );
        }
    }

    console.log("list componenets: " + listComponents.toString())

    const MyFriends = () => {
        return (
            <ScrollView id="ArticleBtnContainer" style={{ flex: 1, height: 'auto', width: '100%', padding: 10, marginBottom: 10}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexGrow: 1}}>
                {listComponents}
            </ScrollView>
        );

    };

    const AddFriend = () => {
        return (
            <View style={{width: '100%', height: '50%', flexDirection: 'col', alignItems: 'center', justifyContent: 'space-evenly', padding: 20}}>
                <Text>Enter your friends username</Text>
                <TextInput
                    placeholder="Username"
                    value={addFriendsUsername}
                    onChangeText={setAddFriendUsername}
                    style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '80%', alignSelf: 'center', fontSize: 20}}
                />
                <Pressable
                    style={{
                        justifyContent: 'center',
                        borderRadius: 15,
                        backgroundColor: 'rgba(78, 165, 65, 1)',
                        marginHorizontal: '1%',
                        width: "30%",
                        height: 45,
                    }}
                    onPress={() => {
                        navigation.navigate('Friends', {userID: userID})
                    }}>
                    <Text style={{
                        textAlign: 'center'
                        }}>Add</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <View style={{height: '100%'}}>
            <View style={{padding: 20, flexDirection: 'row'}}>
                <Pressable
                    style={{
                        justifyContent: 'center',
                        borderRadius: 15,
                        backgroundColor: (selected == "addFriends") ? "dodgerblue" : "aliceblue",
                        marginHorizontal: '1%',
                        width: "45%",
                        height: 45,
                        alignSelf: 'flex-start',
                    }}
                    onPress={() => {
                        setShowAddFriends(true);
                        setShowMyFriends(false);
                        setSelected("addFriends");
                    }}>
                    <Text style={{
                        textAlign: 'center'
                        }}>Add Friends</Text>
                </Pressable>
                <Pressable
                    style={{
                        justifyContent: 'center',
                        borderRadius: 15,
                        backgroundColor: (selected == "myFriends") ? "dodgerblue" : "aliceblue",
                        marginHorizontal: '1%',
                        width: "45%",
                        height: 45,
                        alignSelf: 'flex-start',

                    }}
                    onPress={() => {
                        setShowAddFriends(false);
                        setShowMyFriends(true);
                        setSelected("myFriends");
                    }}>
                    <Text style={{
                        textAlign: 'center'
                        }}>My Friends</Text>
                </Pressable>
            </View>
           {showMyFriends && <MyFriends/>}
           {showAddFriends && <AddFriend/>}
        </View>

    );

}
