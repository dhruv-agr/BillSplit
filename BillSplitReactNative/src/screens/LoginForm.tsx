import React, {useContext, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity,GestureResponderEvent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup'
import { Formik } from 'formik';
import Config from "react-native-config";
import { AuthContext } from '../contexts/Auth';
// import {getAuth} from '../contexts/Auth';



const userSchema = Yup.object({
  // firstName: Yup.string().required('First Name is required'),
  // lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is not valid').required('Required'),
  password: Yup.string().min(7, 'Min of 7 characters').required('Required'),
});
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
  
})
// const HOST_IP = Config.HOST_IP;
// let loginRes;
// async function login(creds:any){
//   try {
//     console.log("login function called");
    
//     const response = await fetch(
//       `${HOST_IP}authenticate`,{
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(creds), // body data type must match "Content-Type" header
//       }
//     );
//     loginRes = await response.json();
//     console.log(loginRes);
//     if(loginRes === undefined){
//       return 'undefined response received in login';
//     }
//     return loginRes;
//   } catch (error) {
//     console.log("inside error while fetching attempting login ");
//     console.error(error);
//   }
// }
const {authData, loading,signIn,signOut} = useContext(AuthContext);

const LoginForm = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Login to Bill Split</Text>
        <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={userSchema}
          onSubmit={ values => {
            console.log(values);
            // signIn(values.email,values.password);
        
          }}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleSubmit,
            handleReset,
            /* and other goodies */
            }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Email</Text>
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>
                      {errors.email}
                    </Text>
                  )}
                  
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder="abc@xyz.com"
                  
                  />
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password</Text>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>
                      {errors.password}
                    </Text>
                  )}
                  
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder=""
                  
                  />
              </View>
              
            
              <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={handleSubmit as (e?: GestureResponderEvent) => void}
                >
                  <Text style={styles.primaryBtnTxt}>Login</Text>

                </TouchableOpacity>
                
                {/* <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={ () => {
                    handleReset();
                    
                  }}
                >
                  <Text style={styles.secondaryBtnTxt}>Reset</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          )}
          </Formik>
    </View>
    
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
    backgroundColor:'#505050',
    borderRadius:20,
    width:'75%'
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  inputColumn: {
    flexDirection: 'column',
    // alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  inputStyle: {
    padding: 8,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#16213e',
    backgroundColor:'white',
    color:'black'
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: 'green',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});

export default LoginForm;