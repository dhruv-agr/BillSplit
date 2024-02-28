import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

import Friends from '../components/Friends';
import Activity from '../components/Activity';
import Profile from '../components/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupStackScreen from '../components/GroupStackScreen';
import LoginForm from '../screens/LoginForm';

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

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
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
                else if(route.name === 'LoginForm'){
                    iconName='unlock';
                }

                
                return <Icon name={iconName} size={size} color={highlight} />;
                },
                tabBarActiveTintColor: 'cyan',
                tabBarInactiveTintColor: 'gray',
                headerShown:false,
                tabBarStyle: { backgroundColor: '#2F363F'},
                initialRouteName: "Friends"
            })} >

            <Tab.Screen name="Friends" component={Friends} />
            <Tab.Screen name="Groups" component={GroupStackScreen} />

            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="LoginForm" component={LoginForm}/>
        </Tab.Navigator>
      
    </Stack.Navigator>
  );
};
