import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from './colors';
import fonts from './fonts';

const {width, height} = Dimensions.get('window');

export const mainStyle = StyleSheet.create({
  button: {
    borderRadius: 30,
    padding: 15,
    paddingHorizontal: 80,
    alignItems: 'center',
  },
  loaderView: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderInner: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loaderTextView: {
    marginLeft: 10,
    width: 200,
  },
});

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  image: {
    height,
    width,
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedText: {
    fontSize: 60,
    fontFamily: fonts.secondary,
    color: colors.white,
  },
});

export const landingStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height,
  },
  buttons: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  authView: {
    position: 'absolute',
    top: 300,
    backgroundColor: colors.white,
    width,
    height: height - 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  logoView: {
    marginTop: 50,
    marginLeft: 20,
  },
  formView: {
    marginTop: 50,
  },
  input: {
    padding: 10,
    paddingLeft: 0,
    borderBottomColor: colors.greyEE,
    borderBottomWidth: 1,
    fontFamily: fonts.primary,
    marginBottom: 15,
  },
  buttonView: {
    marginTop: 20,
  },
});

export const dashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  profileIcon: {
    position: 'absolute',
    right: 20,
    top: 65,
    shadowColor: colors.grayAA,
    shadowRadius: 10,
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.2,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userItem: {
    width: '47%',
    borderRadius: 10,
    shadowColor: colors.grayAA,
    shadowRadius: 10,
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.2,
    marginBottom: 10,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  itemDetails: {
    padding: 10,
  },
});
