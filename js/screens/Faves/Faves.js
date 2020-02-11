// import React from 'react';
// import {View, Text} from 'react-native';

// const Faves = () => {
//   return (
//     <View>
//       <Text>RED Academy 2020</Text>
//     </View>
//   );
// };
// export default Faves;

import React from 'react';
import {View, Text, SectionList, SafeAreaView} from 'react-native';
import globalStyles from '../globalStyles';
//import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../components/context/FavesContext/FavesContext';

const timeFormatter = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

const sessionGrouper = (headers, session) => {
  const sectionIndex = headers.findIndex(
    ({title}) => title === session.startTime,
  );

  if (sectionIndex === -1)
    return [
      ...headers,
      {
        title: session.startTime,
        data: [session],
      },
    ];

  headers[sectionIndex].data.push(session);

  return headers;
};

const Faves = ({data, navigation}) => {
  //   const [favorites] = FavesContext();
  return (
    <View>
      <SectionList
        sections={data.reduce(sessionGrouper, [])}
        keyExtractor={({id}) => id}
        renderItem={({item: {id, title, location}}, i) => (
          <View>
            <TouchableOpacity onPress={() => navigation.push('Session', {id})}>
              <Text>{title}</Text>
            </TouchableOpacity>
            <View>
              <Text>{location}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default withNavigation(Faves);
