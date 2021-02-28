import React , {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeTab from '../Tabs/HomeTab';
import SettingTab from '../Tabs/SettingTab';
import {useSelector} from 'react-redux';
import Axios from 'axios';

const Tab = createMaterialTopTabNavigator()
const LandingScreen = ({navigation}) => {
  const [weathData , setWeatherData] = useState('');
  
  const state = useSelector(state=>state)
  const {user:{currentUser}} = state;

    return (
    <Tab.Navigator 
     tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },

        style:{fontSize:12}
      }}
    initialRouteName="Home">
      <Tab.Screen name="Home"
      navigation ={navigation} 
      options = {{tabBarLabel:"Home"}}
      component={HomeTab} />
      <Tab.Screen name="Setting" component={SettingTab} />
    </Tab.Navigator>

    )
}

export default LandingScreen

const styles = StyleSheet.create({})
