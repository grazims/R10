import {StyleSheet} from 'react-native';

const sessionStyles = StyleSheet.create({
  h3Date: {
    color: 'red',
    paddingLeft: 15,
    paddingBottom: 15,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  h2: {
    color: '#999999',
    padding: 15,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  h3: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    padding: 15,
  },
  btn: {
    color: 'purple',
    borderBottomWidth: 4,
    backgroundColor: 'blue',
    color: 'black',
    borderLeftWidth: 2,
    width: '75%',
  },
  speaker: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    textAlign: 'center',
    padding: 15,
  },
  background: {
    backgroundColor: 'purple',
    flex: 1,
    paddingTop: 30,
  },
  modal: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    marginTop: 30,
    // alignItems: 'fle',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    paddingVertical: 40,
  },
  btnclose: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    paddingRight: 70,
    paddingLeft: 15,
    paddingVertical: 40,
  },
  container: {
    flexDirection: 'row',
    paddingTop: 30,
    // alignContent: 'space-around',
    // display: 'flex',
    // paddingVertical: 20,
  },
});

export default sessionStyles;
