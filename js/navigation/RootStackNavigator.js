import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';

const AppNavigator = createStackNavigator({
  About: AboutScreen,
});

export default createAppContainer(AppNavigator);
