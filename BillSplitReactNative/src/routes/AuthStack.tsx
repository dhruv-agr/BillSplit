import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from '../screens/LoginForm';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginForm} />
    </Stack.Navigator>
  );
};
