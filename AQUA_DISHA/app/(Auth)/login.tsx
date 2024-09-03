import React from 'react'
import {View,StyleSheet,Image} from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Text,Button } from 'react-native-paper';
import person from '@/assets/images/auth/person.png';
import back from '@/assets/images/auth/chevron-back.png';
const Wave = require('@/assets/images/auth/wave.png')

const login = () => {
 const { role } = useLocalSearchParams();
 const router = useRouter();
 const goBack = () => {
  router.replace({ pathname: '/' });
  };
  const handleRegister = () => {
    if(role === 'Consumer'){
     router.replace({pathname:'/(Auth)/consumerReg'})
    }
    else if(role === 'Contractor'){
      router.replace({pathname:'/(Auth)/contractorReg'})
    }
  };
  const handleLogin = () => {
  if(role === 'Gram Panchayat'){
    router.replace({ pathname: '/(Auth)/loginsform',params:{role} });}
    else if(role === 'Gram Panchyat'){
    router.replace({ pathname: '/(Auth)/consumerLog',params:{role} });}
    else if(role === 'Contractor'){
      router.replace({ pathname: '/(Auth)/contractorLog',params:{role} });}
  
  else if(role === 'Local Technician'){
    router.replace({ pathname: '/(Auth)/dailyLog',params:{role} });}
  }

  return (
    <View style={styles.container}>
       <Text style={styles.head}  variant="displayMedium">AquaDisha</Text>
      <View style={styles.card}>
        <View style = {styles.inner}>
<Text style={styles.small}>Continuing as</Text>
<Text style={styles.large}>{role}</Text>
<Button mode= {'outlined'} icon={back} style ={styles.change} textColor={Colors.bgDark} onPress={goBack}>
  Change
</Button>
        </View>
        <Image source={person} style={styles.image}/>
      </View>
        <Text style={styles.you}>You want to</Text>
        <Button textColor='white'style={styles.logins}  onPress={handleLogin}>Log in</Button>
        {(role === 'Consumer' || role === 'Contractor'|| role === "Local Technician") &&  (
        <Button textColor={Colors.bgDark} mode="outlined" style={styles.register} onPress={handleRegister}>
          Register
        </Button>)}
        <Image source={Wave} style={styles.wave}/>
       </View>
  )

}
export default login
const styles = StyleSheet.create({
  container: {
width: '100%',
backgroundColor: Colors.bg,
paddingTop:70,
flex:1,
alignItems:'center',
gap:12

  },
  head:{
    color:"#00b19f",
    fontFamily:"Allura",

    },

    card:{
      backgroundColor:"white",
      width:320,
      height:200,
      flexDirection:"row",
      paddingLeft:20,
      paddingTop:20,
      justifyContent: 'space-between',
      alignItems:"flex-end",
      borderRadius:12

    },
    small:{
      color:"#0b0e0e",
      fontWeight:700,
      fontSize:13,
    },
    inner:{
      flexDirection:"column",
      gap:10,
    },
    image:{
      alignContent:"space-between"
    },
    large:{
      color:"#0b0e0e",
      fontWeight:900,
      fontSize:23,
      marginBottom:40
    },
    change:{
      borderRadius:10,
      marginBottom:20,
    width:130,
borderColor:Colors.bgDark,
      
    },
    you:{
      color:"#0b0e0e",
      fontWeight:900,
      fontSize:19,
      marginBottom:20,
      marginTop:20,
   justifyContent:"flex-start",
   marginLeft:-200
    },
    logins:{
width:300,
backgroundColor:Colors.bgDark,
borderRadius:12

    },
    register:{
width:300,
borderColor:Colors.bgDark,
borderRadius:12
    },wave:{
      alignContent:"flex-end",
marginBottom:-50,
zIndex:1,
    }
})