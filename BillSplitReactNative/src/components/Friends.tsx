import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from "react-native-config";


const HOST_IP = Config.HOST_IP;

console.log('host ip is : '+HOST_IP);

let testRes;
async function fetchTestPage(){
  console.log("fetchTestPage called");
  try {
    const response = await fetch(
      `${HOST_IP}testpage`,
    );
    testRes = await response.json();
    console.log(testRes);
    if(testRes === undefined){
      return [];
    }
    return testRes;
  } catch (error) {
    console.log("inside error while fetching test page res ");
    console.error(error);
  }
}

fetchTestPage();

const Friends = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Friends!</Text>
    </View>
    
  )
}

export default Friends;