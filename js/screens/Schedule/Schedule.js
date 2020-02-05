import React from 'react';
import {View, Text, SectionList, SafeAreaView} from 'react-native';
import Logo from '../../components/logo';
import globalStyles from '../globalStyles';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const timeFormatter = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

const sessionGrouper = (headers, session) => {
  const sectionIndex = headers.findIndex(
    ({title}) => title === session.startTime,
  );

  if (sectionIndex === -1)
    return [
      ...headers,
      {
        title: session.startTime,
        data: [session],
      },
    ];

  headers[sectionIndex].data.push(session);

  return headers;
};

const ScheduleItem = ({item, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Session', {item})}>
    <Text style={styles.titleSche}>{item.title}</Text>
    <Text style={styles.h2Loc}>{item.location}</Text>
  </TouchableOpacity>
);

const Schedule = ({startTime, title, location, data, navigation}) => {
  return (
    <View>
      <SectionList
        style={styles.scheduleContainer}
        sections={data.reduce(sessionGrouper, [])}
        renderItem={({item}) => (
          <ScheduleItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.h2Date}>{timeFormatter(title)}</Text>
        )}
      />
    </View>
  );
};

export default withNavigation(Schedule);

//lembrar de checar o fim da sessao. se vai até o final
//checar o loading e por no centro
//lembrar de por o footer
