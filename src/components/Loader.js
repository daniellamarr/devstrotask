import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Text from './Text';
import {mainStyle} from '../styles';
import colors from '../styles/colors';

const Loader = ({loaderText}) => {
  return (
    <View style={mainStyle.loaderView}>
      <View style={mainStyle.loaderInner}>
        <ActivityIndicator color={colors.primary} size="large" />
        {loaderText && loaderText.length > 0 && (
          <View style={mainStyle.loaderTextView}>
            <Text>{loaderText}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Loader;
