import React, { Component } from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';

export class Account extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Home
        </Text>
      </View>
    );
  }
}

export default Account



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuItem: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});