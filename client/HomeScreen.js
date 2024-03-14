import NavBar from "./NavBar";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import ProfileScreen from "./ProfileScreen";

const HomeScreen = ({navigation}) => {
    const [user, setUser] = useState();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    {/* Profile button */}
                    <Pressable
                        style={styles.pageButton}
                        title="My Profile"
                        onPress={() => {
                            navigation.navigate('Profile', {user: user})
                        }}>
                        <Image source={require('./assets/userIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}> My Profile</Text>
                    </Pressable>
                    {/* Mindfulness Guide button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Mindfulness Guide"
                        onPress={() => {
                            navigation.navigate('GuideScreen', {user: user})
                        }}>
                        <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Mindfulness Guide</Text>
                    </Pressable>
                    {/* Chat button */}
                    <Pressable
                        style={styles.pageButton}
                        title="Chat"
                        onPress={() => {
                            navigation.navigate('Chat', {user: user})
                        }}>
                        <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
                        <Text style={{textAlign: 'center'}}>Chat</Text>
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
        minWidth: '40%',
        maxWidth: '50%',
        minHeight: '7%',
        maxHeight: '25%',
        alignSelf: 'center',
    },
  });

  export {HomeScreen, ProfileScreen};
