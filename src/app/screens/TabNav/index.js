import React, { Component } from 'react';
import { createTabNavigator } from 'react-navigation';

import Book from '../Book';
import Todo from '../Todo';
import { ROUTES } from '../../../constants/routes';

import { headerStyle, headerTitleStyle } from './styles.js';

const TabNavigator = createTabNavigator(
  {
    todo: Todo,
    book: Book
  },
  {
    initialRouteName: ROUTES.book
  }
);

class TabNav extends Component {
  static navigationOptions = {
    title: ROUTES.applicationTitle,
    headerStyle,
    headerTitleStyle
  };

  render() {
    return <TabNavigator />;
  }
}

export default TabNav;
