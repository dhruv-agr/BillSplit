import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

import HomeScreen from '../components/HomeScreen';
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
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
        
      
    </Stack.Navigator>
  );
};
