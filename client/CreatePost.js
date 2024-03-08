import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState();

    return (
        <View>
            <Text>Create a post</Text>
            <View>
                <Text>Title: </Text>
                <TextInput
                    placeholder="title"
                    value={title}
                    onChangeText={setTitle}
                    style={{backgroundColor: 'white', padding: 10, borderRadius: 15, margin: 10, width: '50%', alignSelf: 'center'}}
                />
            </View>

        </View>

    );
}

export default CreatePost;