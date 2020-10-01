import {Platform} from 'react-native';

const fonts = {
  primary: Platform.select({
    android: 'SourceSansPro-Regular',
    ios: 'Source Sans Pro',
  }),
  primaryBold: Platform.select({
    android: 'SourceSansPro-Bold',
    ios: 'Source Sans Pro',
  }),
  secondary: 'Astronaut Jones PB',
};

export default fonts;
