import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { getArticlesData } from "./Requests";
import { Component } from "react";
/* Contains a list of mindfulness mini articles */



const GuideScreen = ({navigation, route}) => {

  // get data for all articles
  let data = getArticlesData();

  console.log(data.articles);

  let listComponents = [];


  for(let i = 0; i < data.articles.length; i++) {
    console.log(data.articles);

    listComponents.push(
          <TouchableOpacity key={data.articles[i]["title"]} style={{width: '100%', height: '20%', backgroundColor: 'rgba(202, 227,248, 0.5)', margin: 5, padding: 5, display:'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', borderRadius: 15}}>
            <View>
              <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
            </View>
            <View style={{flexDirection: 'col', width: '60%', height: '50%'}}>
              <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold'}}>{data.articles[i]["title"]}</Text>
              <Text style={{fontSize: 15, margin: 5, flex: 1, flexWrap: 'wrap'}}>{data.articles[i]["shortDesc"]}</Text>
            </View>
            <Text style={{margin: 15, fontSize: 30, position: 'absolute', right: 5}}>&rarr;</Text>
          </TouchableOpacity>
    );
  }
  
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
      <Text style={{alignSelf: 'center', margin: '5%', fontSize:30, fontWeight:'bold'}}>Guide to mindfulness</Text>
      <ScrollView id="ArticleBtnContainer" style={{display:'flex', flexDirection:'column', height: '80%', width: '100%', padding: 10, overflow: 'scroll'}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexGrow: 1}}>
        {listComponents}
        
      </ScrollView>
    </View>
    
  );
};

export default GuideScreen;