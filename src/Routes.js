import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , HeaderTitle} from '@react-navigation/stack';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Role from './screens/Role';
import HostRegister from './screens/HostRegister';
import HostInfo from './screens/HostInfo';
import HostCar from './screens/HostCar';
import GuestRegister from './screens/GuestRegister';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="Role" component={Role} />
        <Stack.Screen name="HostRegister" component={HostRegister} />
        <Stack.Screen name="HostInfo" component={HostInfo} />
        <Stack.Screen name="HostCar" component={HostCar} />
        <Stack.Screen name="GuestRegister" component={GuestRegister} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
