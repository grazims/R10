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

const SessionList = ({faveIds, data, navigation}) => {
  return (
    <View>
      <SectionList
        sections={formatSessionData(data)}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Session', {item})}>
            <View style={styles.sessionContainer}>
              <Text style={styles.titleSession}>{item.title}</Text>
              <View style={styles.iconContainer}>
                <Text style={styles.locationSession}>{item.location}</Text>
                {faveIds.indexOf(item.id) !== -1 && (
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
                    size={22}
                    color={style.red.color}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>
            {moment(section.title).format('LT')}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const Faves = ({data}) => {
  return (
    <View>
      <SectionList
        sections={data.reduce(sessionGrouper, [])}
        keyExtractor={({id}) => id}
        renderItem={({item: {id, title, location}}, i) => (
          <View>
            <TouchableOpacity onPress={() => navigation.push('Session', {id})}>
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
