import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import MapScreen from '../screens/Map';
import SessionsScreen from '../screens/Sessions';
import Icon from 'react-native-vector-icons/Ionicons';
import {sharedNavigationOptions} from './config';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const MapStack = createStackNavigator(
  {
    Map: Map,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    // Faves: FavesScreen,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'About') {
          iconName = 'ios-information-circle';
        } else if (routeName === 'Schedule') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Map') {
          iconName = 'ios-map';
        }

        return <Icon name={iconName} color={tintColor} size={25} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#9963ea',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'pink',
    },
  },
);
