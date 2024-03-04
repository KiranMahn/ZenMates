import { Text, View, Image, Pressable } from "react-native";

const ProfileScreen = ({navigation, route}) => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <View style={{width:"100%", height:"20%", display: "flex", justifyContent: 'space-around', alignItems: 'center'}}>
          <Image source={require('./assets/userIcon.png')} style={{margin: 30, height: 100, width: 100}}/>
          {/* <Text>{route.params.name}</Text>; */}
          <Text style={{fontSize: '25', fontWeight: 'bold'}}>Username</Text>
        </View>

        <View style={{width: '100%', height: '65%', marginTop: 30}}>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Name: </Text>
            <Text style={{width: '70%', fontSize: 20}}>myname</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Age: </Text>
            <Text style={{width: '70%', fontSize: 20}}>21</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Phone #: </Text>
            <Text style={{width: '70%', fontSize: 20}}>(+1)650-660-3438</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Streak: </Text>
            <Text style={{width: '70%', fontSize: 20}}>6 days</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Hoes: </Text>
            <Text style={{width: '70%', fontSize: 20}}>0</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Friends: </Text>
            <Text style={{width: '70%', fontSize: 20}}>0</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Looks: </Text>
            <Text style={{width: '70%', fontSize: 20}}>-1</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', margin: 20}}>
            <Text style={{width: '30%', fontSize: 20, fontWeight: 'bold'}}>Personality: </Text>
            <Text style={{width: '70%', fontSize: 20}}>:/</Text>
          </View>
        </View>

        <View style={{width: '100%', height: '10%', display: 'flex', alignItems: 'flex-end'}}>
          <Pressable style={{width: 10, height: 10, display: 'flex', alignItems: 'center', marginRight: '10%'}}>
            <Image source={require('./assets/pen.png')} style={{height: 50, width: 50}}/>
          </Pressable>
        </View>
      </View>
      
      
    );
    
  }

export default ProfileScreen;