import { ScrollView} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";
export default function RegConsumer() {
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
          // Clear user data after successful registration
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
      } else if(response.status === 403) {
        toast.show(response.data.error._message),{
          type:"success",
          duration:3000,
          placement:"bottom",
          offset:30,
          animationType:"slide-in"
        
        }
        
      }
    } catch (error) {
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
   <ScrollView  >
      <Button icon="camera" mode="contained" onPress={handleSubmit}>
    Press me
  </Button>
  <TextInput
        label="Personal"
        value={userData.Personal}
        onChangeText={(text) => handleChange('Personal', text)}
      />
      <TextInput
        label="Name"
        value={userData.Name}
        onChangeText={(text) => handleChange('Name', text)}
      />
      <TextInput
        label="Password"
        value={userData.Password}
        onChangeText={(text) => handleChange('Password', text)}
        secureTextEntry
      />
      <TextInput
        label="DOB"
        value={userData.DOB}
        onChangeText={(text) => handleChange('DOB', text)}
      />
      <TextInput
        label="State"
        value={userData.State}
        onChangeText={(text) => handleChange('State', text)}
      />
      <TextInput
        label="City"
        value={userData.City}
        onChangeText={(text) => handleChange('City', text)}
      />
      <TextInput
        label="Village"
        value={userData.Village}
        onChangeText={(text) => handleChange('Village', text)}
      />
      <TextInput
        label="Government ID"
        value={userData.Gov_id_of_Consumer}
        onChangeText={(text) => handleChange('Gov_id_of_Consumer', text)}
      />
      <TextInput
        label="House No."
        value={userData.House_No}
        onChangeText={(text) => handleChange('House_No', text)}
      />
      <TextInput
        label="Mobile No."
        value={userData.Mobile_No}
        onChangeText={(text) => handleChange('Mobile_No', text)}
      />
      <TextInput
        label="Email"
        value={userData.Email}
        onChangeText={(text) => handleChange('Email', text)}
      />
      <TextInput
        label="Family Details"
        value={userData.Family_Details}
        onChangeText={(text) => handleChange('Family_Details', text)}
      />
     <TextInput
        label="Family members"
        value={userData.No_of_family_Members}
        onChangeText={(text) => handleChange('No_of_family_Members', text)}
      />
  </ScrollView>
  );
}