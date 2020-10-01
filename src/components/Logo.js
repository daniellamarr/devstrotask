import React from 'react';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Text from './Text';

const Logo = () => {
  return (
    <Text color={colors.white} fontSize={25} fontFamily={fonts.secondary}>
      ASTROWORLD
    </Text>
  );
};

export default Logo;
