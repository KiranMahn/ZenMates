import { Text, View, Image } from "react-native";
import { getArticleById } from "./Requests";
/* Contains a list of mindfulness mini articles */

const ArticleDetails = ({navigation, route}) => {

    const { itemId } = route.params;
    console.log("article details id: " + itemId);
    let data = getArticleById(itemId);
    console.log("data: ", data);
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: 'white', padding: 10}}>
            <Text style={{fontSize: 40, textAlign: 'center', fontWeight: 'bold', margin: 10}}>{data["title"]}</Text>
            <Image source={require('./assets/bookIcon.png')} style={{alignSelf: 'center', margin: 30,}}/>
            <Text style={{textAlign: 'justify', padding: 15, fontSize: 20}}>{data["textBody"]}</Text>
        </View>
        

    )
  };

export default ArticleDetails;