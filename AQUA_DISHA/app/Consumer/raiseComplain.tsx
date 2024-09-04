import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
import axios from 'axios';
import { useToast } from "react-native-toast-notifications";
import { useLocalSearchParams,useRouter } from 'expo-router';





export default function raiseComplain() {
    const toast = useToast();
    const [complainData, setComplainData] = useState({
        description: '',
        locality: '',
        state: '',
        city: '',
        village: '',

    });
    const router=useRouter();
    const { colors } = useTheme();

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('description', complainData.description);
        formData.append('locality', complainData.locality);
        formData.append('village', complainData.village);
        formData.append('city', complainData.city);
        formData.append('state', complainData.state);
        try {
            console.log("Sending data:", complainData); 
            const response = await axios.post('https://sih-backend-fmce.onrender.com/complaint/raiseComplaint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("Response received:", response);
            if (response.status === 201) {
                setComplainData({
                    description: '',
                    locality: '',
                    state: '',
                    city: '',
                    village: '',
                });
                toast.show("Complain Raised Successfully"), {
                    type: "success",
                    duration: 3000,
                    placement: "bottom",
                    offset: 30,
                    animationType: "slide-in"
                }
                router.back();
                
            } else if (response.status === 500) {
                toast.show(response.data.error._message), {
                    type: "success",
                    duration: 3000,
                    placement: "bottom",
                    offset: 30,
                    animationType: "slide-in"

                }

            }
        } catch (error) {
            console.error("Error submitting complaint:", error);
            toast.show("Internal Server Error"), {
                type: "success",
                duration: 3000,
                placement: "bottom",
                offset: 30,
                animationType: "slide-in"

            }
        }

    };
   
    const handleChange = (field: string, value: any) => {
        setComplainData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>
                Aqua Disha
            </Text>
            <Text style={styles.header2}>
                Raise Complain
            </Text>

            <TextInput
                style={styles.input}
                label="Description"
                value={complainData.description}
                onChangeText={(text) => handleChange('description', text)}
                activeUnderlineColor="#00b19f"
                textColor="black"
            />
            <TextInput
                label="Loaclity"
                style={styles.input}
                textColor="black"
                value={complainData.locality}
                onChangeText={(text) => handleChange('locality', text)}
                activeUnderlineColor="#00b19f"

            />
            <TextInput
                style={styles.input}
                label="Village"
                textColor="black"
                value={complainData.village}
                onChangeText={(text) => handleChange('village', text)}
                activeUnderlineColor="#00b19f"

            />
            <TextInput
                style={styles.input}
                activeUnderlineColor="#00b19f"
                label="city"
                textColor="black"
                value={complainData.city}
                onChangeText={(text) => handleChange('city', text)}
            />
            <TextInput
                style={styles.input}

                label="State"
                value={complainData.state}
                textColor="black"

                onChangeText={(text) => handleChange('state', text)}
                activeUnderlineColor="#00b19f"

            />
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1} onPress={handleSubmit}>Submit</Text>
            </TouchableOpacity>




        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#effefb',

    },
    button1: {
        height: 45,
        marginHorizontal: 20,
        borderRadius: 15,
        backgroundColor: "#00b19f",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    buttonText1: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600'
    },
    header2: {
        fontSize: 24,
        marginVertical: 8,
        marginHorizontal: 20,
        fontWeight: '600',
        marginTop: 30,
    }
    ,
    input: {
        height: 40,
        marginHorizontal: 14,
        marginVertical: 10,
        padding: 4,
        borderRadius: 15,
        borderColor: '#',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    header: {
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 25,
        lineHeight: 19,
        fontWeight: '600',
        color: '#00b19f',
        marginTop: 30
    },
})