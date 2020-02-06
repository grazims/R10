import React from 'react';
import Session from './Session';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../components/context/FavesContext';

const SessionContainer = ({navigation}) => {
  let item = navigation.getParam('item');
  return (
    <FavesContext.Consumer>
      {({faveIds, addFaveSession, removeFaveSession}) => {
        console.log('hello');
        console.log(faveIds);
        return (
          <Session
            item={item}
            addFaveSession={addFaveSession}
            removeFaveSession={removeFaveSession}
            faveIds={faveIds}
          />
        );
      }}
    </FavesContext.Consumer>
  );
};

export default withNavigation(SessionContainer);

//add a foto e botao "remove from faves"
