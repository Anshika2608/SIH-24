// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import { Link } from 'expo-router'
// const index = () => {
//   return (
//    <View>
//       <Text>Home Screen</Text>
//       <Link href="/GP">
//         <Text>Go to Asset </Text>
//       </Link>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });
// export default index
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card, Text,RadioButton } from 'react-native-paper';
import RegConsumer from '@/components/Auth/RegConsumer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Colors } from '@/constants/Colors';
const Wave = require('@/assets/images/auth/wave.png')
import gp from '@/assets/images/auth/gp.png';
import consumer from'@/assets/images/auth/consumer.png';
import contractor from '@/assets/images/auth/contractor.png';
import local from '@/assets/images/auth/local.png';
import phed from '@/assets/images/auth/phed.png';
import arrow from '@/assets/images/auth/arrow.png';
import { useRouter } from 'expo-router';


const Index = () => {
  const [value, setValue] = useState("");
  const checked = value!== ""; 
  const [loaded, error] = useFonts({
    'Allura': require('../assets/fonts/Allura-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

const router = useRouter()


  const handleButtonClick = () => {
    router.push({ pathname: '/(Auth)/login', params: { role: value } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}  variant="displayMedium">AquaDisha</Text>
      <Text style={styles.head2} variant={'titleLarge'}>Continue as</Text>
   
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}  >
      <View style={styles.radio}>
        <Image source = {gp} style={styles.icon}/>
        <Text style={styles.radtext} >Gram Panchayat</Text>
        <RadioButton value="Gram Panchayat" color={Colors.bgDark} />
      </View>
      <View style={styles.radio}>
        <Image source = {contractor} style={styles.icon}/>
        
        <Text style={styles.radtext} >Contractor</Text>
        <RadioButton value="Contractor"  color={Colors.bgDark}/>
      </View>  
      <View style={styles.radio}>
        <Image source = {local} style={styles.icon}/>
        <Text style={styles.radtext}>Local Technician</Text>
        <RadioButton value="Local Technician"  color={Colors.bgDark}/>
      </View>  
      <View style={styles.radio}>
        <Image source = {consumer} style={styles.icon}/>
        <Text style={styles.radtext} >Consumer</Text>
        <RadioButton value="Consumer" color={Colors.bgDark} />
      </View> 
      <View style={styles.radio}>
        <Image source = {phed} style={styles.icon}/>
        <Text style={styles.radtext} >PHED Officials</Text>
        <RadioButton value="PHED Officials" color={Colors.bgDark} />
      </View> 
      </RadioButton.Group>
      <Button buttonColor={Colors.bgDark} textColor="white" icon={arrow} contentStyle={styles.button} style={styles.buttons} onPress={handleButtonClick} disabled={!checked}>Next</Button>
      <Image source={Wave} style={styles.image}/>
    </View>
  )
};
export default Index;
const styles = StyleSheet.create({
  container: {
width: '100%',
backgroundColor: Colors.bg,
paddingTop:70,
flex:1,
alignItems:'center',
paddingVertical:20,
gap:20

  },
head:{
color:"#00b19f",
fontFamily:"Allura",
},
head2:{
  color:"black",
  fontWeight:700,
  alignSelf:'flex-start',
  paddingLeft:30,

},
radio:{
  flexDirection: 'row',
backgroundColor:"white",
marginBottom:20,
height:50,
width:300,
borderRadius:5,
justifyContent: 'space-between',
alignItems: 'center',

},
radtext:{
color:"black",
fontSize:14,
marginLeft:-30,
fontWeight:"bold"
},
group:{
  flex:1,
},
icon:{
paddingLeft:20,
marginLeft:20,
},
image:{
alignContent:"flex-end",
marginTop:-120,
zIndex:1,

},
button:{
  flexDirection:"row-reverse",
  width:300,

},
buttons:{
  borderRadius:8,
  zIndex:100,
  opacity:1
}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default index