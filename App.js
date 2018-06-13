import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import TabNav from './src/app/screens/TabNav';
import { ROUTES } from './src/constants/routes';

const RootStack = createStackNavigator(
  {
    navbar: TabNav
  },
  {
    initialRouteName: ROUTES.navbar
  }
);

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
