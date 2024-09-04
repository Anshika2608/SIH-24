import React,{useState} from 'react'
import {Text,Button, TextInput} from 'react-native-paper'
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams } from 'expo-router';
const Wave = require('@/assets/images/auth/wave.png')
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";
import { useRoute } from '@react-navigation/native';
const consumerReg = () => {
    const { role } = useLocalSearchParams();
    const toast = useToast();
    const [userData, setUserData] = useState({
      Personal: '',
      Name: '',
      Password: '',
      DOB: '',
      State: '',
      City: '',
      Village: '',
      Gov_id_of_Consumer: '',
      House_No: '',
      Mobile_No: '',
      Email: '',
      Family_Details: '',
      No_of_family_Members: '',
    });
  
  
    const handleSubmit = async () => {
      try {
        const response = await axios.post('https://login-signup-sih.onrender.com/Consumer/signup',   userData);
        if (response.status === 200) {
          setUserData({
            Personal: '',
            Name: '',
            Password: '',
            DOB: '',
            State: '',
            City: '',
            Village: '',
            Gov_id_of_Consumer: '',
            House_No: '',
            Mobile_No: '',
            Email: '',
            Family_Details: '',
            No_of_family_Members: '',
          });
  toast.show("You have successfully registered"),{
    type:"success",
    duration:3000,
    placement:"bottom",
    offset:30,
    animationType:"slide-in"
  }
  console.log(response)
        }
      } catch (error) {
        console.log(error);
        toast.show("Internal Server Error"),{
          type:"success",
          duration:3000,
          placement:"bottom",
          offset:30,
          animationType:"slide-in"
        
        }
    
  
      }
  
    };
    const handleChange = (field:string, value:any) => {
      setUserData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };
  return (
    <ScrollView >
        <View style={styles.container}>
    <Text style={styles.head}  variant="displayMedium">AquaDisha</Text>
<Text style={styles.loginText}>Register</Text>
  <TextInput
        placeholder="Personal"
        value={userData.Personal}
        onChangeText={(text) => handleChange('Personal', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
        placeholder="Name"
        value={userData.Name}
        onChangeText={(text) => handleChange('Name', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
        placeholder="Password"
        value={userData.Password}
        onChangeText={(text) => handleChange('Password', text)}
        secureTextEntry
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
         placeholder="DOB"
        value={userData.DOB}
        onChangeText={(text) => handleChange('DOB', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
        placeholder="State"
        value={userData.State}
        onChangeText={(text) => handleChange('State', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
        placeholder="City"
        value={userData.City}
        onChangeText={(text) => handleChange('City', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
         placeholder="Village"
        value={userData.Village}
        onChangeText={(text) => handleChange('Village', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
         placeholder="Government ID"
        value={userData.Gov_id_of_Consumer}
        onChangeText={(text) => handleChange('Gov_id_of_Consumer', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
         placeholder="House No."
        value={userData.House_No}
        onChangeText={(text) => handleChange('House_No', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
        placeholder="Mobile No."
        value={userData.Mobile_No}
        onChangeText={(text) => handleChange('Mobile_No', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
         placeholder="Email"
        value={userData.Email}
        onChangeText={(text) => handleChange('Email', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
      <TextInput
       placeholder="Family Details"
        value={userData.Family_Details}
        onChangeText={(text) => handleChange('Family_Details', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />
     <TextInput
        placeholder="Family members"
        value={userData.No_of_family_Members}
        onChangeText={(text) => handleChange('No_of_family_Members', text)}
        style={styles.input}
        mode='outlined'
        outlineColor='#e0e7e5'
        textColor='black'
        activeOutlineColor={Colors.bgDark}
        outlineStyle={styles.outline}
      />

 
 <Button textColor='white'style={styles.logins}  onPress={handleSubmit} >
  Register
 </Button>
 <Image source={Wave} style={styles.wave}/>
 </View>
  </ScrollView>
  )
}


export default consumerReg

const styles = StyleSheet.create({
    container: {
height: '100%',
  backgroundColor: Colors.bg,
 flex: 1,
alignItems: 'center',
paddingTop:70,
gap:8

    },
    head:{
        color:"#00b19f",
        fontFamily:"Allura",
        },
        loginText:{
fontSize:32,
fontWeight:700,
color:"#0b0e0e",
marginLeft:-200,
marginVertical:10
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
}})
