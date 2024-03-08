import NavBar from "./NavBar";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import ProfileScreen from "./ProfileScreen";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <View style={{width: '100%', height: '10%', }}>
                        {/* Profile button */}
                        <Pressable
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                borderRadius: 15,
                                backgroundColor: 'rgba(202, 227,248, 0.5)',
                                marginHorizontal: '1%',
                                minWidth: 55,
                                maxWidth: 55,
                                minHeight: 55,
                                maxHeight: 55,
                                alignSelf: 'flex-end',
                            }}
                            title=""
                            onPress={() => {
                                navigation.navigate('Profile', {name: 'John'})
                            }}>
                            <Image source={require('./assets/userIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        </Pressable>
                    </View>
                    
                    {/* Mindfulness Guide button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Mindfulness Guide"
                        onPress={() => {
                            navigation.navigate('GuideScreen', {name: 'John'})
                        }}>
                        <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Mindfulness Guide</Text>
                    </Pressable>
                    {/* Chat button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Chat"
                        onPress={() => {
                            navigation.navigate('Chat', {name: 'John', articleID: 1})
                        }}>
                        <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Chat</Text>
                    </Pressable>
                    {/* Discussion Board button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Chat"
                        onPress={() => {
                            navigation.navigate('DiscussionBoard', {name: 'John'})
                        }}>
                        <Image source={require('./assets/blog.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Discussion Board</Text>
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
        justifyContent: 'space-evenly',
    },
    pageButton: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: 'rgba(202, 227,248, 0.5)',
        // alignSelf: 'flex-start',
        marginHorizontal: '1%',
        // marginBottom: 6,
        minWidth: 150,
        maxWidth: 200,
        minHeight: 150,
        maxHeight: 150,
        alignSelf: 'center',
    },
  });

  export {HomeScreen, ProfileScreen};
