import AsyncStorage from '@react-native-community/async-storage';

storeData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e) {
    // saving error
  }
};

getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export default AsyncStorage;

// import model from 'models'

// ids = [1,3,4]
// 'ids': []
// 'names': []
// 'cities': []

// model.storeData('ids', ids)
// model.getData('names')

// A function that adds a Fave object to the database
// A function that removes a Fave object from the database
// A function that queries the database for all Fave objects
// All of these methods should return the AsyncStorage Promise,
// so you can await the result in your components
