import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
