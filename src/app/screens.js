import { createStackNavigator } from 'react-navigation';

import { ROUTES } from '../constants/routes';
import { TITLES } from '../constants/titles';

import { headerStyle, headerTitleStyle } from './screens/Home/styles';
import Home from './screens/Home';

const RootStack = createStackNavigator({
  [ROUTES.Home]: {
    screen: Home,
    navigationOptions: {
      title: TITLES.applicationTitle,
      initialRouteName: ROUTES.home,
      headerStyle,
      headerTitleStyle
    }
  }
});

export default RootStack;
