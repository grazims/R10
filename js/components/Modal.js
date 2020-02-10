import React from 'react';
import {
  Modal as NativeModal,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import sessionStyles from '../screens/Sessions/sessionStyles';

const Section = ({children, ...props}) => (
  <SafeAreaView {...props}>{children}</SafeAreaView>
);

const Modal = ({children, open = false, onClose}) => (
  <NativeModal animationType="slide" transparent={false} visible={open}>
    <Section style={sessionStyles.background}>
      <TouchableOpacity onPress={onClose}>
        <Section style={sessionStyles.container}>
          <Text style={sessionStyles.btnclose}>X</Text>
          <Text style={sessionStyles.title}>About the Speaker</Text>
        </Section>
      </TouchableOpacity>
      <Section style={sessionStyles.modal}>
        <ScrollView>{children}</ScrollView>
      </Section>
    </Section>
  </NativeModal>
);

export default Modal;
