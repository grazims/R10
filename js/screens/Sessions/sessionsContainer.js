import React from 'react';
import Sessions from './Sessions';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {View, Text} from 'react-native';

const SessionsContainer = () => {
  return (
    // <Query query={SESSIONS_INFO}>
      {({loading, data}) => {
       // console.log(loading, data);
        if (loading || !data) {
          return (
            <View>
              <Text>Loading...</Text>
            </View>
          );
        }

        return <Session data={data.allSessions} />;
      }}
    </Query>
  );
};

const SESSIONS_INFO = gql`
//   query {
//     allSessions {
//       id
//       startTime
//       title
//       location
//     }
  }
`;

export default SessionsContainer;