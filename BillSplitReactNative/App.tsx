import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Groups from './components/GroupScreen';
import Friends from './components/Friends';
import Activity from './components/Activity';
import Profile from './components/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupStackScreen from './components/GroupStackScreen';

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#333945',
  },
};

const styles = StyleSheet.create({
  tabNavigator: {
   backgroundColor:'#333945'
  }
});

console.log("Hurrayyyyyyyyyyyyyyyyyyyyyyyyy")
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let highlight;
          let iconName='';
          highlight = focused? 'cyan': 'gray';
          if (route.name === 'Groups') {
            iconName = 'group';
          } else if (route.name === 'Friends') {
            iconName='user';
          }
          else if (route.name === 'Activity') {
            iconName='fire';
          }
          else if (route.name === 'Profile') {
            iconName='user-circle';
          }

          
          return <Icon name={iconName} size={size} color={highlight} />;
        },
        tabBarActiveTintColor: 'cyan',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        tabBarStyle: { backgroundColor: '#2F363F'},
      })} >

      <Tab.Screen name="Groups" component={GroupStackScreen} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
        
  )
}

export default App;