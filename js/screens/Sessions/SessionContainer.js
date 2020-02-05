import React from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import globalStyles from '../globalStyles';
import {View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

const SessionContainer = ({navigation}) => {
  let item = navigation.getParam('item');
  return (
    <View>
      <Text style={globalStyles.h2}>{item.title}</Text>
      <Text style={globalStyles.h2}>{item.description}</Text>
    </View>
  );
};

export default withNavigation(SessionContainer);
