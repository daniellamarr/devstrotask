import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, TextInput} from 'react-native';
import Toast from 'react-native-toast-message';
import {signin} from '../api/auth';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import Text from '../components/Text';
import {setUser, signIn} from '../helpers/AppStorage';
import {authStyle, splashStyle} from '../styles';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    if (email && password) {
      setFormComplete(true);
    } else {
      return setFormComplete(false);
    }
  }, [email, password]);

  const submitForm = async () => {
    try {
      setLoadingStatus(true);
      const response = await signin({
        email,
        password,
      });
      const {status, token, user} = response.data;
      if (status === 'success') {
        signIn(token);
        setUser(user);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: `Welcome back ${user.name}`,
          text2: 'You signed in successfully',
          visibilityTime: 5000,
          autoHide: true,
          topOffset: 50,
        });
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'There was a problem signing in',
        text2: err.response.data.message,
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });
      setLoadingStatus(false);
    }
  };

  return (
    <View style={authStyle.container}>
      <Image
        source={require('../assets/images/2.jpg')}
        style={splashStyle.image}
      />
      <View style={authStyle.logoView}>
        <Logo />
      </View>
      <View style={authStyle.authView}>
        <ScrollView>
          <Text fontSize={22} fontFamily={fonts.primaryBold} bold>
            Welcome back!
          </Text>
          <Text fontSize={13} color={colors.greyAA}>
            The Astro Community missed you
          </Text>
          <View style={authStyle.formView}>
            <TextInput
              placeholder="Email Address"
              style={authStyle.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              style={authStyle.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <View style={authStyle.buttonView}>
              <Button
                onPress={submitForm}
                bgColor={formComplete ? colors.primary : colors.greyAA}
                disabled={!formComplete}>
                <Text color={colors.white}>Sign in</Text>
              </Button>
            </View>
            <View style={authStyle.buttonView}>
              <Text color={colors.greyAA}>
                Don't have an account?{' '}
                <Text
                  color={colors.primary}
                  onPress={() => props.navigation.navigate('Signup')}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {loadingStatus && <Loader loaderText="signing in..." />}
    </View>
  );
};

export default Signin;
