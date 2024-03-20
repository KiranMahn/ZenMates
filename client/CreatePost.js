import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "@gluestack-ui/themed";

const CreatePost = ({navigation, route}) => {
    const [userID, setUserid] = useState(route.params.userID);
    const [title, setTitle] = useState();
    const [postBody, setPostBody] = useState();


    const loadData = async () => {
      if (title != undefined && postBody != undefined) {
        await fetch(`http://localhost:8082/makeDiscussionPost/${userID}/${title}/${postBody}/`)
        .then(result => result.json())
        .then(jsonData => {
          console.log("Post created.")
        })
        .catch(err => {
          console.log(err);
        });
      }else {
        setShowErr(true);
      }

    }
    const checkAwardMedal = async () => {
      let award = false;
      await fetch(`http://localhost:8082/getstats/${userID}`)
      .then(result => result.json())
      .then(jsonData => {
        console.log(jsonData)
        if (jsonData[0].posts % 3 == 0) {
          award = true;
        }
      })
      .catch(err => {
        console.log(err);
      });

      if (award) {
        await fetch(`http://localhost:8082/awardmedal/${userID}/`)
        .then(result => result.json())
        .then(jsonData => {
          console.log("medal awarded");
        })
        .catch(err => {
          console.log(err);
        });
      }
      navigation.navigate('DiscussionBoard', {userID: userID});
    }

    const handlePost = () => {
      try {
        loadData();
        checkAwardMedal();
        //console.log(data);
      } catch (e) {
        console.log(err);
      }
    }

    return (
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 30, margin: 10}}>Create a post</Text>
            <View style={{width: '100%', height: '75%'}}>
                <TextInput
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                    style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '80%', alignSelf: 'center', fontSize: 20}}
                />
                <TextInput
                    placeholder="Start your post here"
                    value={postBody}
                    onChangeText={setPostBody}
                    multiline={true}
                    style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '80%', height: '70%', alignSelf: 'center', fontSize: 20, flexWrap: 'wrap', textAlignVertical: 'top'}}
                />
            </View>
            <Button style={{width: '50%', borderRadius: 25, margin: 20}} onPress={() => handlePost()}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 700}}>Post</Text>
            </Button>

        </View>

    );
}

export default CreatePost;
