// // import React from 'react';

// // import {View, Text} from 'react-native';

// // const About = ({title, desc}) => {
// //   return (
// //     <View>
// //       <Text>{title}</Text>
// //       <Text>{desc}</Text>
// //     </View>
// //   );
// // };

// // export default About;

import React from 'react';
import {View, ScrollView, Text} from 'react-native';
//import CodeofConduct from '../../components/CodeofConduct/CodeofConduct';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_CONDUCT = gql`
  query {
    allConducts {
      id
      title
      description
      order
    }
  }
`;

// const About = () => {

//   return (
//     );
// };

export default About;
