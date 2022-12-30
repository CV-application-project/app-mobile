import {StyleSheet} from 'react-native';

const StyleCommon = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7',
    margin:10
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '90%',
  },
  button: {
    height: 60,
    margin: 12,
    borderRadius: 16,
    backgroundColor: '#6495ED',
  },
  buttonText: {
    paddingTop: 14,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
  },
});
export default StyleCommon;
