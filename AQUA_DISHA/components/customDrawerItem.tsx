import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
interface CustomDrawerItemProps {
  label: string;
  routeName: string;
  onPress: () => void;
}
const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({ label, routeName, onPress }) => {  
  const currentRoute = useNavigationState(state => state.routes[state.index]?.name);
  const isActive = currentRoute === routeName;

  return (

    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, isActive && styles.activeItem]}
    >


      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',

  },
  activeItem: {
    backgroundColor: '#e0f2f1', // Background color for the selected item
  },
  activeLabel: {
    color: '#00b19f', // Text color for the selected item
    fontWeight: 'bold',
  },
});

export default CustomDrawerItem;
