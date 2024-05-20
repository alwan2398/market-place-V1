import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import AddPostScreen from '../screen/AddPostScree';
import ExploreScreen from '../screen/ExploreScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#007BFF'
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginBottom:3}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Explore" component={ExploreScreen}
            options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginBottom:3}}>Search</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="search" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="AddPost" component={AddPostScreen} 
            options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginBottom:3}}>Upload</Text>
        ),
        tabBarIcon:({color,size})=>(
          <Ionicons name="add-circle" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginBottom:3}}>Profile</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="user" size={size} color={color} />
        )
      }}/>
    </Tab.Navigator>
  );
}