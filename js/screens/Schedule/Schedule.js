import React from 'react';
import {View, Text, FlatList, styles} from 'react-native';
import ConductItem from '../../components/ConductItem';
import Logo from '../../components/logo';
//import styles from './typographyStyles';

const ScheduleItem = ({item}) => (
  <Text>
    {item.title}
    {item.location}
    {item.startTime}
  </Text>
);

const Schedule = ({startTime, title, location, data}) => {
  console.log(data);
  return (
    <View>
      <Text>whatever</Text>

      <FlatList
        data={data}
        renderItem={({item}) => <ScheduleItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Schedule;
