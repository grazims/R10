import React from 'react';
import {View, Text} from 'react-native';
import Logo from '../../components/logo';
import globalStyles from '../globalStyles';
import styles from './sessionStyles';

// const Session = () => {
//   return <Text>hello</Text>;
// };

// const SessionItem = ({item}) => (
//   <View>{/* <Text style={styles.h2Date}>{item.startTime}</Text> */}</View>
// );

const Session = ({location, title, startTime, data}) => {
  return (
    <View>
      <Logo />
      {/* //REMOVER O LOGO */}
    </View>
  );
};

export default Session;
