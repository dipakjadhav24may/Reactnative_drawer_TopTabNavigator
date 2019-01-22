import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Platform, StyleSheet, Image } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
export class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    headerLeft:
    //  <TouchableOpacity onPress={() => navigation.navigate('Account')}>   //on back press send to account 
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image style={{ marginLeft: 10 }} source={require('../images/left-arrow.png')} />
    </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });


  render() {
    return (
      <View style={[styles.container]}>
        <Button
          style={[styles.buttonStyle]}
          title="Go to Jane's profile"
        />
      </View>
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