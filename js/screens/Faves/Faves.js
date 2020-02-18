import React from 'react';
import {View, Text, SectionList} from 'react-native';
import styles from '../Schedule/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

const Faves = ({data, navigation}) => {
  console.log(data.reduce(sessionGrouper, []));
  return (
    <View>
      <SectionList
        sections={data.reduce(sessionGrouper, [])}
        keyExtractor={({id}) => id}
        renderItem={(
          {item: {id, title, location, startTime, description, speaker}},
          i,
        ) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.push('Session', {
                  item: {
                    id,
                    title,
                    location,
                    startTime,
                    description,
                    speaker,
                  },
                })
              }>
              <Text style={styles.titleSche}>{title}</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.h2Loc}>{location}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.h2Date}>{timeFormatter(title)}</Text>
        )}
      />
    </View>
  );
};

export default withNavigation(Faves);
