import React, {useState,useEffect,useContext} from 'react';

import Config from "react-native-config";
import { AuthData } from "../services/authService";
import { AuthContext } from '../contexts/Auth';



const HOST_IP = Config.HOST_IP;


let response:Response;
async function postSecured<T>(authData:AuthData, url:string, data:any):Promise<T>{
  try {
    console.log("post secured generic is called with url: " +url);
    const myHeaders = new Headers();
    if(authData){
      console.log("inside post secured, token is: " + authData.password);
      myHeaders.append('Authorization', "Bearer " +authData.password);
    }
    let requestUrl = HOST_IP + url;
    myHeaders.append("Content-Type","application/json");


    let options : any = {};
    options.method='POST';
    options.body=JSON.stringify(data);

    if(myHeaders){
      options.headers = myHeaders;
      
    }

    console.log("request url in post secured is:" + requestUrl);
    console.log("options in post secured method is : " + JSON.stringify(options));
  
    response = await fetch(
      requestUrl,
      options
    );
    
    // console.log(response.json());

    
  } catch (error) {
    console.log("inside error while post secured call");
    console.error(error);
  }
  return await response.json();
}

export default postSecured;