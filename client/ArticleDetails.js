import { Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
/* Contains a list of mindfulness mini articles */

const ArticleDetails = ({navigation, route}) => {
  let itemId = route.params.itemId;
  const [data, setData] = useState();
  //console.log(itemId);
  // get data for all articles
  useEffect(() => {
    const loadData = async () => {
      let thisdata = { articles: []};
      await fetch(`http://localhost:8082/getarticledata/${itemId}/`)
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

  const getSrc = (id) => {
    switch(id) {
        case 0:
            return require('./assets/bookIcon.png')
        case 1:
            return require('./assets/chatIcon.png')
    }
  }

  if(data != null) {
    //console.log("data not null: ");
    //console.log(data);
    let image = data.articles[0]["image"];
    listComponents.push(
      <View style={{width: '100%', height: '100%', backgroundColor: 'white', padding: 10}} key={itemId}>
          <Text style={{fontSize: 40, textAlign: 'center', fontWeight: 'bold', margin: 10}}>{data.articles[0]["title"]}</Text>
          <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 30,}}/>
          <Text style={{textAlign: 'justify', padding: 15, fontSize: 20}}>{data.articles[0]["body"]}</Text>
      </View>
    )

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
