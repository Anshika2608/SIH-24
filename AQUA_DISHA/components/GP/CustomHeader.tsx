import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

interface CustomHeaderProps {
  navigation: DrawerNavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, route }) => {
  const getTitle = () => {
    switch (route.name) {
      case 'Dashboard/(tab)':
        return 'Dashboard';
      case 'AssetManagement/(tab)':
        return 'Asset Management';
      case 'InventoryManagement/(tab)':
        return 'Inventory Management';
      default:
        return 'App Title';
    }
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{getTitle()}</Text>
      <TouchableOpacity onPress={() => { /* Handle bell icon press */ }}>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#effefb',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 90,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
