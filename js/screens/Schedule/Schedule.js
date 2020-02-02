import React from 'react';
import {View, Text, FlatList, SectionList, SafeAreaView} from 'react-native';
import Logo from '../../components/logo';
import globalStyles from '../globalStyles';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
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

const ScheduleItem = ({item}) => (
  <View>
    <Text style={styles.titleSche}>{item.title}</Text>
    <Text style={styles.h2Loc}>{item.location}</Text>
  </View>
);

const Schedule = ({startTime, title, location, data}) => {
  return (
    <View>
      <Logo />
      {/* //REMOVER O LOGO */}

      <SectionList
        sections={data.reduce(sessionGrouper, [])}
        // data={data}
        renderItem={({item}) => <ScheduleItem item={item} />}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.h2Date}>{timeFormatter(title)}</Text>
        )}
      />
    </View>
  );
};

export default Schedule;
//fazer uma session list
//fazer uma lista com as sessoes diferentes como se fosse uma array

//lembrar de checar o fim da sessao. se vai até o final
