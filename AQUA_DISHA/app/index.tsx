import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
   <View>
      <Text>Home Screen</Text>
      <Link href="/GP">
        <Text>Go to Asset </Text>
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default index