import React, {useState,useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../contexts/Auth';

type GroupDetailItemProps = {
    obj: any;
    
}

const FriendDetailItem = ({obj}:GroupDetailItemProps) => {
    const {authData, loading,signIn,signOut} = useContext(AuthContext);

    let listItem, borrowText, paidByString='Payers: ';
    let date,d,month,iconName='user', iconColor='green', isInvolved=false;
    date = new Date(obj.creation_date);
    d = date.getDate();
    month = date.toLocaleString('default', { month: 'short' });
    // console.log('api response single object is : ' + JSON.stringify(obj));



    listItem =  <View style={styles.container}>
                                
                    <Icon name={iconName} size={24} color={iconColor} style={styles.iconExpense}/>
                    <Text style={styles.status}>{obj.firstname + ' ' + obj.lastname}</Text>

                </View>
    

    
    return (

    
    <>
        {listItem}
    </>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginBottom: 4,
        flexDirection:'row', justifyContent:'flex-start',alignItems:'center',
        // backgroundColor:'magenta'
        
    },
   
    iconPayment:{
        // marginRight:20,
        flex:1,
        // backgroundColor:'blue'

    },
    iconExpense:{
        // marginRight:20,
        flex:1,
        // backgroundColor:'grey'

    },

    expenseContainer:{
        flexDirection:'column',
        flex:4.5,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        // backgroundColor:'brown'
    },


    expenseDescription:{
        fontSize:17,
        fontWeight: 'bold',
        color:'white',

    },

    expenseBorrowContainer:{
        flexDirection:'column',
        flex:3.5,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        // backgroundColor:'grey'
    },
    status: {
        fontSize: 20,
        color:'white',
        flex:7
    },
    borrow:{
        fontSize: 14,
        color:'#d65f45',
        flex:7
    },
    notInvolved:{
        fontSize: 14,
        color:'white',
        flex:7
    },
    paidBy:{
        fontSize: 14,
        color:'#adadad',
        flex:7
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'white',
    },


    
})

export default FriendDetailItem;