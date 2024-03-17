import React, {useState,useEffect,useContext} from 'react';

import Config from "react-native-config";
import { AuthData } from "../services/authService";
import { AuthContext } from '../contexts/Auth';



const HOST_IP = Config.HOST_IP;


let response:Response;
async function getSecured<T>(authData:AuthData, url:string):Promise<T>{
  try {
    console.log("get secured generic is called with url: " +url);
    const myHeaders = new Headers();
    if(authData){
      console.log("inside get secured, token is: " + authData.password);
      myHeaders.append('Authorization', "Bearer " +authData.password);
    }
    let requestUrl = HOST_IP + url;
    let options : any = {};

    if(myHeaders){
      options.headers = myHeaders;
    }
  
    response = await fetch(
      requestUrl,
      options
    );
    
    // console.log(response.json());

    
  } catch (error) {
    console.log("inside error while get secured call");
    console.error(error);
  }
  return await response.json();
}

export default getSecured;