import React from 'react';
import {Text as RNText} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const CENTER = 'center ';
const AUTO = 'auto';
const BOLD = 'bold';
const NORMAL = 'normal';

const Text = (props) => {
  return (
    <RNText
      {...props}
      style={{
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        color: props.color,
        textAlign: props.center ? CENTER : AUTO,
        fontWeight: props.bold ? BOLD : NORMAL,
      }}>
      {props.children}
    </RNText>
  );
};

Text.defaultProps = {
  color: colors.black,
  fontSize: 16,
  fontFamily: fonts.primary,
  center: false,
};

export default Text;
