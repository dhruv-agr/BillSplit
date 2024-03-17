import React, {useState,useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../contexts/Auth';

type GroupDetailItemProps = {
    obj: any;
    
}

const GroupDetailItem = ({obj}:GroupDetailItemProps) => {
    const {authData, loading,signIn,signOut} = useContext(AuthContext);

    let listItem, borrowText, paidByString='Payers: ';
    let date,d,month,iconName='money-bill', iconColor='green', isInvolved=false;
    date = new Date(obj.creation_date);
    d = date.getDate();
    month = date.toLocaleString('default', { month: 'short' });
    // console.log('api response single object is : ' + JSON.stringify(obj));

    if(obj.payer){

        listItem =  <View style={styles.container}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>{d}</Text>
                            <Text style={styles.month}>{month}</Text>
                        </View>
            
                        <Icon name={iconName} size={24} color={iconColor} style={styles.iconPayment}/>
                        <Text style={styles.status}>{obj.payer} paid {obj.recipient} {obj.amount}</Text>

                    </View>
        
        iconName='money-bill';
        console.log(d+month);
    }
    else{
        iconName='receipt';
        iconColor='white';
        if(authData){
            // console.log('inside if  auth data of detail item ' + authData.username);
            let item:any;
            for(item of obj.participantList){
                // console.log(JSON.stringify(item));
                if(authData.username === item.email){
                    isInvolved=true;
                }
            }
            
        }

        isInvolved ? obj.paidByList.map((user:any) => paidByString= paidByString + ', ' + user.firstname): paidByString='You are not involved';

        if(isInvolved){
            borrowText= <View style={styles.expenseBorrowContainer}>
                            <Text style={styles.borrow}>you borrowed</Text>
                            <Text style={styles.borrow}>420</Text>
                        </View>
        }
        else{
            borrowText= <View style={styles.expenseBorrowContainer}>
                            <Text style={styles.notInvolved}>not involved</Text>
                            
                        </View>
        }

        console.log('value of is involved is: ' + isInvolved);
        listItem =  <View style={styles.container}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>{d}</Text>
                            <Text style={styles.month}>{month}</Text>
                
                        </View>
            
                        <Icon name={iconName} size={45} color={iconColor} style={styles.iconExpense}/>
                        <View style={styles.expenseContainer}>
                            <Text style={styles.expenseDescription}>{obj.description}</Text>
                            <Text style={styles.paidBy}>
                                {paidByString} 
                            </Text>
                            
                        </View>
                        {borrowText}
                        
                        

                    </View>
        
    }
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
    date:{
        fontSize:20,
        
    },
    month:{
        fontSize:15
    },
    dateContainer:{
        flexDirection:'column',
        // marginRight:20,
        flex:1,
        // backgroundColor:'orange'
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
        fontSize: 14,
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

export default GroupDetailItem;