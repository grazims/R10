// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import AboutScreen from '../screens/About';
// import ScheduleScreen from '../screens/Schedule';
// import Map from '../screens/Map/Map';
// import {StyleSheet, View} from 'react-native';

// const AppNavigator = createStackNavigator(
//   {
//     About: AboutScreen,
//     Schedule: ScheduleScreen,
//     Map: Map,
//   },
//   {
//     initialRouteName: 'About',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: {backgroundColor: '#694fad'},
//   },
// );

// const TabNavigator = createBottomTabNavigator({
//   About: AboutScreen,
//   Schedule: ScheduleScreen,
//   Map: Map,
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default createAppContainer(AppNavigator, TabNavigator);

import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import Map from '../screens/Map/Map';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

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

const TabNavigator = createBottomTabNavigator(
  {
    Schedule: ScheduleScreen,
    Map: Map,
    // Faves: FavesScreen,
    About: AboutScreen,
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

        // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

//schedule,map, faves, about

export default createAppContainer(TabNavigator);
