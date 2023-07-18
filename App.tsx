import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/pages/StartScreen';
import Login from './src/constants/Login';
import Register from './src/constants/Register';
import HomeUser from './src/pages/Home/HomeUser';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
        // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeUser" component={HomeUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;