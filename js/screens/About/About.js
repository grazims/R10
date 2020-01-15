import React from 'react';

import {View, Text} from 'react-native';

const About = ({title, desc}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
};

export default About;
