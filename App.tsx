import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/pages/StartScreen';
import Login from './src/constants/Login';
import Register from './src/constants/Register';
import HomeUser from './src/pages/Home/HomeUser';
import Profil from './src/pages/Profil';
import Pengajuan from './src/pages/Pengajuan';
import ListPengajuan from './src/pages/ListPengajuan';
import HomeAdmin from './src/pages/Home/HomeAdmin';
import ListPengajuanAdmin from './src/pages/ListPengajuanAdmin';
import UpdateStatusPengajuan from './src/pages/UpdateStatusPengajuan';
import ListPenduduk from './src/pages/ListPenduduk';
import ListPendudukAdmin from './src/pages/ListPendudukAdmin';
import MasySubsidi from './src/pages/MasySubsidi';
import Laporan from './src/pages/Laporan';

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
        <Stack.Screen options={{ headerShown: false }} name="HomeAdmin" component={HomeAdmin} />
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
        <Stack.Screen
          name="Laporan"
          component={Laporan}
          options={{
            title: 'Laporan',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Pengajuan"
          component={Pengajuan}
          options={{
            title: 'Pengajuan',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ListPenduduk"
          component={ListPenduduk}
          options={{
            title: 'ListPenduduk',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ListPendudukAdmin"
          component={ListPendudukAdmin}
          options={{
            title: 'List Penduduk',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Subsidi"
          component={MasySubsidi}
          options={{
            title: 'Input Masyrakat Miskin',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ListPengajuan"
          component={ListPengajuan}
          options={{
            title: 'List Pengajuan',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ListPengajuanAdmin"
          component={ListPengajuanAdmin}
          options={{
            title: 'List Pengajuan RT/RW',
            headerStyle: {
              backgroundColor: '#0081C9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="UpdateStatusPengajuan"
          component={UpdateStatusPengajuan}
          options={{
            title: 'Approval Surat',
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
    </NavigationContainer>
  );
};

export default App;