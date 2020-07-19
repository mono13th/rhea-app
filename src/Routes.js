import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , HeaderTitle} from '@react-navigation/stack';
import Home from './screens/Home';
import SignIn from './screens/login/SignIn';
import SignUp from './screens/register/SignUp';
import Role from './screens/register/Role';
import HostRegister from './screens/register/HostRegister';
import HostAdditional from './screens/register/HostAdditional';
import HostInfo from './screens/register/HostInfo';
import HostCar from './screens/register/HostCar';
import GuestRegister from './screens/register/GuestRegister';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="Role" component={Role} />
        <Stack.Screen options={{headerShown: false}} name="HostRegister" component={HostRegister} />
        <Stack.Screen options={{headerShown: false}} name="HostAdditional" component={HostAdditional} />
        <Stack.Screen options={{headerShown: false}} name="HostInfo" component={HostInfo} />
        <Stack.Screen options={{headerShown: false}} name="HostCar" component={HostCar} />
        <Stack.Screen name="GuestRegister" component={GuestRegister} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
