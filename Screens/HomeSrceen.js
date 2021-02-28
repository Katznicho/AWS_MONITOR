import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, Image,TouchableOpacity,
  ImageBackground} from 'react-native';
const imageUrl = {
  uri:"https://wallpaperaccess.com/full/1556608.jpg"
}
const logoUrl = {
   uri:"http://wimea.mak.ac.ug/wp-content/themes/masterstudy/assets/img/tmp/logo_transparent.png"

}
function HomeScreen({navigation}) {
    return (
      <SafeAreaView style ={styles.container} >
          <View>
        
            <Image
            source = {logoUrl}
            style = {styles.tinyLogo}
            />
      
          <View style={styles.button} >
        {/* <Button title="Login"  color= "green"  
        onPress={()=>navigation.navigate("Login")}>
          <Text style={{color:"black"}}>Login</Text>
          </Button> */}

        <TouchableOpacity style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.button}>
        {/* <Button title="Register" color="black"
        onPress ={()=>navigation.navigate("Register")}
        /> */}

<TouchableOpacity style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>navigation.navigate("Register")}>
              <Text style={styles.buttonTextStyle}>Register</Text>
            </TouchableOpacity>
        </View>
    
          </View>

      </SafeAreaView>
    );
  }

  export default HomeScreen;
  const styles = StyleSheet.create({
      container:{
         display:"flex",
         flexDirection:"column"
      },
      button:{
          margin:10,
          color:"#000"
      },
      tinyLogo: {
        width: 300,
        height: 300,
        resizeMode:"contain",
        marginTop:-70,
        marginBottom:-60
      },
      buttonStyle: {
        backgroundColor: 'green',
        borderWidth: 0,
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
        fontWeight:"bold"
      },
   
  })