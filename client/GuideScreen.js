import { Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView } from "react-native";
import { getGuideData } from "./Requests";
import { Component, useEffect, useState } from "react";
/* Contains a list of mindfulness mini articles */

const GuideScreen = ({navigation, route}) => {
  let user = route.params.user;
  const [data, setData] = useState();

  // get data for all articles
  useEffect(() => {
    const loadData = async () => {
      let thisdata = { articles: []};
      await fetch('http://localhost:8082/getguidedata/')
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
  //console.log(data);

  let listComponents = [];

  const handleClick = (id) => {
    navigation.navigate('ArticleDetails', {itemId: id})
  }


  if(data != null) {
    //console.log("data not null: ");
    //console.log(data);
    for(let i = 0; i < data.articles.length; i++) {

      listComponents.push(
            <TouchableOpacity key={data.articles[i]["articleID"]} style={{display:'flex', flex: 1, width: '100%', backgroundColor: 'rgba(202, 227,248, 0.5)', margin: 10, padding: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', borderRadius: 15}} onPress={() => handleClick(data.articles[i]["articleID"])}>
              <View>
                <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 10,}}/>
              </View>
              <View style={{flexDirection: 'col', height: '100%', flex: 1}}>
                <Text style={{fontSize: 20, margin: 10, fontWeight: 'bold', height: '20%'}}>{data.articles[i]["title"]}</Text>
                <Text style={{fontSize: 15, margin: 5, flexWrap: 'wrap', width: '80%'}}>{data.articles[i]["description"]}</Text>
              </View>
              <Text style={{margin: 15, fontSize: 30, position: 'absolute', right: 5, flex: 1}}>&rarr;</Text>
            </TouchableOpacity>
      );
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '100%', height: '100%', backgroundColor: 'white',}}>
          <Text style={{alignSelf: 'center', margin: '5%', fontSize:30, fontWeight:'bold'}}>Guide to mindfulness</Text>
          <ScrollView id="ArticleBtnContainer" style={{ flex: 1, height: 'auto', width: '100%', padding: 10, marginBottom: 10}} contentContainerStyle={{alignItems: 'center', justifyContent:'space-between', flexGrow: 1}}>
            {listComponents}

          </ScrollView>
        </View>
      </SafeAreaView>


    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

};

export default GuideScreen;
