import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image,Button} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupScreen from './GroupScreen'
import GroupDetailsScreen from './GroupDetailsScreen';
import type {PropsGroupDetailsScreen,RootStackParamList,PropsGroupStackScreen} from './Types';
import AddGroupForm from '../screens/AddGroupForm';
import AddExpenseForm from '../screens/AddExpenseForm';


// type GroupStackScreenProps = {
//     groupName: string;
//     imageUrl: string;
// }

// type RootStackParamList = {
//     Groups: undefined;
//     GroupDetailsScreen:{groupName:string}
//   };

const GroupStack = createNativeStackNavigator<RootStackParamList>();
// 
function  GroupStackScreen({navigation}:PropsGroupStackScreen){
  return (
    <GroupStack.Navigator screenOptions={{headerStyle: {
      backgroundColor: '#333945',
      },
      headerTintColor:'white',
      }}>


      <GroupStack.Screen 
        name="GroupScreen" 
        component={GroupScreen} 
        options={{
          title :'Groups',
          headerRight: () => (

            <Pressable onPress={()=>{
              console.log('add group button clicked');
              navigation.navigate('AddGroupForm');
              }}>
              <IconAnt name='addusergroup' size ={25} />
            </Pressable>
            
          ),
          }} 
      />
    
      <GroupStack.Screen name="GroupDetailsScreen" component={GroupDetailsScreen}  options={{
    
      // headerRight: () => (

        // <Pressable onPress={()=>{
        //   console.log('add expense button clicked');
        //   navigation.navigate('AddExpenseForm');
        //   }}>
        //   <IconAnt name='addusergroup' size ={25} />
        // </Pressable>
        
      // ),
      }}/>
      <GroupStack.Screen name="AddGroupForm" component={AddGroupForm}/>
      <GroupStack.Screen name="AddExpenseForm" component={AddExpenseForm}/>



    </GroupStack.Navigator>
  );
}


export default GroupStackScreen;