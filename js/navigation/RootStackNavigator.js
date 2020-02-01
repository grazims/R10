import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import Map from '../screens/Map/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import {sharedNavigationOptions} from './config';
import SessionScreen from '../screens/Sessions';

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
    Session: SessionScreen,
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

class About extends React.Component {
  render() {
    return <Text></Text>;
  }
}

class Schedule extends React.Component {
  render() {
    return <Text></Text>;
  }
}
class Maps extends React.Component {
  render() {
    return <Text></Text>;
  }
}

class Session extends React.Component {
  render() {
    return <Text></Text>;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Schedule: ScheduleScreen,
    Map: Map,
    // Faves: FavesScreen,
    About: AboutScreen,
    Session: SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'About') {
          return (
            <Icon name="ios-information-circle" color={tintColor} size={25} />
          );
        } else if (routeName === 'Schedule') {
          return <Icon name="ios-calendar" color={tintColor} size={25} />;
        } else if (routeName === 'Map') {
          return <Icon name="ios-map" color={tintColor} size={25} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#9963ea',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'pink',
    },
  },
);

export default createAppContainer(TabNavigator);
