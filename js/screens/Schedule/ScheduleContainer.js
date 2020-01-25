import React from 'react';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {View, Text} from 'react-native';

const ScheduleContainer = () => {
  return (
    <Query query={SESSIONS_INFO}>
      {({loading, data}) => {
        console.log(loading, data);
        if (loading || !data) {
          return (
            <View>
              <Text>Loading...</Text>
            </View>
          );
        }

        return <Schedule data={data.allSessions} />;
      }}
    </Query>
  );
};

const SESSIONS_INFO = gql`
  query {
    allSessions {
      id
      startTime
      title
      location
    }
  }
`;

export default ScheduleContainer;
