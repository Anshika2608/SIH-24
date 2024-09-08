import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useState,useCallback } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios';
import { useLocalSearchParams,useRouter } from 'expo-router';
import { useToast } from "react-native-toast-notifications";

const index = () => {
    const toast = useToast();
    const router = useRouter();
    const [complaintsCount, setComplaintsCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [complaintsData, setComplaintsData] = useState([])
    
    // useEffect(() => {
    //     const fetchComplaints = async () => {
    //         try {
    //             const response = await axios.get('https://sih-backend-fmce.onrender.com/complaint/getComplaints');
    //             console.log('API Response:', response.data);
    //             setComplaintsData(response.data.complaints);
    //             if (Array.isArray(response.data.complaints)) {
    //                 setComplaintsCount(response.data.complaints.length);
    //                 // setComplaintProgress(complaintsCount / 2);
    //             } else {
    //                 console.warn('Unexpected response structure:', response.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setError("Failed to fetch complaints");
    //             toast.show('Failed to fetch complaints', { type: 'danger' });
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

        const fetchComplaints = async () => {
            try {
                const response = await axios.get('https://sih-backend-fmce.onrender.com/complaint/getComplaints');
                console.log('API Response:', response.data);
                if (Array.isArray(response.data.complaints)) {
                    const totalComplaints = response.data.complaints.length;
                    setComplaintsData(response.data.complaints);
                    setComplaintsCount(totalComplaints);
                    // setComplaintProgress(totalComplaints / 2);
                } else {
                    console.warn('Unexpected response structure:', response.data);
                    setError('Unexpected response structure.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch complaints.');
                toast.show('Failed to fetch complaints', { type: 'danger' });
            } finally {
                setLoading(false);
            }
        };
        useFocusEffect(
            useCallback(() => {
                fetchComplaints();
            }, [])
        );
          
        

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }
    const handleRaiseComplain=()=>{
        router.push({pathname:"Consumer/raiseComplain"})
    }

    const totalComplaints = complaintsData.length;
    const halfComplaintsCount = Math.ceil(totalComplaints / 2);
    return (
        <ScrollView style={styles.text}>
            <Text style={styles.header}>
                Aqua Disha
            </Text>
            <View style={styles.card}>
                <View style={styles.card1}>
                    <Text style={styles.Text}>{complaintsCount}</Text>
                    <Text style={styles.Text1}>Complains registered</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Image source={require("../../../assets/images/trending.png")} style={styles.Image} />
                    <Text style={styles.buttonText}>Track</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.parentcard}>
                <View style={styles.innercard}>
                    <View style={styles.leftCard}>
                        <Text style={styles.leftText}>Solved Complains</Text>
                        <Text style={styles.leftText1}>{halfComplaintsCount}</Text>
                    </View>
                    <Image source={require('../../../assets/images/group10.png')} style={styles.image} />
                </View>
                <View style={styles.innercard}>
                    <View style={styles.leftCard}>
                        <Text style={styles.leftText}>Complains in progress</Text>
                        <Text style={styles.leftText1}>{halfComplaintsCount}</Text>
                    </View>
                    <Image source={require('../../../assets/images/group11.png')} style={styles.image} />

                </View>
            </View>
            <TouchableOpacity style={styles.button1}>
                <Ionicons name="megaphone-outline" size={24} color={'white'} />
                <Text style={styles.buttonText1} onPress={handleRaiseComplain}>Raise a Complain</Text>
            </TouchableOpacity>
            <View style={styles.midcard}>
                <View style={styles.midCard1}>
                    <Text style={styles.leftText}>Bill Due Date</Text>
                    <Text style={styles.leftText1}>12/09/2024</Text>
                </View>
                <View style={styles.verticalLine} />
                <View style={styles.midCard1}>
                    <Text style={styles.leftText}>Upcoming Payments</Text>
                    <Text style={styles.leftText1}>₹1653.21</Text>
                </View>

            </View>
            <TouchableOpacity style={styles.button2}>
                <FontAwesome name="money" size={24} color={'#00b19f'} />
                <Text style={styles.buttonText2}>Pay Now</Text>
            </TouchableOpacity>
            <View style={styles.leftText3}>
                <Text style={styles.leftText1}>
                    Complain History
                </Text>
            </View>
            <ScrollView style={styles.complain}>
                {complaintsData.map((complaint) => (
                    <View key={complaint._id} style={styles.complainh}>
                        <View >
                            <Text style={styles.Text1}>{complaint.description}</Text>
                            <Text style={styles.leftText}>{complaint.status || 'Status Not Available'}</Text>
                        </View>
                        <Text style={styles.leftText3}>{complaint.createdAt}</Text>
                        <View style={styles.horizontalLine} />
                    </View>
                ))}
            </ScrollView>
        </ScrollView>

    )
}

export default index
const styles = StyleSheet.create({
   
    complain: {
        backgroundColor: 'white',
       marginBottom:40,
        marginTop: 20,
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#9aaeab',
        marginHorizontal: 10,
    },
    complainh: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 10


    },
    leftText3: {
        marginHorizontal: 15,
        marginTop: 10
    },
    buttonText2: {
        color: "#00b19f"
    },
    button2: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#00b19f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 10,
        marginHorizontal: 8,
        height: 49,
    },
    verticalLine: {
        height: '80%',
        width: 1,
        backgroundColor: '#5A7270',
    },
    midcard: {
        height: 100,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 4,
        gap: 25
    },
    midCard1: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonText1: {
        fontSize: 14,
        color: "white",
        fontWeight: '600'
    },
    button1: {
        marginTop: 15,
        height: 45,
        backgroundColor: "#00b19f",
        borderRadius: 15,
        gap: 4,
        marginHorizontal: 8,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    },
    innercard: {
        backgroundColor: 'white',
        width: '48%',
        marginVertical: 4,
        borderRadius: 10,
        flexDirection: 'row',
        height: 110,
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    parentcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10
    },
    image: {
        marginTop: 51,
        height: 64,
        resizeMode: 'contain',
    },
    leftCard: {
        flex: 1,
        justifyContent: 'center',
    },
    leftText1: {
        fontWeight: '600',
        fontSize: 20,
        paddingTop: 5,
    },
    leftText: {
        fontSize: 10,
        marginTop: 4,
        fontWeight: '500',
        color: '#5A7270',
    },
    header: {
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 25,
        lineHeight: 19,
        fontWeight: '600',
        color: '#00b19f',
    },
    Image: {
        height: 20,
        width: 15
    },
    Text: {
        fontSize: 24,
        fontWeight: '700'
    },
    Text1: {
        fontSize: 14,
        fontWeight: '600',
        color: " #5A7270"


    },
    card: {
        height: 100,
        backgroundColor: "white",
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 2,
        borderRadius: 20,
        marginTop: 20,
        gap: 10

    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#00b19f',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    card1: {
        flexDirection: 'column',
        marginLeft: 15,
        gap: 4
    },
    buttonText: {
        fontSize: 16,
        color: "#00b19f"
    },
    text: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '700',
        color: '#00b19f',
        textAlign: 'center',
        paddingTop: 45,
        fontSize: 25,
        lineHeight: 19,
        backgroundColor: "#effefb",
        height: "100%",


    }
})
