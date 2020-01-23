import React from 'react';
import {View, Text, FlatList, styles} from 'react-native';
import ConductItem from '../../components/ConductItem';
import Logo from '../../components/logo';
//import styles from './typographyStyles';

const About = ({title, desc, data}) => {
  console.log(data);
  return (
    <View>
      <Logo />
      <Text style={{fontSize: 20}}>
        R10 is a confederence that focuses on just about any topic related to
        dev.
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Date & Venue</Text>
      <Text style={{fontSize: 20}}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Code of Conduct</Text>

      <FlatList
        data={data}
        renderItem={({item}) => <ConductItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default About;
