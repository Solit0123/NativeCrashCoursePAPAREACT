import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// reactnavigation.org stuff
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen() {
  return (
    <>
    </>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();


export default function App() {
  return (

  <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen Title'}}  />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Screen Title'}} />
        </Stack.Navigator>
  </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

