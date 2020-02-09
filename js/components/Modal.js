import React from 'react';
import {
  Modal as NativeModal,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
//import Section from './Section';
//import Heading from './Heading';
//import globalStyles from '../assets/styles/styles';
import {ScrollView} from 'react-native-gesture-handler';

const Modal = ({children, open = false, onClose}) => (
  <NativeModal animationType="slide" transparent={false} visible={open}>
    {/* <Section style={globalStyles.modalContainer}> */}
    <TouchableOpacity onPress={onClose}>
      <Text style={{padding: 40}}>x</Text>
      <Text style={{padding: 30}}>About the Speaker</Text>
    </TouchableOpacity>
    <ScrollView>
      {children}
      {/* <Section style={globalStyles.modal}>{children}</Section> */}
    </ScrollView>
    {/* </Section> */}
  </NativeModal>
);

export default Modal;
