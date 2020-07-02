import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../../constants/Color';
import List from '../../../../constants/CarList';

export default class CarsList extends Component {
  constructor(props) {
    super(props);
    this.cardView = this.cardView.bind(this);
  }

  fullViewPressed() {
    this.props.navigation.navigate('Full View');
  }
  cardView(item) {
    let items = item.item;
    return (
      <TouchableOpacity
        onPress={() => {
          this.fullViewPressed();
        }}>
        <View style={styles.cardContainer}>
          <View style={styles.alignment}>
            <Image source={items.image} style={styles.imageContainer} />
            <View style={styles.textContainer}>
              <View style={styles.alignment}>
                <Text style={styles.costText}>₹ </Text>
                <Text style={styles.costText}>{items.price}</Text>
              </View>
              <Text style={styles.modelText}>{items.model}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  cardListView() {
    return (
      <FlatList
        data={List}
        keyExtractor={item => item.key}
        renderItem={this.cardView}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>{this.cardListView()}</View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
  },
  cardContainer: {
    padding: 10,
  },
  imageContainer: {
    height: 80,
    width: 100,
    borderRadius: 5,
  },
  alignment: {
    flexDirection: 'row',
  },
  textContainer: {
    padding: 5,
  },
  costText: {
    fontSize: 20,
    color: Colors.blue,
    fontWeight: '600',
    marginVertical: 5,
  },
  modelText: {
    color: Colors.glGrey,
    fontSize: 16,
  },
});
