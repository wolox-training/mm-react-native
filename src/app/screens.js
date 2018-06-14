import { createStackNavigator, TabNavigator } from 'react-navigation';

import { ROUTES } from '../constants/routes';
import { TITLES } from '../constants/titles';
import { headerStyle, headerTitleStyle } from '../config/navigationStyles';

import Todo from './screens/Todo';
import Book from './screens/Book';

const RootStack = createStackNavigator(
  {
    [ROUTES.Home]: {
      screen: TabNavigator({
        [ROUTES.Todo]: {
          screen: Todo,
          navigationOptions: {
            title: TITLES.todoTitle
          }
        },
        [ROUTES.Book]: {
          screen: Book,
          navigationOptions: {
            title: TITLES.bookTitle
          }
        }
      })
    }
  },
  {
    navigationOptions: () => ({
      title: TITLES.applicationTitle,
      initialRouteName: ROUTES.Home,
      headerStyle,
      headerTitleStyle
    })
  }
);

export default RootStack;
