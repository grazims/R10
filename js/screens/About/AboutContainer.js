import React from 'react';
import About from './About';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {View, Text} from 'react-native';

const AboutContainer = () => {
  return (
    <Query query={GET_CONDUCT}>
      {({loading, data}) => {
        console.log(loading, data);
        if (loading || !data) {
          return (
            <View>
              <Text>Loading...</Text>
            </View>
          );
        }

        return (
          <About
            // title="Date & Venue"
            // desc="The R10 conference will take place on Tuesday, June 27, 2017
            // in Vancouver, BC"
            // title="Code of Conduct"
            data={data.allConducts}
          />
        );
      }}
    </Query>
  );
};

const GET_CONDUCT = gql`
  query {
    allConducts(orderBy: order_ASC) {
      order
      title
      description
    }
  }
`;

export default AboutContainer;

//create config file and add the graphicql endereço
// config/js
