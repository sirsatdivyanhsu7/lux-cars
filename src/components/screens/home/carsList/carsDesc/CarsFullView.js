import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Colors} from '../../../../../constants/Color';

export default class CarsFullView extends Component {
  constructor(props) {
    super(props);
  }
  // This will display each list item
  render() {
    // Destructuring the this.props.route.params
    const {carsData} = this.props.route.params;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{this.props.userID}</Text>
          <Image source={carsData.image} style={styles.carContainer} />
          <View style={styles.shortdescriptionContainer}>
            <View style={styles.cost}>
              <Text style={styles.costText}>₹ </Text>
              <Text style={styles.costText}>{carsData.price}</Text>
            </View>
            <Text style={styles.modelText}>{carsData.model}</Text>
          </View>
          <View style={styles.desContainer}>
            <Text style={styles.desText}>{carsData.description}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
  },
  carContainer: {
    height: 300,
    width: '96%',
    marginTop: 50,
  },
  shortdescriptionContainer: {
    backgroundColor: Colors.white,
    padding: 10,
  },
  cost: {
    flexDirection: 'row',
  },
  costText: {
    fontSize: 20,
    color: Colors.blue,
    fontWeight: '600',
    marginBottom: 10,
  },
  modelText: {
    fontSize: 16,
    color: Colors.glLightGrey,
  },
  desContainer: {
    padding: 10,
    height: 500,
  },
  desText: {
    color: Colors.glLightGrey,
  },
});
