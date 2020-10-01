import React, {useState, useEffect, createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/routes/SplashScreen';
import {getToken, signIn, signOut} from './src/helpers/AppStorage';
import Landing from './src/routes/Landing';
import Signup from './src/routes/Signup';
import Signin from './src/routes/Signin';
import AuthContext from './src/components/AuthContext';
import Dashboard from './src/routes/Dashboard';

const Stack = createStackNavigator();

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  const checkLoggedIn = async () => {
    const loggedIn = await getToken();
    dispatch({type: 'RESTORE_TOKEN', token: loggedIn});
    setTimeout(() => setIsLoading(false), 5000);
  };

  const authContext = React.useMemo(
    () => ({
      logIn: async (token) => {
        await signIn(token);
        dispatch({type: 'SIGN_IN', token});
      },
      logOut: async () => {
        await signOut();
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    checkLoggedIn();
  });

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {!state.userToken ? (
            <>
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Signin" component={Signin} />
            </>
          ) : (
            <Stack.Screen name="Dashboard" component={Dashboard} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Router;
