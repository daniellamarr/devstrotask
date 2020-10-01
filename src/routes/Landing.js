import React, {createRef} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Video from 'react-native-video';
import Button from '../components/Button';
import Text from '../components/Text';
import {landingStyle, splashStyle} from '../styles';
import colors from '../styles/colors';

const Landing = (props) => {
  const videoRef = createRef();

  const onBuffer = () => {};
  const onVideoError = () => {};

  return (
    <View style={landingStyle.container}>
      <Video
        source={require('../assets/videos/1.mp4')}
        poster="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ref={videoRef}
        repeat
        rate={1.0}
        resizeMode="cover"
        onBuffer={onBuffer}
        onError={onVideoError}
        style={landingStyle.backgroundVideo}
      />
      <View style={splashStyle.overlayContainer}>
        <Animatable.Text
          style={splashStyle.animatedText}
          animation="fadeIn"
          duration={3000}
          iterationCount="infinite">
          ASTROWORLD
        </Animatable.Text>
        <View style={landingStyle.buttons}>
          <Button onPress={() => props.navigation.navigate('Signup')}>
            <Text color={colors.white}>create account</Text>
          </Button>
          <Button
            bgColor={colors.white}
            onPress={() => props.navigation.navigate('Signin')}>
            <Text color={colors.primary}>sign in</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Landing;
