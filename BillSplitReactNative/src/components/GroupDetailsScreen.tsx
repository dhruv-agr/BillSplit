import React, {useState, useContext,useEffect} from 'react';
import {FlatList,Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import type {GroupDetailResponse,PropsGroupDetailsScreen} from './Types';
import { AuthContext } from '../contexts/Auth';
import getSecured from '../requests/getSecured';
import GroupDetailItem from './GroupDetailItem';
import IconAnt from 'react-native-vector-icons/AntDesign';


// type GroupDetailsScreenProps = {
//     groupName: string;
    
// }
let groupDetails:GroupDetailResponse;
let groupDetailsList:any=[];
let url = 'groupDetail?id=';

function compare(a:any,b:any) {
  if (a.creation_date < b.creation_date)
     return 1;
  if (a.creation_date > b.creation_date)
    return -1;
  return 0;
}



const GroupDetailsScreen = ({navigation,route}:PropsGroupDetailsScreen) => {

  const {authData, loading,signIn,signOut} = useContext(AuthContext);
  const [apidata, setApidata] = useState<any | null>(null);
  navigation.setOptions({title:route.params.groupName})

  // let memberList:any=[];

  useEffect(() => {
    if(authData){
      getSecured(authData,url+route.params.groupId).then((res) => {
        console.log('response of groupDetail call is: ' +JSON.stringify(res));
        groupDetails=res as GroupDetailResponse;
        groupDetailsList = [...groupDetails.expenses_list, ...groupDetails.payments_list];
        // memberList = [...groupDetails.members_list];
        console.log('concat list is : ' + groupDetailsList[0].creation_date);
        // console.log('group member list is: ' + memberList);
        groupDetailsList.sort(compare);
        setApidata(groupDetailsList);
      });
    }
  }, []); 
  return (
    <>
        {/* <Text style={{color:'white',fontSize:25}}>THIS IS GROUP {route.params.groupName} DETAILS SCREEN</Text> */}
            {/* <Button title='test navigation' onPress={()=>navigation.navigate('GroupDetailsScreen')}></Button> */}
        
        <FlatList
          data={apidata}
          // keyExtractor={item => item.user_group_id.toString()}
          renderItem={({item}) => <GroupDetailItem obj={item}/>}
          contentContainerStyle={styles.list}
        />

        <Pressable onPress={()=>{
          console.log('add expense button clicked');
          navigation.navigate('AddExpenseForm',{memberList:apidata});
          }}>
          <Text style={styles.groupHeader}>Add Expense</Text>
        </Pressable>
    </>
    
  )
}

const styles = StyleSheet.create({
  groupHeader:{
    fontSize:25
  },
  list:{

  }
    
})

export default GroupDetailsScreen;