import React from 'react';
import {View, Text} from 'react-native';
import Logo from '../../components/logo';
import globalStyles from '../globalStyles';
import styles from './styles';

const SessionsItem = ({item}) => (
  <View>{/* <Text style={styles.h2Date}>{item.startTime}</Text> */}</View>
);

const Session = ({startTime, title, location, data}) => {
  return (
    <View>
      <Logo />
      {/* //REMOVER O LOGO */}
    </View>
  );
};

export default Sessions;
