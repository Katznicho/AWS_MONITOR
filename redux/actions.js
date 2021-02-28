import {USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS , LOGOUT_SUCCESS}  from './constants';

//storage
import AsyncStorage from '@react-native-async-storage/async-storage';
export const registerUser =(user)=>async(dispatch)=>{
try{

  await AsyncStorage.setItem("user", user.name)
  await AsyncStorage.setItem("email", user.email)
  await AsyncStorage.setItem("password", user.password)
  dispatch(registerUserSuccess(user))
  
}
catch(error){
    console.log(error.message)
}
}
const registerUserSuccess = (user) => ({
    type: USER_REGISTER_SUCCESS,
    payload: user
  })

  //login user
  export const loginUser = (user, navigation)=>async(dispatch)=>{

    try{
      //console.log(user)
      dispatch(loginUserSuccess(user))
      navigation.popToTop()
    }
    catch(error){
        console.log(error.message)
    }
    }
    const loginUserSuccess = (user) => ({
        type: USER_LOGIN_SUCCESS,
        payload: user
      })
    
//logout
export const logout = ()=>async(dispatch)=>{
  try{
    await AsyncStorage.removeItem("user")
    await AsyncStorage.removeItem("email")
    await AsyncStorage.removeItem("password")
    dispatch({type:LOGOUT_SUCCESS})
  }
  catch(error){
    console.log(error.message)
  }

}    

