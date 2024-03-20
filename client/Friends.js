import { Pressable, View, Text, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import randomColor from "randomcolor";

const MyFriends = ({listComponents}) => {
    return (
        <ScrollView id="ArticleBtnContainer" style={{height: 'auto', width: '100%', marginBottom: 10, padding: 20, backgroundColor: 'white', flexDirection: 'col'}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
            {listComponents}
        </ScrollView>
    );

};


export const Friends = ({navigation, route}) => {
    const [userID, setUserid] = useState(route.params.userID);
    let listComponents = [];
    const [contacts, setContacts] = useState();
    const [data, setData] = useState();
    const [showMyFriends, setShowMyFriends] = useState(true);
    const [showAddFriends, setShowAddFriends] = useState(false);
    const [addFriendsUsername, setAddFriendUsername] = useState();
    const [selected, setSelected] = useState("myFriends");
    const [friendMessage, setFriendMessage] = useState();
    const [showErrorPage, setShowErrorPage] = useState(false);
    const [showSuccessPage, setShowSuccessPage] = useState(false);
    useEffect(() => {
        const loadData = async () => {
          await fetch(`http://localhost:8082/getfriends/${userID}`)
          .then(result => result.json())
          .then(jsonData => {
            // console.log("data in requests: ")
            // console.log(JSON.stringify(thisdata));
            setData(jsonData);
          })
          .catch(err => {
            console.log(err);
          });
        }
        loadData();

      }, []);

      const pushData = async () => {
        console.log("in push dataa");
        setShowSuccessPage(false);
        setShowErrorPage(false);
          if (addFriendsUsername != undefined) {
            await fetch(`http://localhost:8082/makefriends/${userID}/${addFriendsUsername}/`)
            .then(result => result.json())
            .then(jsonData => {
              console.log("data in requests: ")
              console.log(JSON.stringify(jsonData));
              if (jsonData == "user does not exist") {
                setShowErrorPage(true);
                setFriendMessage("user does not exist");
              }else if (jsonData == "friends already added") {
                setShowErrorPage(true);
                setFriendMessage(`You and ${addFriendsUsername} are already friends`);
              }else{
                setShowSuccessPage(true);
                setFriendMessage("Friend successfully added!");
              }
              console.log(friendMessage);
            })
            .catch(err => {
              console.log(err);
            });
          }
        }

    const handleClick = (contact) => {
      setSelected(contact.id);
      contactNumber = contact.phoneNumbers[0].digits;
      contactName = contact.firstName;
      navigation.navigate('Chat');
    }

    const ErrorPage = () => {
        return (
          <View style={{height: '12%', backgroundColor: '#cc0000', borderRadius: '15', padding: 10, margin: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center', width: '90%', zIndex: 3, bottom: 0}}>
            <Text style={{fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'white'}}>Error</Text>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 600, textAlign: 'center'}}>Invalid fields: {friendMessage}. Please try again</Text>
          </View>
        );
      };

      const Success = () => {
        return (
          <View style={{height: '12%', backgroundColor: 'rgba(78, 165, 65, 1)', borderRadius: '15', padding: 10, margin: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', alignSelf: 'center', width: '90%', zIndex: 3, bottom: 0}}>
            <Text style={{fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'white'}}>Success</Text>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 600, textAlign: 'center'}}>{friendMessage}</Text>
          </View>
        );
      };

    if(data != [] && data != null) {
        for(let i = 0; i < data.length; i++) {
            let color = randomColor({
                luminosity: 'light',
             });
            console.log(color);
            listComponents.push(
                <View key={i} style={{alignItems: 'center', backgroundColor: color, borderRadius: 15, padding: 20, margin: 10, width: 150, height: 150}}>
                    <Text style={{marginBottom: 15, fontWeight: 700, fontSize:18}}>{data[i].firstName}</Text>
                    <Text style={{margin: 5}}>Medals: {data[i].medals}</Text>
                    <Text style={{margin: 5}}>Points: {data[i].points}</Text>
                </View>
            );
        }
    }

    console.log("list componenets: " + listComponents.toString())

    return (
        <View style={{height: '100%', backgroundColor: 'white'}}>
            {showErrorPage && <ErrorPage/>}
            {showSuccessPage && <Success/>}
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
                        setShowErrorPage(false);
                        setShowSuccessPage(false);
                    }}>
                    <Text style={{
                        textAlign: 'center'
                        }}>My Friends</Text>
                </Pressable>
            </View>
           {showMyFriends && <MyFriends listComponents={listComponents}/>}
           {showAddFriends && <View style={{width: '100%', height: '50%', flexDirection: 'col', alignItems: 'center', justifyContent: 'space-evenly', padding: 20}}>
            <Text>Enter your friends username</Text>
            <TextInput
                placeholder="Username"
                value={addFriendsUsername}
                onChangeText={setAddFriendUsername}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={{backgroundColor: 'whitesmoke', padding: 10, borderRadius: 15, margin: 10, width: '80%', alignSelf: 'center', fontSize: 20}}
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
                    pushData();
                }}>
                <Text style={{
                    textAlign: 'center'
                    }}>Add</Text>
            </Pressable>
        </View>}
        </View>
    );
}
