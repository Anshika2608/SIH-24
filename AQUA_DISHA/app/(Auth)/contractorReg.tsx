import React,{useState} from 'react'
import {Text,Button, TextInput} from 'react-native-paper'
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams } from 'expo-router';
const Wave = require('@/assets/images/auth/wave.png')
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";
import { useRoute } from '@react-navigation/native';
const contractorReg = () => {
    const { role } = useLocalSearchParams();
    const toast = useToast();
    const [userData, setUserData] = useState({
      Personal: '',
      Name: '',
      Name_of_Company:'',
      Password: '',
      Address_of_Company:'',
      State: '',
      City: '',
      Village: '',
      Type_of_Entity:'',
      Gov_id_of_Contractor: '',
      GST_reg_No :'',
      Mobile_No: '',
      Email: '',
      Work_Exp: '',
      
    });
  
  
    const handleSubmit = async () => {
      try {
        const response = await axios.post('https://login-signup-sih.onrender.com/Contractor/signup',   userData);
        if (response.status === 200) {
          setUserData({
            Personal: '',
      Name: '',
      Name_of_Company:'',
      Password: '',
      Address_of_Company:'',
      State: '',
      City: '',
      Village: '',
      Type_of_Entity:'',
      Gov_id_of_Contractor: '',
      GST_reg_No :'',
      Mobile_No: '',
      Email: '',
      Work_Exp: '',
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
            placeholder="Name of Company"
            value={userData.Name_of_Company}
            onChangeText={(text) => handleChange('Name_of_Company', text)}
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
            placeholder="Address_of_Company"
            value={userData.Address_of_Company}
            onChangeText={(text) => handleChange('Address_of_Company', text)}
            secureTextEntry
            style={styles.input}
            mode='outlined'
            outlineColor='#e0e7e5'
            textColor='black'
            activeOutlineColor={Colors.bgDark}
            outlineStyle={styles.outline}
          />
          <TextInput
             placeholder="GST Registration No"
            value={userData.GST_reg_No}
            onChangeText={(text) => handleChange('GST_reg_No', text)}
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
             placeholder="Gov_id_of_Contractor"
            value={userData.Gov_id_of_Contractor}
            onChangeText={(text) => handleChange('Gov_id_of_Contractor', text)}
            style={styles.input}
            mode='outlined'
            outlineColor='#e0e7e5'
            textColor='black'
            activeOutlineColor={Colors.bgDark}
            outlineStyle={styles.outline}
          />
          <TextInput
             placeholder="Type of Entity"
            value={userData.Type_of_Entity}
            onChangeText={(text) => handleChange('Type_of_Entity', text)}
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
           placeholder="Work_Exp"
            value={userData.Work_Exp}
            onChangeText={(text) => handleChange('Work_Exp', text)}
            style={styles.input}
            mode='outlined'
            outlineColor='#e0e7e5'
            textColor='black'
            activeOutlineColor={Colors.bgDark}
            outlineStyle={styles.outline}
          />
         {/* <TextInput
            placeholder="Family members"
            value={userData.No_of_family_Members}
            onChangeText={(text) => handleChange('No_of_family_Members', text)}
            style={styles.input}
            mode='outlined'
            outlineColor='#e0e7e5'
            textColor='black'
            activeOutlineColor={Colors.bgDark}
            outlineStyle={styles.outline}
          /> */}
    
     
     <Button textColor='white'style={styles.logins}  onPress={handleSubmit} >
      Register
     </Button>
     <Image source={Wave} style={styles.wave}/>
     </View>
      </ScrollView>
      )
    }
    
    
    export default contractorReg
    
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
    