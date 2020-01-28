import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ConductItem from '../../components/ConductItem';
import Logo from '../../components/logo';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const About = ({title, desc, data}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.font}>
        R10 is a conference that focuses on just about any topic related to dev.
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

//add animation on the + sign
