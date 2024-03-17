import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

type GroupDetailItemProps = {
    obj: any;
    
}

const GroupDetailItem = ({obj}:GroupDetailItemProps) => {
  return (
    
    <View style={ styles.container}>
        
        <View>
            <Text style={styles.headingText}>{obj.amount}</Text>
            <Text style = {styles.status}>Status</Text>
        </View>
        
    </View>
  
    
   
    
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'white',
    },
    status: {
        fontSize: 12,
        paddingHorizontal: 8,
        color:'white',
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
        flex: 1, flexDirection:'row', justifyContent:'flex-start',alignItems:'flex-start',
        
    },
    groupImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 14
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    
})

export default GroupDetailItem;