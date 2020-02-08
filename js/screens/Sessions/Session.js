import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from '../Schedule/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../globalStyles';
import sessionStyles from './sessionStyles';
import LinearGradient from 'react-native-linear-gradient';
import ModalScreen from '../../components/modal';

const timeFormatter = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

const toggleModal = () => setOpenModal(!openModal);

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

      <TouchableOpacity style={sessionStyles.h3} onPress={toggleModal}>
        <Image
          style={{width: 120, height: 120, borderRadius: 70}}
          source={{uri: item.speaker.image}}
        />

        <Text style={sessionStyles.h3}>{item.speaker.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={sessionStyles.h3} onPress={toggleModal}>
        <ModalScreen open={toggle} onClose={setToggle}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              lineHeight: 35,
              marginBottom: 10,
            }}>
            {item.speaker.bio}
          </Text>
          <TouchableOpacity>
            <View>
              <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                style={styles.button}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.speaker.url)}>
                  <Text>Read More on Wikipedia</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </ModalScreen>
      </TouchableOpacity>

      <Button
        style={sessionStyles.btn}
        title={buttonTitle}
        onPress={() => {
          //console.log('clicked');
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
