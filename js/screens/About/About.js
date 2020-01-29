import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ConductItem from '../../components/ConductItem';
import Logo from '../../components/logo';
import styles from './styles';
import globalStyles from '../globalStyles';

const About = ({title, desc, data}) => {
  return (
    <View style={globalStyles.container}>
      <Logo />
      <Text style={globalStyles.h2}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>

      <Text style={globalStyles.title}>Date & Venue</Text>
      <Text style={globalStyles.h2}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC
      </Text>
      <Text style={globalStyles.title}>Code of Conduct</Text>

      <FlatList
        data={data}
        renderItem={({item}) => <ConductItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default About;

//add animation on the + sign e qdo abre o texto o
//sinal muda pra -
//add o titulo antes do logo
//add safeareaview pra add style na lista
