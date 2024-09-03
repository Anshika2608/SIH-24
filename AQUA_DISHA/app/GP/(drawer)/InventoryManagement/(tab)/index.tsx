// app/GP/tab/index.tsx
import React from "react";
import { View, Text, StyleSheet,Image ,TouchableOpacity} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Home1() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftCard}>
          <Text style={styles.leftText}>Stock Level</Text>
          <Text style={styles.leftText1}>View current stock level </Text>
          <TouchableOpacity style={styles.button}>
          <AntDesign name="eye" size={20} color="white" />
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        </View>
        <Image source={require('../../../../../assets/images/stock.png')} style={styles.image}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  leftText1:{
    paddingLeft:15,
    fontSize:11,
    color: '#5A7270'


  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#effefb',
  },
  leftText:{
    fontWeight:'600',
    fontSize:26,
    paddingLeft:12,
    paddingTop:5
    

  },
  card:{
    backgroundColor:'white',
    marginHorizontal:8,
    marginTop:4,
    flexDirection:'row',
    height:140,
    borderRadius:10,
    gap:33
  },
  leftCard:{

  },
  button:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    backgroundColor:'#00B19F',
    justifyContent:'center',
    marginLeft:12,
    gap:2,
    alignItems:'center',
    width:100,
    height:6,
    color:'white',
    marginBottom:20,
    marginTop:20
  },
  buttonText:{
      color:'white',
      fontSize:15
  },
  image:{
    resizeMode:'contain',
    height:140,
    width:150,
    opacity:0.5
  }

})
