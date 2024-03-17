import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './HomeScreen';
import ProfileScreen from "./ProfileScreen";
import GuideScreen from "./GuideScreen";
import Chat from "./ChatScreen";
import CreatePost from './CreatePost';
import ArticleDetails from './ArticleDetails';
import Login from './Login';
import Signup from './Signup';
import DiscussionBoard from './DiscussionBoard';
import ChooseContact from './ChooseContact';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
              />
              {/* Signup */}
              <Stack.Screen
                name="Signup"
                component={Signup}
              />
              {/* HomeScreen */}
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
              {/* Profile */}
              <Stack.Screen 
                name="Profile" 
                component={ProfileScreen} 
              />
              {/* Guide */}
               <Stack.Screen 
                name="GuideScreen" 
                component={GuideScreen} 
              />
              {/* Chat */}
              <Stack.Screen 
                name="Chat" 
                component={Chat} 
              />
              {/* Article */}
              <Stack.Screen 
                name="ArticleDetails" 
                component={ArticleDetails} 
                initialParams={{itemId: 0}}
              />
              {/* Discussion Board */}
              <Stack.Screen 
                name="DiscussionBoard" 
                component={DiscussionBoard} 
                initialParams={{itemId: 0}}
              />
              {/* Create Post */}
              <Stack.Screen 
                name="CreatePost" 
                component={CreatePost} 
              />
              {/* Choose Contact */}
              <Stack.Screen 
                name="ChooseContact" 
                component={ChooseContact} 
              />

        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    
  );
}

