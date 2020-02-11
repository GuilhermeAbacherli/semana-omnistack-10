import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Main, Profile} from './pages';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Profile,
  }),
);

export default Routes;
