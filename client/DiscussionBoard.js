import { Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView, Button } from "react-native";
import { getDiscussionPosts } from "./Requests";
import { Component, useState, useEffect } from "react";
/* Contains a list of mindfulness mini articles */



const DiscussionBoard = ({navigation, route}) => {
  const [userID, setUserid] = useState(route.params.userID);
  const [data, setData] = useState();
  // get data for all articles
  useEffect(() => {
    const loadData = async () => {
      let thisdata = { articles: []};
      await fetch('http://localhost:8082/getDiscussionPosts/')
      .then(result => result.json())
      .then(jsonData => {
        thisdata.articles = jsonData;
        //console.log("data in requests: ")
        //console.log(JSON.stringify(thisdata));
        setData(thisdata);
      })
      .catch(err => {
        console.log(err);
      });
    }
    loadData();

  }, []);
  let listComponents = [];

  const handleClick = (id) => {
    navigation.navigate('ArticleDetails', {itemId: id})
  }

  console.log("data: " + data)

  if(data != null) {
    for(let i = 0; i < data.articles.length; i++) {
      listComponents.push(
            <View key={i} style={{alignItems: 'center', backgroundColor: 'lightgrey', borderRadius: 15, padding: 20, margin: 10, width: '100%'}}>
              <Text style={{marginBottom: 10, fontWeight: 700, fontSize:18}}>{data.articles[i].title}</Text>
              <Text style={{margin: 5, alignSelf: 'flex-start'}}>Post by: {data.articles[i].firstName }</Text>
              <Text style={{margin: 5}}>{data.articles[i].body}</Text>
            </View>
      );
    }
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
        <Text style={{alignSelf: 'center', margin: '5%', fontSize:30, fontWeight:'bold'}}>Discussion Board</Text>
        <View style={{display: 'flex', flexDirection: 'row', height: '8%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'aliceblue', width: '50%', alignSelf: 'center', borderRadius: 20, padding: 5}}>
          <Image source={require('./assets/add.png')}/>
          <Button title="create a post" onPress={() => navigation.navigate('CreatePost', {userID: userID})}/>
        </View>
        <ScrollView id="ArticleBtnContainer" style={{ flex: 1, height: 'auto', width: '100%', padding: 10, marginBottom: 10}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexGrow: 1}}>
          {listComponents}
        </ScrollView>
      </View>
    </SafeAreaView>


  );
};

export default DiscussionBoard;
