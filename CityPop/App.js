import HomeScreen from './screens/HomeScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import CountrySearchScreen from './screens/CountrySearchScreen';
import ResultScreen from './screens/ResultScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CityChooseScreen from './screens/CityChooseScreen';

const Stack = createNativeStackNavigator();
/**
 * Main app funtion, using react-navigation to switch between screens
 * title:"" in order to not have unnecessary text on navbar
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{title: ""}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{title: ""}} name="CitySearch" component={CitySearchScreen} />
        <Stack.Screen options={{title: ""}} name="CountrySearch" component={CountrySearchScreen} />
        <Stack.Screen options={{title: ""}} name="Results" component={ResultScreen} initialParams={{cityName: 'Paris'}}/>
        <Stack.Screen options={{title: ""}} name="CityChoose" component={CityChooseScreen} initialParams={{countryName: 'France'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
