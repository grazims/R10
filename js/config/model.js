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
  } catch (e) {}
};

const getFaves = async () => {
  try {
    const value = await AsyncStorage.getItem(faveKey);
    return JSON.parse(value);
  } catch (e) {}
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
  } catch (e) {}
};

export {storeFave, getFaves, removeFave};
