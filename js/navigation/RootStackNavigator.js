import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import Map from '../screens/Map/Map';

const AppNavigator = createStackNavigator({
  //About: AboutScreen,
  Schedule: ScheduleScreen,
  initialRouteName: Map,
});

export default createAppContainer(AppNavigator);
//create bottomnav
