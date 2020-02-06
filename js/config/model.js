import AsyncStorage from '@react-native-community/async-storage';

const faveKey = 'favourite';

const storeFave = async sessionId => {
  try {
    let existingIds = JSON.parse(await AsyncStorage.getItem(faveKey)) || [];
    if (existingIds.indexOf(sessionId) === -1) {
      existingIds.push(sessionId);
    }

    await AsyncStorage.setItem(faveKey, JSON.stringify(existingIds));

    let result = await AsyncStorage.getItem(faveKey);
    return result;
  } catch (e) {
    // saving error
  }
};

const getFaves = async () => {
  try {
    const value = await AsyncStorage.getItem(faveKey);
    return JSON.parse(value);
  } catch (e) {
    // error reading value
  }
};

const removeFave = async sessionId => {
  try {
    let existingIds = JSON.parse(await AsyncStorage.getItem(faveKey)) || [];

    let newIds = existingIds.filter(id => {
      return id !== sessionId;
    });

    await AsyncStorage.setItem(faveKey, JSON.stringify(newIds));
    let result = await AsyncStorage.getItem(faveKey);
    return result;
  } catch (e) {
    // saving error
  }
};

export {storeFave, getFaves, removeFave};
