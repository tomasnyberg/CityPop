import { StyleSheet, View } from 'react-native';
import TitleText from '../components/TitleText.js';

export default function App({navigation, titleText, children}) {
  return (
    <View style={styles.container}>
      <TitleText style={styles.titleBox} text={titleText}></TitleText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleBox: {
    alignSelf: 'center',
    backgroundColor:'red'
  }

});
