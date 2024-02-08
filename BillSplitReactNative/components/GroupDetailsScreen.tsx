import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import type {PropsGroupDetailsScreen} from './Types';


// type GroupDetailsScreenProps = {
//     groupName: string;
    
// }

const GroupDetailsScreen = ({route}:PropsGroupDetailsScreen) => {
  return (
    <>
        <Text style={{color:'white',fontSize:25}}>THIS IS GROUP {route.params.groupName} DETAILS SCREEN</Text>
    </>
    
  )
}

const styles = StyleSheet.create({

    
})

export default GroupDetailsScreen;