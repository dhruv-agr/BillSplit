import React, {createContext, useState, useContext, useEffect} from 'react';
import Keychain from "react-native-keychain";

import {AuthData, authService} from '../services/authService';

import type {GroupsType} from '../components/Types';
import Config from "react-native-config";


const HOST_IP = Config.HOST_IP;



type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(email:string, password:string): Promise<void>;
  signOut(): void;
};
interface Props {
    children: React.ReactNode;
  }

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<Props> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
   
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      console.log("inside load storage function");
      const credsObject = await Keychain.getGenericPassword();
      if (credsObject) {
        //If there are data, it's converted to an Object and the state is updated.
        const token: AuthData = credsObject;
        console.log("creds password is : " + credsObject.password);
        const myHeaders = new Headers();
        myHeaders.append('Authorization', "Bearer " +token.password);
        fetchGroups(myHeaders).then((res) => {
          console.log("Response status for check token is : " + res?.status);
          if(res?.status !=403){
            setAuthData(token);
          }});//setApiResponse(res !==undefined ? res : [])
        // console.log(ifValidRes);
        
      }
    } catch (error) {
      console.log("error while fetching groups: " +error);
    } finally {
      //loading finished
      console.log("loading storage data finished");
      setLoading(false);
    }
  }

  let listOfGroupsRes:Response;
  async function fetchGroups(myheaders:any){
    try {
      console.log("Fetch groups for token check is called");
      const response = await fetch(
        `${HOST_IP}groups`,
        {headers: myheaders}
      );
      listOfGroupsRes = await response;
      // console.log(listOfGroupsRes);
      if(listOfGroupsRes === undefined){
        undefined;
      }
      return listOfGroupsRes;
    } catch (error) {
      console.log("inside error while fetching groups for check token");
      console.error(error);
    }
  }

  const signIn = async (email:string,password:string) => {
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.

    console.log("sign in function inside auth tsx is called");
    const token = await authService.signIn(
        email,
        password
    );

    console.log("token received after sign in is: " + token.access_token);
    
    let authData :AuthData ={
        password:token.access_token,
        username:email
    }

    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(authData);

    //Persist the data in the Async Storage
    //to be recovered in the next user session.

    await Keychain.setGenericPassword(email, token.access_token);
  };


  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(undefined);

    //Remove the data from Async Storage
    //to NOT be recoverede in next session.
    await Keychain.resetGenericPassword();
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
// function getAuth(): AuthContextData {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// }

export {AuthContext, AuthProvider};
