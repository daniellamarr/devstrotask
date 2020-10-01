/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import Router from './Router';

const App = () => {
  return (
    <>
      <Router />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
