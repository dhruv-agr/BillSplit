import React, {useContext, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity,GestureResponderEvent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup'
import { Formik } from 'formik';
import { AuthContext } from '../contexts/Auth';
import postSecured from '../requests/postSecured';
import type {PropsAddExpenseForm,CreateExpenseResponse} from '../components/Types';



console.log("Add Expense form is called");

const userSchema = Yup.object({
  description: Yup.string().min(4, 'Min of 4 characters').required('Required'),
  amount: Yup.number().min(1,'Min of 1 number').required('Required'),
  split_type:Yup.string().required('Required'),
  paidBy:Yup.array(Yup.string())
});
let apiData={
  
    description : "",
    amount: "",
    split_type : "",
    paidBy : [],
    participants : [],
    usergroup_id : ""
  
}




const AddExpenseForm = ({navigation}:PropsAddExpenseForm) => {
const {authData, loading,signIn,signOut} = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Formik
          initialValues={{ description : "",
          amount: "",
          split_type : "",
          paidBy : [],
          participants : [],
          usergroup_id : ""}}
          validationSchema={userSchema}
          onSubmit={ values => {

            console.log(values);

            apiData.description = values.description;
            apiData.amount = values.amount;
            apiData.split_type = values.split_type;
            apiData.participants = values.participants;
            
            // api call to create expense
            if(authData){
              postSecured(authData,'expense',apiData).then((res)=>{
                let jsonRes = JSON.stringify(res);
                console.log( "res of expense creation is: " + jsonRes);
                if(jsonRes!= undefined || jsonRes != null){
                  let myres = res as CreateExpenseResponse;
                  navigation.navigate('GroupDetailsScreen',{groupName:myres.usergroup_name, groupId:myres.groupId})
                }
              }

              );

            }
            
        
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
                  <Text style={styles.heading}>Expense description</Text>
                  {touched.description && errors.description && (
                    <Text style={styles.errorText}>
                      {errors.description}
                    </Text>
                  )}
                  
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.description}
                  onChangeText={handleChange('description')}
                  
                  />
              </View>


              
            
              <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={handleSubmit as (e?: GestureResponderEvent) => void}
                >
                  <Text style={styles.primaryBtnTxt}>Done</Text>

                </TouchableOpacity>
                
                
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

export default AddExpenseForm;