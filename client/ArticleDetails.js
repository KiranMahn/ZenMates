import { Text, View, Image } from "react-native";
import { getArticleById } from "./Requests";
import { useState } from "react";
import { useEffect } from "react";
/* Contains a list of mindfulness mini articles */

const ArticleDetails = ({navigation, route}) => {
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
        console.log("data in requests: ")
        console.log(JSON.stringify(thisdata));
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
    console.log("data not null: ");
    console.log(data);
    for(let i = 0; i < data.articles.length; i++) {

      listComponents.push(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white', padding: 10}}>
            <Text style={{fontSize: 40, textAlign: 'center', fontWeight: 'bold', margin: 10}}>{data.articles[0]["title"]}</Text>
            <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 30,}}/>
            <Text style={{textAlign: 'justify', padding: 15, fontSize: 20}}>{data.articles[0]["textBody"]}</Text>
        </View>
      );
    }
  
    return (
        <View>
            {listComponents}
        </View>
        
    
        
  
  
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  };

export default ArticleDetails;
