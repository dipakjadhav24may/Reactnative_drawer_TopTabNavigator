import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, StatusBar } from 'react-native';


import Settings from '../screens/Settings';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Sidebar from '../screens/Sidebar';

const Tabs = createMaterialTopTabNavigator({
  Home: Home,
  Settings: Settings,
  Account: Account
}, {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    }
  });


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Tabs
  }
}, {
    initialRouteName: 'Home',
    contentComponent: Sidebar,
    drawerWidth: 300
  });



const MenuImage = ({ navigation }) => {
  if (!navigation.state.isDrawerOpen) {
    return <Image source={require('../images/menu-button.png')} />
  } else {
    return <Image source={require('../images/left-arrow.png')} />
  }
}

const StackNavigator = createStackNavigator({

  DrawerNavigator: {
    screen: DrawerNavigator
  }
}, {
    navigationOptions: ({ navigation }) => ({
      title: 'My App',  // Title to appear in status bar
      headerLeft:
      <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
        <MenuImage style="styles.bar" navigation={navigation} />
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })
  });

  export default StackNavigator

// const App111 = createAppContainer(StackNavigator);

// export default App111;