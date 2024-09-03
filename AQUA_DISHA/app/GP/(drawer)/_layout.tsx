import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomHeader from '../../../components/GP/CustomHeader';
import CustomDrawerContent from '../../../components/GP/CustomDrawerContent'; 

const Layout: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: ({ route, navigation }) => (
            <CustomHeader navigation={navigation} route={route} />
          ),
          drawerStyle: {
            backgroundColor: '#f4f4f4',
          },
          drawerPosition: 'left',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
         <Drawer.Screen
          name="Dashboard/(tab)"
          options={{ title: 'Dashboard' }} 
        />
        <Drawer.Screen
          name="AssetManagement/(tab)"
          options={{ title: 'Asset Management' }} 
        />
        <Drawer.Screen
          name="InventoryManagement/(tab)"
          options={{ title: 'Inventory Management' }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
