import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Platform, StyleSheet, Image } from 'react-native';

export class Profile extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft:
    <TouchableOpacity>
      <Image style={{ marginLeft: 10 }} source={require('../images/left-arrow.png')} />
    </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <Button
        style={[styles.buttonStyle]}
        title="Go to Jane's profile"
      />
    );
  }
}

export default Profile



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
  },
  tabIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  },
  buttonStyle: {
    marginTop: 10
  }
});