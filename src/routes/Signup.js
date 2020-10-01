import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, TextInput} from 'react-native';
import Toast from 'react-native-toast-message';
import {signup} from '../api/auth';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import Text from '../components/Text';
import {setUser, signIn} from '../helpers/AppStorage';
import {authStyle, splashStyle} from '../styles';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    if (name && email && phone && password) {
      setFormComplete(true);
    } else {
      return setFormComplete(false);
    }
  }, [email, name, password, phone]);

  const submitForm = async () => {
    try {
      setLoadingStatus(true);
      const response = await signup({
        name,
        email,
        phone,
        password,
        type: 'user',
      });
      const {status, token, user} = response.data;
      if (status === 'success') {
        signIn(token);
        setUser(user);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Welcome to AstroWorld',
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
            Create an Account
          </Text>
          <Text fontSize={13} color={colors.greyAA}>
            Join the Astro Community
          </Text>
          <View style={authStyle.formView}>
            <TextInput
              placeholder="Name"
              style={authStyle.input}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              placeholder="Email Address"
              style={authStyle.input}
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Phone"
              style={authStyle.input}
              value={phone}
              onChangeText={(text) => setPhone(text)}
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
                <Text color={colors.white}>Sign up</Text>
              </Button>
            </View>
            <View style={authStyle.buttonView}>
              <Text color={colors.greyAA}>
                Already have an account?{' '}
                <Text
                  color={colors.primary}
                  onPress={() => props.navigation.navigate('Signin')}>
                  Sign in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {loadingStatus && <Loader loaderText="creating account..." />}
    </View>
  );
};

export default Signup;
