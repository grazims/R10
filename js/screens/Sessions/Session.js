import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Schedule/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../globalStyles';
import sessionStyles from './sessionStyles';

const timeFormatter = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

const Session = ({item, addFaveSession, faveIds, removeFaveSession}) => {
  const isFave = faveIds.indexOf(item.id) !== -1;
  const buttonTitle = isFave ? 'Remove from Faves' : 'Add to Faves';
  return (
    <View style={globalStyles.container}>
      <Text style={styles.h2Loc}>{item.location}</Text>
      <Text style={styles.titleSche}>{item.title}</Text>
      <Text style={sessionStyles.h3Date}>{timeFormatter(item.startTime)}</Text>
      <Text style={globalStyles.h2}>{item.description}</Text>
      <Text style={sessionStyles.h2}>Presented by:</Text>
      <Text style={sessionStyles.h3}>{item.speaker.name}</Text>
      <Button
        title={buttonTitle}
        onPress={() => {
          console.log('clicked');
          if (isFave) {
            removeFaveSession(item.id);
          } else {
            addFaveSession(item.id);
          }
        }}
      />
    </View>
  );
};
export default Session;
