import React from 'react';
import {Text} from 'react-native';
import {ApolloProvider} from 'react-apollo';

import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigator />
    </ApolloProvider>
  );
};

export default App;
