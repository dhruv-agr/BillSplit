import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthProvider } from './src/contexts/Auth';
import { Router } from './src/routes/Router';

import Groups from './src/components/GroupScreen';
import Friends from './src/components/Friends';
import Activity from './src/components/Activity';
import Profile from './src/components/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupStackScreen from './src/components/GroupStackScreen';
import LoginForm from './src/screens/LoginForm';

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
  //   <NavigationContainer theme={MyTheme}>
  //   <Tab.Navigator
  //     screenOptions={({ route }) => ({
  //       tabBarIcon: ({ focused, color, size }) => {
  //         let highlight;
  //         let iconName='';
  //         highlight = focused? 'cyan': 'gray';
  //         if (route.name === 'Groups') {
  //           iconName = 'group';
  //         } else if (route.name === 'Friends') {
  //           iconName='user';
  //         }
  //         else if (route.name === 'Activity') {
  //           iconName='fire';
  //         }
  //         else if (route.name === 'Profile') {
  //           iconName='user-circle';
  //         }
  //         else if(route.name === 'LoginForm'){
  //           iconName='unlock';
  //         }

          
  //         return <Icon name={iconName} size={size} color={highlight} />;
  //       },
  //       tabBarActiveTintColor: 'cyan',
  //       tabBarInactiveTintColor: 'gray',
  //       headerShown:false,
  //       tabBarStyle: { backgroundColor: '#2F363F'},
  //       initialRouteName: "Friends"
  //     })} >

  //     <Tab.Screen name="Friends" component={Friends} />
  //     <Tab.Screen name="Groups" component={GroupStackScreen} />

  //     <Tab.Screen name="Activity" component={Activity} />
  //     <Tab.Screen name="Profile" component={Profile} />
  //     <Tab.Screen name="LoginForm" component={LoginForm}/>
  //   </Tab.Navigator>
  // </NavigationContainer>
  <AuthProvider>
      <Router />
    </AuthProvider>
        
  )
}

export default App;