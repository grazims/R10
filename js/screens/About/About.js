import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import ConductItem from '../../components/ConductItem';
import Logo from '../../components/logo';
import globalStyles from '../globalStyles';
import Footer from '../../components/Footer';

const About = ({title, desc, data}) => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Logo />
        <Text style={globalStyles.h2}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>

        <Text style={globalStyles.title}>Date & Venue</Text>
        <Text style={globalStyles.h2}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC
        </Text>
      </View>

      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Code of Conduct</Text>

        <FlatList
          data={data}
          renderItem={({item}) => <ConductItem item={item} />}
          keyExtractor={item => item.id}
        />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default About;
