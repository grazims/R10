import React from 'react';
import Faves from './Faves';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import FavesContext from '../../components/context/FavesContext';

const FavesContainer = () => {
  return (
    <FavesContext.Consumer>
      {({faveIds, addFaveSession, removeFaveSession}) => (
        <Query query={SESSIONS_INFO}>
          {({loading, data}) => {
            return (
              <Faves
                addFaveSession={addFaveSession}
                removeFaveSession={removeFaveSession}
                faveIds={faveIds}
                data={data.allSessions.filter(session =>
                  faveIds.includes(session.id),
                )}
              />
            );
          }}
        </Query>
      )}
    </FavesContext.Consumer>
  );
};

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
        url
      }
    }
  }
`;

export default FavesContainer;
