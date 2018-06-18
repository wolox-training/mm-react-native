import { createStackNavigator, TabNavigator } from 'react-navigation';

import { ROUTES } from '../constants/routes';
import { TITLES } from '../constants/titles';
import { headerStyle, headerTitleStyle } from '../config/navigationStyles';

import Todo from './screens/Todo';
import Book from './screens/Book';

import BookDetail from './screens/Book/screens/BookDetail';

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
    },
    [ROUTES.BookDetail]: {
      screen: BookDetail,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('title')
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
