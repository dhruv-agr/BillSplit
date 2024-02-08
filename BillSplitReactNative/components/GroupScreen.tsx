import React, {useState,useEffect} from 'react';
import {FlatList,Alert, Modal, StyleSheet, Text, Pressable, View,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupsListItem from './GroupsListItem';
import type {Props} from './Types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';



const styles = StyleSheet.create({
  
  list:{
    marginHorizontal:10

  }
});
// const mydata = ()=>{
//   const response = fetch('localhost:8080/groups');
//   console.log(response);
// }
type GroupsType = {
  user_group_name: string
  user_group_id: number
}

let listOfGroupsRes:Array<GroupsType>;
async function fetchGroups(){
  try {
    const response = await fetch(
      'http://10.0.2.2:8080/groups',
    );
    listOfGroupsRes = await response.json();
    console.log(listOfGroupsRes);
    if(listOfGroupsRes === undefined){
      return [];
    }
    return listOfGroupsRes;
  } catch (error) {
    console.error(error);
  }
}

fetchGroups();


const GroupScreen = ({navigation}:Props) => {
  const [apiResponse, setApiResponse] = useState<GroupsType[]>([{user_group_name:'Loading',user_group_id:0}]);
  useEffect(() => {
    fetchGroups().then((res) => setApiResponse(res !==undefined ? res : [])
      
      
    );
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

export default GroupScreen;