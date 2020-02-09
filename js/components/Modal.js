import React from 'react';
import {
  Modal as NativeModal,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
//import Section from './Section';
//import Heading from './Heading';
//import globalStyles from '../assets/styles/styles';
import {ScrollView} from 'react-native-gesture-handler';
import sessionStyles from '../screens/Sessions/sessionStyles';

const Section = ({children, ...props}) => (
  <SafeAreaView {...props}>{children}</SafeAreaView>
);

const Modal = ({children, open = false, onClose}) => (
  <NativeModal animationType="slide" transparent={false} visible={open}>
    <Section style={sessionStyles.background}>
      <Section style={sessionStyles.modal}>
        <TouchableOpacity onPress={onClose}>
          <Section style={sessionStyles.container}>
            <Text style={sessionStyles.title}>x</Text>
            <Text style={sessionStyles.title}>About the Speaker</Text>
          </Section>
        </TouchableOpacity>
        <ScrollView>{children}</ScrollView>
      </Section>
    </Section>
  </NativeModal>
);

export default Modal;
