import { Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView, Button } from "react-native";
import { getArticlesData } from "./Requests";
import { Component } from "react";
/* Contains a list of mindfulness mini articles */



const DiscussionBoard = ({navigation, route}) => {

  // get data for all articles
  let data = getArticlesData();

  let listComponents = [];

  const handleClick = (id) => {
    navigation.navigate('ArticleDetails', {itemId: id})
  }


  for(let i = 0; i < data.articles.length; i++) {

    listComponents.push(
          <TouchableOpacity key={data.articles[i]["id"]} style={{display:'flex', flex: 1, width: '100%', backgroundColor: 'rgba(202, 227,248, 0.5)', margin: 10, padding: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', borderRadius: 15}} onPress={() => handleClick(data.articles[i]["id"])}>
            <View>
              <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
            </View>
            <View style={{flexDirection: 'col', height: '100%', flex: 1}}>
              <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold', flex: 1}}>{data.articles[i]["title"]}</Text>
              <Text style={{fontSize: 15, margin: 5, flex: 1, flexWrap: 'wrap', width: '80%'}}>{data.articles[i]["shortDesc"]}</Text>
            </View>
            <Text style={{margin: 15, fontSize: 30, position: 'absolute', right: 5, flex: 1}}>&rarr;</Text>
          </TouchableOpacity>
    );
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
        <Text style={{alignSelf: 'center', margin: '5%', fontSize:30, fontWeight:'bold'}}>Discussion Board</Text>
        <Button title="create a post" onPress={navigation.navigate('CreatePost')}/>
        <ScrollView id="ArticleBtnContainer" style={{ flex: 1, height: 'auto', width: '100%', padding: 10, marginBottom: 10}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexGrow: 1}}>
          {listComponents}
          
        </ScrollView>
      </View>
    </SafeAreaView>
    
    
  );
};

export default DiscussionBoard;