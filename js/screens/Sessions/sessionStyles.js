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
    padding: 20,
    borderRadius: 40,
    marginTop: 30,
  },
  speaker: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    textAlign: 'center',
    padding: 15,
  },
  background: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 30,
  },
  modal: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginTop: 30,
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
  },
  favoriteBtn: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    //color: '#fff',
    borderRadius: 50,
    marginBottom: 60,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
  },
  spkrName: {
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingLeft: 5,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  sessionContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  sessionImage: {
    width: 120,
    height: 120,
    borderRadius: 70,
    margin: 15,
  },
});

export default sessionStyles;
