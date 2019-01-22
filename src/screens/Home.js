
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Home extends Component{

   static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params;
    return{
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('../images/appIcons/home.png')}
          style={[styles.tabIcon,{tintColor: tintColor}]}
        />
      ),
    }
  };
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
   tabIcon:{
    height:25,
    width:25,
    resizeMode: 'contain'
  },
});
