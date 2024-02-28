import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupScreen from './GroupScreen'
import GroupDetailsScreen from './GroupDetailsScreen';
import type {PropsGroupDetailsScreen,RootStackParamList} from './Types';

// type GroupStackScreenProps = {
//     groupName: string;
//     imageUrl: string;
// }

// type RootStackParamList = {
//     Groups: undefined;
//     GroupDetailsScreen:{groupName:string}
//   };

const GroupStack = createNativeStackNavigator<RootStackParamList>();

const GroupStackScreen = () =>{
  return (
    <GroupStack.Navigator screenOptions={{headerStyle: {
      backgroundColor: '#333945',
    },
    headerTintColor:'white',
    }}
    
      >
      <GroupStack.Screen name="GroupScreen" component={GroupScreen} options={{title :'Groups'}} />
      <GroupStack.Screen name="GroupDetailsScreen" component={GroupDetailsScreen}  options={({route}) => ({
    title: route.params.groupName,
  })}/>
    </GroupStack.Navigator>
  );
}





export default GroupStackScreen;