import React, {useState,useEffect,useContext} from 'react';
import {FlatList,Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from "react-native-config";
import { AuthContext } from '../contexts/Auth';
import getSecured from '../requests/getSecured';
import { GetFriendsResponse } from './Types';
import FriendDetailItem from './FriendDetailItem';




console.log("Friends is called");



let url = 'friends?email=';
let friends:GetFriendsResponse;


const Friends = () => {
  const {authData, loading,signIn,signOut} = useContext(AuthContext);

  const [apidata, setApidata] = useState<any | null>(null);

  useEffect(() => {
    if(authData){
      getSecured(authData,url+authData.username).then((res) => {
        console.log('response of friends get call is: ' +JSON.stringify(res));
        friends=res as GetFriendsResponse;
        console.log('friends list is : ' + friends);
        
        setApidata(friends);
      });
    }
  }, []); 
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Friends!</Text>
    // </View>
    <>
    {/* <Text style={{color:'white',fontSize:25}}>THIS IS GROUP {route.params.groupName} DETAILS SCREEN</Text> */}
        {/* <Button title='test navigation' onPress={()=>navigation.navigate('GroupDetailsScreen')}></Button> */}
    
    <FlatList
      data={apidata}
      // keyExtractor={item => item.user_group_id.toString()}
      renderItem={({item}) => <FriendDetailItem obj={item}/>}
      contentContainerStyle={styles.list}
    />
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
export default Friends;