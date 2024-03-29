import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from '../screens/LoginForm';

console.log("AuthStack is called");

const Stack = createNativeStackNavigator();


export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="LoginForm" component={LoginForm} />
    </Stack.Navigator>
  );
};
