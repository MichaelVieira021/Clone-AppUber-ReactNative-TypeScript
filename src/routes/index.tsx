import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './bottomTabNavigator';

export const Routes = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}