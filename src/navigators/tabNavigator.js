import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Setting from '../screens/Settings';
import Account from '../screens/Account';


export default TabNavigator = createBottomTabNavigator(
	{		
		Home : Home,
		Setting : Setting,
		Account : Account
	},
	// {
	// 	tabBarOptions: {
	// 		activeTintColor: mainStyle.colors.brandSecondaryColor,
	// 		inactiveTintColor : mainStyle.colors.grayColor,
	// 		labelStyle : appStyle.tabLabel,
	// 		style: appStyle.tabBarStyle
	// 	}
	// }
);
