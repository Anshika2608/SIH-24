import React,{useState} from 'react'
import {Text,Button, TextInput} from 'react-native-paper'
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams,useRouter } from 'expo-router';
const Wave = require('@/assets/images/auth/wave.png')
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";
import { useRoute } from '@react-navigation/native';
// import { useRouter } from '@react-navigation/native';

const consumerLog = () => {
    const toast = useToast();
    const route = useRouter();
    const [userInfo, setUserInfo] = useState({
        Gov_id_of_Consumer: '',
        Password: '',
      });
      const handleInputChange = (name:string, value:any) => {
        setUserInfo({ ...userInfo, [name]: value });
      };
const handleLogin = async() => {
    try{
const response = await axios.post('https://login-signup-sih.onrender.com/Consumer/login',userInfo)
if(response.status == 200){
    toast.show("You have successfully login"),{
        type:"success",
        duration:3000,
        placement:"bottom",
        offset:30,
        animationType:"slide-in"
      }
      route.replace('/Consumer/(tab)'); 
 
}

else if(response.status == 403){
    toast.show("Invalid Credential"),{
        type:"failure",
        duration:3000,
        placement:"bottom",
        offset:30,
        animationType:"slide-in"
      }
}
    }catch(err){
        console.log(err)
        toast.show("Invalid Credential"),{
            type:"failure",
            duration:3000,
            placement:"bottom",
            offset:30,
            animationType:"slide-in"
          }
    
}
setUserInfo({
    Gov_id_of_Consumer: '',
    Password: '',
})
console.log("hii")
}


    const { role } = useLocalSearchParams();
  return (
    <View style={styles.container}>
    <Text style={styles.head}  variant="displayMedium">AquaDisha</Text>
<Text style={styles.loginText}>Login</Text>
 <TextInput mode='outlined'placeholder='Government id' outlineColor='#e0e7e5' activeOutlineColor={Colors.bgDark} textColor='black' outlineStyle={styles.outline} style={styles.input} value={userInfo.Gov_id_of_Consumer}
 onChangeText={(text) => handleInputChange('Gov_id_of_Consumer', text)}
 />

 <TextInput  mode='outlined' placeholder="Password" outlineColor='#e0e7e5' activeOutlineColor={Colors.bgDark} textColor='black' outlineStyle={styles.outline}  style={styles.input} value = {userInfo.Password}
 onChangeText={(text) => handleInputChange('Password', text)}
 />
 <Button textColor='white'style={styles.logins} onPress={handleLogin} >
    Login
 </Button>
 <Image source={Wave} style={styles.wave}/>
  </View>
  )
}

export default consumerLog

const styles = StyleSheet.create({
    container: {
  width: '100%',
  backgroundColor: Colors.bg,
  paddingTop:70,
  flex:1,
  alignItems:'center',
  paddingVertical:20,
  gap:30
  
    },
    head:{
        color:"#00b19f",
        fontFamily:"Allura",
        },
        loginText:{
fontSize:32,
fontWeight:700,
color:"#0b0e0e",
marginLeft:-200
        },
        logins:{
            width:300,
            backgroundColor:Colors.bgDark,
            borderRadius:12,
            marginTop:60,
            
                },
                wave:{
                    alignContent:"flex-end",
              marginBottom:-50,
              zIndex:1,
                  },
outline:{borderRadius:12,backgroundColor:"white"},
input:{
    width:300,height:50
}
})