import React from 'react';
import {View, Text, FlatList, SectionList, SafeAreaView} from 'react-native';
import Logo from '../../components/logo';
import globalStyles from '../globalStyles';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const ScheduleItem = ({item}) => (
  <View>
    <Text style={styles.h2Date}>{item.startTime}</Text>
    <Text style={styles.titleSche}>{item.title}</Text>
    <Text style={styles.h2Loc}>{item.location}</Text>
  </View>
);

const Schedule = ({startTime, title, location, data}) => {
  return (
    <View>
      <Logo />
      {/* //REMOVER O LOGO */}

      <FlatList
        data={data}
        renderItem={({item}) => <ScheduleItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Schedule;
//fazer uma session list
