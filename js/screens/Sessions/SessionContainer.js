import React from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import globalStyles from '../globalStyles';
import {View, Text, SectionList} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from '../Schedule/styles';
import sessionStyles from './sessionStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const timeFormatter = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

const sessionGrouper = (headers, session, item) => {
  const sectionIndex = headers.findIndex(({title}) => title === item.startTime);

  if (sectionIndex === -1)
    return [
      ...headers,
      {
        title: item.startTime,
        data: [item],
      },
    ];

  headers[sectionIndex].data.push(item);

  return headers;
};

const SessionContainer = ({navigation}) => {
  let item = navigation.getParam('item');
  //let speaker = navigation.getParam('speaker');
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity>
        <Text style={styles.h2Loc}>{item.location}</Text>
        <Text style={styles.titleSche}>{item.title}</Text>
        <Text style={sessionStyles.h3Date}>
          {timeFormatter(item.startTime)}
        </Text>
        <Text style={globalStyles.h2}>{item.description}</Text>
        <Text style={sessionStyles.h2}>Presented by:</Text>
        <Text style={sessionStyles.h3}>{item.speaker.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(SessionContainer);

//add timeformater
//add a foto e botao "remove from faves"
