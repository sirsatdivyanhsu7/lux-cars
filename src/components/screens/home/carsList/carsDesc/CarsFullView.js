import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {ImageConstant} from '../../../../../assets/ImageConstant';
import {Colors} from '../../../../../constants/Color';

export default class CarsFullView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={ImageConstant.car01} style={styles.carContainer} />
          <View style={styles.shortdescriptionContainer}>
            <View style={styles.cost}>
              <Text style={styles.costText}>₹ </Text>
              <Text style={styles.costText}>500000</Text>
            </View>
            <Text style={styles.modelText}>Model No.</Text>
          </View>
          <View style={styles.desContainer}>
            <Text style={styles.desText}>
              A car (or automobile) is a wheeled motor vehicle used for
              transportation. Most definitions of cars say that they run
              primarily on roads, seat one to eight people, have four tires, and
              mainly transport people rather than goods.
            </Text>
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
