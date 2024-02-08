import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
      <View style={{flex: 0.5,flexDirection:'row', backgroundColor: '#39535A'}}>
        <View style={{flex: 1, alignItems:'center', marginTop:'2%'}}>
          <Icon name ="group" color="grey"size={25}/>
          <Text style = {{color:"grey"}}>Groups</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', marginTop:'2%'}}>
          <Icon name ="user" color="grey"size={25}/>
          <Text style = {{color:"grey"}}>Friends</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', marginTop:'2%'}}>
          <Icon name ="fire" color="grey"size={25}/>
          <Text style = {{color:"grey"}}>Activity</Text>
        </View>
        <View style={{flex: 1, alignItems:'center', marginTop:'2%'}}>
          <Icon name ="user-circle" color="grey"size={25}/>
          <Text style = {{color:"grey"}}>Profile</Text>
        </View>
      </View>
    
  )
}

export default Footer;