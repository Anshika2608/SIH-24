import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign} from '@expo/vector-icons';
import CustomDrawerItem from '../customDrawerItem';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
     
      <View style={styles.upperContainer}>
      <Text style={styles.text}>Aqua Disha</Text>
        <AntDesign name='close' size={28} onPress={() => props.navigation.closeDrawer()}/>
        
      </View>
     
      <View style={styles.view}>
      <View style={styles.views}>
      <MaterialIcons name="dashboard" size={24} />
        <CustomDrawerItem
          label="Dashboard"
          routeName="Dashboard/(tab)"
          onPress={() => props.navigation.navigate('Dashboard/(tab)')}
        />
        </View>
        <View style={styles.views}>
        <Feather name="tool" size={24} />
        <CustomDrawerItem
          label="Asset Management"
          routeName="AssetManagement/(tab)"
          onPress={() => props.navigation.navigate('AssetManagement/(tab)')}
        />
        </View>
        <View style={styles.views}>
        <MaterialIcons name="inventory" size={24} />
        <CustomDrawerItem
          label="Inventory Management"
          routeName="InventoryManagement/(tab)"
          onPress={() => props.navigation.navigate('InventoryManagement/(tab)')}
        />
        </View>
      </View>
      
     

    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
    view:{
         marginTop:40
      
    },
    views:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5
        
    },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#effefb',
  },
  text:{
  fontFamily:'Poppins-Bold',
  fontWeight:'700',
  color:'#00b19f',
  width:59,
  fontSize:20,
  lineHeight:19
  },
  upperContainer:{
    marginTop:30,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:15,
    marginVertical:10
  },
  drawerTitle: {
    fontSize: 25,
    marginTop:25,
    fontWeight: '600',
    marginLeft: 10,
  },
  image:{
    height:29,
    width:49
  }
});

export default CustomDrawerContent;
