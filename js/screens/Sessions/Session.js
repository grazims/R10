import React, {useState} from 'react';
import {View, Text, Button, Image, Linking, SafeAreaView} from 'react-native';
import styles from '../Schedule/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../globalStyles';
import sessionStyles from './sessionStyles';
import LinearGradient from 'react-native-linear-gradient';
import ModalScreen from '../../components/Modal';

const timeFormatter = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});
const Section = ({children, ...props}) => (
  <SafeAreaView {...props}>{children}</SafeAreaView>
);
const Session = ({
  navigation,
  item,
  addFaveSession,
  faveIds,
  removeFaveSession,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  const toggleModal = () => setOpenModal(!openModal);

  const isFave = faveIds.indexOf(item.id) !== -1;
  const buttonTitle = isFave ? 'Remove from Faves' : 'Add to Faves';
  return (
    <View style={globalStyles.container}>
      <Text style={styles.h2Loc}>{item.location}</Text>
      <Text style={styles.titleSche}>{item.title}</Text>
      <Text style={sessionStyles.h3Date}>{timeFormatter(item.startTime)}</Text>
      <Text style={globalStyles.h2}>{item.description}</Text>
      <Text style={sessionStyles.h2}>Presented by:</Text>

      <TouchableOpacity
        onPress={toggleModal}
        style={sessionStyles.sessionContainer}>
        <Image
          style={sessionStyles.sessionImage}
          source={{uri: item.speaker.image}}
        />
        <Text style={sessionStyles.spkrName}>{item.speaker.name}</Text>
      </TouchableOpacity>
      <ModalScreen open={openModal} onClose={closeModal}>
        <Image style={sessionStyles.image} source={{uri: item.speaker.image}} />
        <Text style={sessionStyles.speaker}>{item.speaker.name}</Text>
        <Text style={globalStyles.h2}>{item.speaker.bio}</Text>
        <Section style={sessionStyles.favoriteBtn}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={sessionStyles.btn}>
            <TouchableOpacity onPress={() => Linking.openURL(item.speaker.url)}>
              <Text style={sessionStyles.btnText}>Read More on Wikipedia</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Section>
      </ModalScreen>

      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={sessionStyles.btn}>
        <Button
          title={buttonTitle}
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
export default Session;
