import React from 'react';
import {View, Text, Button, Image} from 'react-native';

function ModalScreen({children, open = false, onClose, ...props}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export default ModalScreen;
