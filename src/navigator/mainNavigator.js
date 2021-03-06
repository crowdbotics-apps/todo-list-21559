import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile144380Navigator from '../features/UserProfile144380/navigator';
import Tutorial144379Navigator from '../features/Tutorial144379/navigator';
import NotificationList144351Navigator from '../features/NotificationList144351/navigator';
import Settings144350Navigator from '../features/Settings144350/navigator';
import Settings144342Navigator from '../features/Settings144342/navigator';
import UserProfile144340Navigator from '../features/UserProfile144340/navigator';
import UserProfile144309Navigator from '../features/UserProfile144309/navigator';
import Tutorial144308Navigator from '../features/Tutorial144308/navigator';
import NotificationList144280Navigator from '../features/NotificationList144280/navigator';
import Settings144279Navigator from '../features/Settings144279/navigator';
import Settings144271Navigator from '../features/Settings144271/navigator';
import UserProfile144269Navigator from '../features/UserProfile144269/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile144380: { screen: UserProfile144380Navigator },
Tutorial144379: { screen: Tutorial144379Navigator },
NotificationList144351: { screen: NotificationList144351Navigator },
Settings144350: { screen: Settings144350Navigator },
Settings144342: { screen: Settings144342Navigator },
UserProfile144340: { screen: UserProfile144340Navigator },
UserProfile144309: { screen: UserProfile144309Navigator },
Tutorial144308: { screen: Tutorial144308Navigator },
NotificationList144280: { screen: NotificationList144280Navigator },
Settings144279: { screen: Settings144279Navigator },
Settings144271: { screen: Settings144271Navigator },
UserProfile144269: { screen: UserProfile144269Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
