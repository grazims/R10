import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FavesContext} from './context/FavesContext/FavesContext';
import {View, TouchableOpacity} from 'react-native';

const FavoriteIcon = ({id, ...props}) => {
  const {favorites, addFaveSession, removeFaveSession} = useContext(
    FavesContext,
  );

  return (
    <TouchableOpacity
      onPress={() =>
        favorites && favorites.includes(id)
          ? removeFaveSession(id)
          : addFaveSession(id)
      }>
      <Icon
        name={
          favorites && favorites.includes(id) ? 'md-heart' : 'md-heart-empty'
        }
        size={20}
      />
    </TouchableOpacity>
  );
};

export default FavoriteIcon;
