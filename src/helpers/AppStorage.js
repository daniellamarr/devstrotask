import AsyncStorage from '@react-native-community/async-storage';

export const signIn = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (err) {}
};

export const setUser = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (err) {}
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user;
  } catch (err) {}
};

export const checkIfSignedIn = async () => {
  try {
    const check = await AsyncStorage.getItem('userToken');
    return check ? true : false;
  } catch (err) {}
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (err) {}
};

export const signOut = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (err) {}
};
