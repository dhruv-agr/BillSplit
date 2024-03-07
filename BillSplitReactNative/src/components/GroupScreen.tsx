import React, {useState,useEffect,useContext} from 'react';
import {FlatList,Alert, Modal, StyleSheet, Text, Pressable, View,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupsListItem from './GroupsListItem';
import type {Props,GroupsType} from './Types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Config from "react-native-config";
import { AuthContext } from '../contexts/Auth';


const {authData, loading,signIn,signOut} = useContext(AuthContext);

const HOST_IP = Config.HOST_IP;

console.log('host ip in group screen is : '+HOST_IP)

let listOfGroupsRes:Array<GroupsType>;
async function fetchGroups(myheaders:any):Promise<GroupsType[]>{
  try {
    console.log("Fetch groups original is called");

    const response = await fetch(
      `${HOST_IP}groups`,
      {headers: myheaders}
    );
    listOfGroupsRes = await response.json();
    console.log(listOfGroupsRes);
    if(listOfGroupsRes === undefined){
      return [];
    }
    
  } catch (error) {
    console.log("inside error while fetching groups ");
    console.error(error);
  }
  return listOfGroupsRes;
}


const myHeaders = new Headers();
    if(authData){
      console.log("inside group screen token is: " + authData.password);
      myHeaders.append('Authorization', "Bearer " +authData.password);
    }
   
  fetchGroups(myHeaders).then((res) => listOfGroupsRes=res);





const GroupScreen = ({navigation}:Props) => {
  const [apiResponse, setApiResponse] = useState<GroupsType[]>([{user_group_name:'Loading',user_group_id:0,created_by:"factory",creation_date:"NA"}]);
  useEffect(() => {
    
  },[]);

  return (
    
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>
     
        {/* <Button title='test navigation' onPress={()=>navigation.navigate('GroupDetailsScreen')}></Button> */}
        <FlatList
            data={listOfGroupsRes}
            keyExtractor={item => item.user_group_id.toString()}
            //data={[mydata]}
            renderItem={({item}) => <Pressable onPress={()=>navigation.navigate('GroupDetailsScreen', {groupName:item.user_group_name})}>
              <GroupsListItem groupName={item.user_group_name} imageUrl={'https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png'}/></Pressable>}
            contentContainerStyle={styles.list}
          />
    </View>
    
    
  )
}



const styles = StyleSheet.create({
  
  list:{
    marginHorizontal:10

  }
});

export default GroupScreen;