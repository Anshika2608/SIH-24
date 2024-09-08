import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2, 
  color: (opacity = 1) => `rgba(0, 177, 159, ${opacity})`, 
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
    paddingRight: 16, 
  },
  propsForBackgroundLines: {
    strokeDasharray: '', 
    strokeWidth: 0,     
    stroke: 'transparent',
  },
  propsForLabels: {
    fontSize: 12,
    color: '#000',
  },
  propsForBars: {
    color: (opacity = 1) => `rgba(0, 177, 159, ${opacity})`, 
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 55, 67, 85, 30, 40, 60]
    }
  ]
};

const Index = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.parentcard}>
        <View style={styles.card}>
          <View style={styles.leftCard}>
            <Text style={styles.leftText}>Active Projects</Text>
            <Text style={styles.leftText1}>325</Text>
          </View>
          <Image source={require('../../../../../assets/images/Group 6.png')} style={styles.image} />
        </View>
        <View style={styles.card}>
          <View style={styles.leftCard}>
            <Text style={styles.leftText}>Pending Tasks</Text>
            <Text style={styles.leftText1}>36</Text>
          </View>
          <Image source={require('../../../../../assets/images/Group 7.png')} style={styles.image} />
        </View>
        <View style={styles.card}>
          <View style={styles.leftCard}>
            <Text style={styles.leftText}>Ongoing Tasks</Text>
            <Text style={styles.leftText1}>36</Text>
          </View>
          <Image source={require('../../../../../assets/images/Group 8.png')} style={styles.image} />
        </View>
        <View style={styles.card}>
          <View style={styles.leftCard}>
            <Text style={styles.leftText}>Household Connections</Text>
            <Text style={styles.leftText1}>12,195</Text>
          </View>
          <Image source={require('../../../../../assets/images/Group 9.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.midcard}>
        <View style={styles.midCard1}>
          <Text style={styles.leftText}>Total Budget</Text>
          <Text style={styles.leftText1}>₹4,12,246.3</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.midCard1}>
          <Text style={styles.leftText}>Budget Remaining</Text>
          <Text style={styles.leftText1}>₹11,653.42</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.chartContainer}>
        <BarChart
          data={data}
          width={data.labels.length * 50} // Adjust width based on number of bars
          height={220}
          yAxisLabel="₹"
          yAxisSuffix="" // Ensure this is added to avoid errors
          chartConfig={chartConfig}
          verticalLabelRotation={5} // Rotate x-axis labels if needed
          fromZero={true} // Ensure bars start from zero
        />
      </ScrollView>
      <Image source={require('../../../../../assets/images/wave1.png')} style={styles.image1} />
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  image1: {
    height: 100,
    marginHorizontal: 8,
    marginTop: 10,
    resizeMode: 'contain'
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
    gap: 25
  },
  midCard1: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#effefb',
    padding: 8,
  },
  parentcard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    marginTop: 51,
    height: 64,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: 'white',
    width: '49%',
    marginVertical: 4,
    borderRadius: 10,
    flexDirection: 'row',
    height: 110,
    justifyContent: 'space-between',
    paddingLeft: 10
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
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
    color: '#5A7270',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginHorizontal: 16,
    padding:8
  },
  chartContainer: {
    marginVertical: 8,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
