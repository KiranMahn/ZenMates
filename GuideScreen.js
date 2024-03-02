import { Text, TouchableOpacity, View, Image } from "react-native";
import { getArticlesData } from "./Requests";
import { Component } from "react";
/* Contains a list of mindfulness mini articles */



const GuideScreen = ({navigation, route}) => {

  // get data for all articles
  // const articles = getArticlesData();


  
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
      <Text style={{alignSelf: 'center', margin: '5%', fontSize:30, fontWeight:'bold'}}>Guide to mindfulness</Text>
      <View id="ArticleBtnContainer" style={{display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems: 'center', height: '70%', width: '100%', padding: 10}}>
        <TouchableOpacity style={{width: '100%', height: '20%', backgroundColor: 'aliceblue', margin: 3, padding: 5, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 20,}}/>
          </View>
          <View>
            <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold'}}>Verbal Meditation</Text>
            <Text style={{fontSize: 15, margin: 10}}>Out loud meditation</Text>
          </View>
          <Text style={{margin: 15, fontSize: 30}}>&rarr;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%', height: '20%', backgroundColor: 'aliceblue', margin: 3, padding: 5, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 20,}}/>
          </View>
          <View>
            <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold'}}>Verbal Meditation</Text>
            <Text style={{fontSize: 15, margin: 10}}>Out loud meditation</Text>
          </View>
          <Text style={{margin: 15, fontSize: 30}}>&rarr;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%', height: '20%', backgroundColor: 'aliceblue', margin: 3, padding: 5, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 20,}}/>
          </View>
          <View>
            <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold'}}>Verbal Meditation</Text>
            <Text style={{fontSize: 15, margin: 10}}>Out loud meditation</Text>
          </View>
          <Text style={{margin: 15, fontSize: 30}}>&rarr;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%', height: '20%', backgroundColor: 'aliceblue', margin: 3, padding: 5, display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <View>
            <Image source={require('./assets/chatIcon.png')} style={{alignSelf: 'center', margin: 20,}}/>
          </View>
          <View>
            <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold'}}>Verbal Meditation</Text>
            <Text style={{fontSize: 15, margin: 10}}>Out loud meditation</Text>
          </View>
          <Text style={{margin: 15, fontSize: 30}}>&rarr;</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
  );
};

export default GuideScreen;