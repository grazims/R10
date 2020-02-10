import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {FavesProvider} from './components/context/FavesContext';

import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavesProvider>
        <RootStackNavigator />
      </FavesProvider>
    </ApolloProvider>
  );
};

export default App;
