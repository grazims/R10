import React from 'react';
import {View, Text, SectionList, Button} from 'react-native';
import styles from '../Schedule/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import FavoriteIcon from '../../components/FavoriteIcon';
import LinearGradient from 'react-native-linear-gradient';
import sessionStyles from '../Sessions/sessionStyles';

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
              {/* <FavoriteIcon id={id} /> */}
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.h2Date}>{timeFormatter(title)}</Text>
        )}
      />
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={sessionStyles.btn}>
        <Button
          title={'buttonTitle'}
          style={sessionStyles.btnText}
          onPress={() => {
            if (isFave) {
              removeFaveSession(item.id);
            } else {
              addFaveSession(item.id);
            }
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default withNavigation(Faves);
