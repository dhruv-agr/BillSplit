import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
      <View style={{flex: 0.5,flexDirection:'row-reverse', backgroundColor: '#39535A',alignItems:'center'}}>
        <View style={{flex: 1/6, alignItems:'center', marginTop:'2%'}}>
          <Icon name ="search" color="grey"size={25}/>
          
        </View>
        
      </View>
    
  )
}

export default Footer;