import NavBar from "./NavBar";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import ProfileScreen from "./ProfileScreen";
import { useState } from "react";
const HomeScreen = ({navigation, route}) => {
    const [userID, setUserid] = useState(route.params.id);

    return (
        <View>
            <View style={styles.container}>
                <View style={{width: '100%', height: '10%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%'}}>
                    {/* Friends button */}
                    <Pressable
                        style={{
                            justifyContent: 'center',
                            borderRadius: 15,
                            backgroundColor: 'rgba(202, 227,248, 0.5)',
                            marginHorizontal: '1%',
                            width: 65,
                            height: 45,
                            alignSelf: 'flex-start',
                        }}
                        title="friends"
                        onPress={() => {
                            navigation.navigate('Friends', {userID: userID})
                        }}>
                        <Text style={{                                
                            textAlign: 'center'
                            }}>Friends</Text>
                    </Pressable>
                    {/* Profile button */}
                    <Pressable
                        style={{
                            justifyContent: 'center',
                            borderRadius: 15,
                            backgroundColor: 'rgba(202, 227,248, 0.5)',
                            marginHorizontal: '1%',
                            width: 55, 
                            height: 55,
                        }}
                        title=""
                        onPress={() => {
                            navigation.navigate('Profile', {userID: userID})
                        }}>
                        <Image source={require('./assets/userIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                    </Pressable>
                </View>
                <View style={styles.btnContainer}>
                    
                    

                    {/* Mindfulness Guide button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Mindfulness Guide"
                        onPress={() => {
                            navigation.navigate('GuideScreen', {userID: userID})
                        }}>
                        <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Mindfulness Guide</Text>
                    </Pressable>
                    {/* Chat button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Chat"
                        onPress={() => {
                            navigation.navigate('Chat', {userID: userID})
                        }}>
                        <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Chat</Text>
                    </Pressable>
                    {/* Discussion Board button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Chat"
                        onPress={() => {
                            navigation.navigate('DiscussionBoard', {userID: userID})
                        }}>
                        <Image source={require('./assets/blog.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Discussion Board</Text>
                    </Pressable>
                             {/* weather button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Weather"
                        onPress={() => {
                            navigation.navigate("Weather", { user: userID });
                        }}
                        >
                        <Image
                            source={require("./assets/cloud.png")}
                            style={{ alignSelf: "center", margin: 10, width: 50, height: 50 }}
                        />
                        <Text style={{ textAlign: "center" }}>Weather</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      alignContent: 'center',
      padding: 20,
      paddingTop: 0,
      height: '100%',
      justifyContent: 'flex-start',
    },
    text: {
      margin: 5,
      padding: 5,
      textAlign: 'center',
      fontWeight: '700',
      borderRadius: 1,
    },
    btnContainer: {
        width: '100%',
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '20%',
        justifyContent: 'center',
        marginTop: '20%',
        marginBottom: '20%'

    },
    pageButton: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: 'rgba(202, 227,248, 0.5)',
        // alignSelf: 'flex-start',
        marginHorizontal: 10,
        // marginBottom: 6,
        minWidth: 150,
        maxWidth: 200,
        minHeight: 150,
        maxHeight: 150,
        alignSelf: 'center',
        margin: 10
    },
});

  export {HomeScreen, ProfileScreen};
