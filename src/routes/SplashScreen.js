import React from 'react';
import {View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Text from '../components/Text';
import {splashStyle} from '../styles';
import colors from '../styles/colors';

const SplashScreen = () => {
  return (
    <View style={splashStyle.container}>
      <Image
        source={require('../assets/images/1.jpg')}
        style={splashStyle.image}
      />
      <View style={splashStyle.overlayContainer}>
        <Animatable.Text
          style={splashStyle.animatedText}
          animation="fadeIn"
          duration={3000}
          iterationCount="infinite">
          ASTROWORLD
        </Animatable.Text>
        <Text color={colors.white}>
          the world of astronauts, aliens and monkeys
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
