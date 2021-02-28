import React ,{useEffect, useState}from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../redux/actions'
import { StyleSheet, TextInput,Image, Text,TouchableOpacity,ImageBackground, View ,ScrollView, Button, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

//image
 const logoUrl = {
    uri:"http://wimea.mak.ac.ug/wp-content/themes/masterstudy/assets/img/tmp/logo_transparent.png"
 
 }
export default function Login({navigation}) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     const dispatch = useDispatch()
     const handleLoginPress = async ()=>{
         if(email||password){
             try{
                const userInfo = {email,password}
                const storedName =  await AsyncStorage.getItem("name");
                //console.log(`Am from store:${name}`)
                const storedEmail =  await AsyncStorage.getItem("email");
                const storedPassword =  await AsyncStorage.getItem("password");
                if(storedEmail||storedName||storedPassword){
                    dispatch(loginUser(userInfo, navigation))
                    setPassword("");
                    setEmail("");   

                }
                else{
                     setError("Details not found")
                }




             }
             catch(error){
                 console.log(error.message)

             }
    
         }
         else{
             setError("All fields required")
         }

     }
     useEffect(()=>{
      return ()=>{}
     },[error])
    return (
        <ScrollView>

        <View style={styles.container}>
            {error?<View>
                <Text style={styles.errorStyle}>{error}</Text>
            </View>:null}
            <View >
                
                <Image 
                style={styles.tinyLogo}
                source={logoUrl}/>
            
        </View>
        
        <View style={styles.inputs}>
            <View style={styles.input}>
                <Text style={styles.labels}>Email</Text>
               <TextInput
               placeholder="enter email"
               autoCapitalize="none"
               keyboardType="email-address"
               textContentType="emailAddress"
               textAlign="center"
               style = {styles.textInput}
               onChangeText={text=>text.length?setEmail(text):null}
               />
            </View>
            <View style={styles.input}>
                <Text style={styles.labels}>Password</Text>
               <TextInput
               placeholder="enter password"
               autoCapitalize="none"
               textContentType="password"
               textAlign= "center"
               style = {styles.textInput}
               onChangeText={text=>text.length?setPassword(text):null}
               />
            </View>
             <TouchableOpacity style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleLoginPress}>
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
        </View>
        <View  >
       
         <TouchableOpacity style={styles.buttonStyleCancel}
          activeOpacity={0.5}
          onPress={()=>navigation.popToTop()}>
          <Text style={styles.buttonTextStyle}>Cancel</Text>
        </TouchableOpacity>
        </View>         
    </View>
        

        </ScrollView>
        

        
    )
}


const styles = StyleSheet.create({
    container:{
        display:"flex", 
        flexDirection:"column"
    },
    inputs:{
    display:"flex",
    flexDirection:"column",
    marginTop:-10,
    marginLeft:10,
    marginRight:10
    },
    input:{
        margin:5
    },
    text:{
        textTransform:"uppercase",
        textAlign:"center",
        margin:10,
        fontWeight:"bold"
    },
    labels:{
        textTransform:"uppercase",
        textAlign:"center",
        marginTop:5,
        fontWeight:"bold",
        color:"green"
    },
    textInput:{
      height: 40,
      borderColor: '#000',
      borderWidth: 1
    },
    buttonStyle: {
        backgroundColor: 'green',
        borderWidth: 0,
        color: '#000',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        margin:10
      },
      buttonStyleCancel:{
        backgroundColor: 'red',
        borderWidth: 0,
        color: '#000',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        margin:10

      },
      buttonTextStyle: {
        color: '#000',
        paddingVertical: 10,
        fontSize: 16,
      },
      tinyLogo: {
        width: 250,
        height: 250,
        resizeMode:"contain",
        marginBottom:-70,
        marginTop:-70
      },
      errorStyle:{
          textTransform:"uppercase",
          textAlign:"center",
          color:"red"
      }

})

