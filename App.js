import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Equipes from './pages/Equipes/index';
import Tarefas from './pages/Tarefas/index';

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
      headerMode = "none"
      initialRouteName = "Equipes">

        <Stack.Screen name = "Equipes" component={Equipes} />
        <Stack.Screen name = "Tarefas" component={Tarefas} />

      </Stack.Navigator>

    </NavigationContainer>

  )

}