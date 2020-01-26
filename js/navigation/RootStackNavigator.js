import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AboutScreen from '../screens/About';
// import ScheduleScreen from '../screens/Schedule';
import Map from '../screens/Map/Map';

const AppNavigator = createStackNavigator({
  //About: AboutScreen,
  // Schedule: ScheduleScreen,
  Map: Map,
});

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });

export default createAppContainer(AppNavigator);
//create bottomnav
