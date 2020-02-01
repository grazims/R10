import React from 'react';
import Session from './Session';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import globalStyles from '../globalStyles';
import {View, Text} from 'react-native';

const SessionContainer = () => {
  return (
    <View>
      <Text style={globalStyles.h2}>grazi!!!</Text>
    </View>
  );
};

// const SessionContainer = () => {
//   return (
//     <Query query={SESSIONS_INFO}>
//       {({loading, data}) => {
//         //console.log(loading, data);
//         if (loading || !data) {
//           return (
//             <View>
//               <Text>Loading...</Text>
//             </View>
//           );
//         }

//         return <Session data={data.allSessions} />;
//       }}
//     </Query>
//   );
// };

const SESSIONS_INFO = gql`
  query {
    allSessions {
      id
      startTime
      title
      location
      description
      speaker {
        name
        image
        id
        bio
      }
    }
  }
`;

export default SessionContainer;
