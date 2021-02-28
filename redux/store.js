import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-devtools';
import AsyncStorage from '@react-native-async-storage/async-storage';
const userInfo = AsyncStorage.getItem("user");
console.log(`Am a user ${userInfo}`)
const getData =async()=>{
    try{
      const name =  await AsyncStorage.getItem("name");
      console.log(`Am from store:${name}`)
      const email =  await AsyncStorage.getItem("email");
      const password =  await AsyncStorage.getItem("password");
      console.log(password);
      if(name||email||password){
         return{name,email,password}
      }
      else{
          return null
      }
    }
    catch(error){
        console.log(errer.message)
    }
}

const initialState = {
    user:getData()
}
export const store = createStore(
    reducers,
applyMiddleware(thunk)
)