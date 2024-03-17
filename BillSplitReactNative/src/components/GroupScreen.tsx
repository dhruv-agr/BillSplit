import React, {useState,useEffect,useContext} from 'react';
import {FlatList, StyleSheet, Pressable, View} from 'react-native';
import GroupsListItem from './GroupsListItem';
import type {Props,GroupsType} from './Types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthContext } from '../contexts/Auth';
import getSecured from '../requests/getSecured';



let listOfGroupsRes:Array<GroupsType>;

const GroupScreen = ({navigation}:Props) => {

  const {authData, loading,signIn,signOut} = useContext(AuthContext);
  const [apidata, setApidata] = useState<Array<GroupsType> | null>(null);


  
  useEffect(() => {
    if(authData){
      getSecured(authData,'groups').then((res) => {
        console.log('response of groups call is: ' +JSON.stringify(res));
        listOfGroupsRes=res as Array<GroupsType>;
        setApidata(listOfGroupsRes);
      });
    }
  }, []); 

  return (
    
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>
     
        {/* <Button title='test navigation' onPress={()=>navigation.navigate('GroupDetailsScreen')}></Button> */}
        <FlatList
            data={apidata}
            keyExtractor={item => item.user_group_id.toString()}
            //data={[mydata]}
            renderItem={({item}) => <Pressable onPress={()=>navigation.navigate('GroupDetailsScreen', {groupName:item.user_group_name, groupId:item.user_group_id})}>
              <GroupsListItem groupName={item.user_group_name} imageUrl={'https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png'}/></Pressable>}
            contentContainerStyle={styles.list}
          />
    </View>
    
    
  )
}



const styles = StyleSheet.create({
  list:{
    marginHorizontal:10,
  }
});

export default GroupScreen;