import React , {useState, useEffect}from 'react'
import { StyleSheet, ScrollView,
    Text, View,Button,TextInput,ImageBackground ,TouchableOpacity , Image} from 'react-native';
import { sub } from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/actions'
//put hia image
const imageUrl = {
    uri:"https://wallpaperaccess.com/full/1556608.jpg"
  }
  const logoUrl = {
    uri:"http://wimea.mak.ac.ug/wp-content/themes/masterstudy/assets/img/tmp/logo_transparent.png"
 
 }
 function RegisterSrceen({navigation}) {
     const [name, setName] = useState(null);
     const [email, setEmail] = useState(null);
     const [password, setPassword] = useState(null);
     const [confirmPassword, setConfirmPassword] = useState(null);
     const [error, setError] = useState('');
     const [submit, setSubmit] = useState({name:"",email:"",password:""});

     const dispatch = useDispatch()
     const handleSubmitPress = ()=>{   
        //  console.log(`good:${full}`) 
        // setDetails({name:name,email:email,password:password }) 
        // if(password === confirmPassword){
        //      console.log(`Object:${full}`)
        //      //dispatch(registerUser(full))
        // }
        // else{
        //     setError("Passwords must match")
        // }
        console.log(`Sub:${submit}`)
        
        console.log(`Am from submit : ${submit.email} namd:${submit.name} pass:${submit.password}`)
        dispatch(registerUser({name:submit.name, email:submit.email, password:submit.password}))
    

     }
    //update name
    const updateName = (name)=>{
        console.log(`name:${name}`)
        setSubmit({...submit , name:name})
        console.log(`submit:${submit.name}`)
    }
    //update email
    const updateEmail= (email)=>{
        
        setSubmit({...submit , email:email})
        console.log(`submit:${submit}`)
    }
    //update password
    const updatePassword= (password)=>{
        setSubmit({...submit , password:password})
        console.log(`submit:${submit}`)
    }
    //update error
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
                    <Text style={styles.labels}>Name</Text>
                   <TextInput
                   placeholder="enter name"
                   autoCapitalize="none"
                   textContentType="username"
                   placeholderTextColor = "#000"
                   textAlign="center"
                   style = {styles.textInput}
                   defaultValue = {name}
                   onChangeText={text=>updateName(text)}
                   />
                </View>
                <View style={styles.input}>
                    <Text style={styles.labels}>Email</Text>
                   <TextInput
                   placeholder="enter email"
                   autoCapitalize="none"
                   keyboardType="email-address"
                   textContentType="emailAddress"
                   textAlign="center"
                   style = {styles.textInput}
                   defaultValue={email}
                   onChangeText = {text=>updateEmail(text)}
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
                   
                   
                   onChangeText={text=>updatePassword(text)}
                   />
                </View>
                <View style={styles.input}>
                    <Text style={styles.labels}>ConfirmPassword</Text>
                   <TextInput
                   placeholder=" confirmpassword"
                   autoCapitalize="none"
                   textContentType="password"
                   textAlign= "center"
                   style = {styles.textInput}
                   onChangeText={text=>setConfirmPassword(text)}
                   />
                </View>

                {/* <Button 
                onPress={handleSubmitPress}
                title="Register"/> */}
                 <TouchableOpacity style={styles.buttonStyle}
                 activeOpacity={0.5}
                onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Register</Text>
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
export default RegisterSrceen

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
