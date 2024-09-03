import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Octicons } from "@expo/vector-icons";

export default function TabRoot() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#1de4c8',
            tabBarLabelStyle: { 
                marginTop: 0, 
                fontSize: 12, 
            }, 
            tabBarIconStyle: { 
                marginBottom: 0, 
            }, 
        }}
        >
            <Tabs.Screen 
                name="index" 
               
                options={{
                    title: 'Home',
                    headerShown:false,
                    tabBarIcon: ({ color }) => <Octicons size={24} name="home" color={color} />,               
                 }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: 'Profile',
                    headerShown:false,
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
