import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Button } from "@gluestack-ui/themed";

const CreatePost = () => {
    const [title, setTitle] = useState();
    const [postBody, setPostBody] = useState();

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
            <Button style={{width: '50%', borderRadius: 25, margin: 20}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 700}}>Post</Text>
            </Button>

        </View>

    );
}

export default CreatePost;