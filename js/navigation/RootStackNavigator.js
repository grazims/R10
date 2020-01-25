import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule';

const AppNavigator = createStackNavigator({
  //About: AboutScreen,
  Schedule: ScheduleScreen,
});

export default createAppContainer(AppNavigator);
//create bottomnav
