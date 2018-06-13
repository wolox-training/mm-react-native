import React, { Component } from 'react';
import { createTabNavigator } from 'react-navigation';

import Book from '../Book';
import Todo from '../Todo';
import { ROUTES } from '../../../constants/routes';
import { TITLES } from '../../../constants/titles';

const TabNavigator = createTabNavigator(
  ([ROUTES.Todo]: {
    screen: Todo,
    navigationOptions: {
      title: TITLES.todoTitle,
      initialRouteName: ROUTES.Todo
    }
  }),
  ([ROUTES.Book]: {
    screen: Book,
    navigationOptions: {
      title: TITLES.bookTitle
    }
  })
);

class Home extends Component {
  render() {
    return <TabNavigator />;
  }
}

export default Home;
