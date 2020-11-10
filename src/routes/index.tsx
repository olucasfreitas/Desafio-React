import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../views/Search';
import Details from '../views/Details';
import Show from '../views/Show';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Search">
    <App.Screen name="Search" component={Search} />
    <App.Screen name="Details" component={Details} />
    <App.Screen name="Show" component={Show} />
  </App.Navigator>
);

export default Routes;
