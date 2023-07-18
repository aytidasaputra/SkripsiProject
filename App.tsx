import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/pages/StartScreen';
import Login from './src/constants/Login';
import Register from './src/constants/Register';
import HomeUser from './src/pages/Home/HomeUser';
import Profil from './src/pages/Profil';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="HomeUser" component={HomeUser} />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{
            title: 'Profil',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
      <Stack.Group>

      </Stack.Group>
    </NavigationContainer>
  );
};

export default App;