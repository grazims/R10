import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ConductItem from '../../components/ConductItem';
import Logo from '../../components/logo';

const About = ({title, desc, data}) => {
  console.log(data);
  return (
    <View>
      <Logo />
      <Text>{title}</Text>
      <Text>{desc}</Text>

      <FlatList
        data={data}
        renderItem={({item}) => <ConductItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default About;
