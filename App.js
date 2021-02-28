import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeSrceen';
import Login from './Screens/Login';
import RegisterSrceen from './Screens/RegisterSrceen';
import LandingScreen from './Screens/LandingScreen';
import {store}from './redux/store';
//import {useSelector} from 'react-redux'
//import {Provider} from 'redux';
import {useDispatch, useSelector, Provider} from 'react-redux';
//used contextAPi



//create stacks
const Stack = createStackNavigator();

const AppMenu = ()=>{
  const [users, setUser] = useState(null);
  const [checker , setChecker] = useState(false)
  const state = useSelector(state=>state)

  const {user:{currentUser}} = state;
  //console.log(`currentUser:${currentUser.name}`)
  useEffect(()=>{
    if(currentUser){
      
       setChecker(true)
    }
    else{
      console.log("There is no user")
      setChecker(false)
    }
    return ()=>{}
  },[currentUser])

  return !checker?
  ( 
     <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      title:"WELCOME TO AWS APP",
      headerStyle:{
        backgroundColor:"#1c478e"
      },
      headerTitleStyle:{
        fontWeight:"bold",
        color:"#fff"
      }
    }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen 
        options={{
          title: 'LOGIN',
          headerStyle: {
            backgroundColor: '#1c478e',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"#fff",
            marginLeft:30
          },
        }}
        name="Login" component={Login}></Stack.Screen>
        <Stack.Screen 
        options={{
          title: 'REGISTER',
          headerStyle: {
            backgroundColor: '#1c478e',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"#fff",
            marginLeft:30
          },
        }}
        name="Register"
         component={RegisterSrceen}></Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>   
  ):
  (
        <NavigationContainer>
    <Stack.Navigator 
     screenOptions={{
      title:"AWS APP",
      headerStyle:{
        backgroundColor:"#1c478e"
      },
      headerTitleStyle:{
        fontWeight:"bold",
        color:"#fff",
        
      }
    }}
    initialRouteName="Landing">
        <Stack.Screen name="Landing"

         component={LandingScreen}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>



    
      
);

}


export default function App() {
  const [user, setUser] = useState(null);
  const updateUser = (user)=>{
    console.log('am user')

  }
  return <Provider store={store}>
    <AppMenu/>
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
