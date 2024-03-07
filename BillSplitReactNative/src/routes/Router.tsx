import React, { useContext } from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';


import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {AuthContext} from '../contexts/Auth';
import {Loading} from '../components/Loading';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#333945',
  },
};

console.log("Router is called");

export const Router = () => {
  const logincontext = useContext(AuthContext);
  console.log("loading of auth data is: " + logincontext.loading);
  console.log("auth data is : " + logincontext.authData);

  // if (logincontext.loading) {
  //   return <Loading />;
  // }
  return (
    <NavigationContainer theme={MyTheme}>
      {logincontext.authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
