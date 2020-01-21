import React from 'react';
import {Image, View} from 'react-native';
import styles from './logo.styles.js';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../components/images/r10_logo.png')} />
    </View>
  );
};

export default Logo;
