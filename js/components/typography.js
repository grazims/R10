import React from 'react';
import {Text} from 'react-native';
import styles from './typographyStyles';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const AllText = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export {Title, AllText};
