import { View, Text, Image, StyleSheet } from 'react-native';


function WelcomeScreen({navigation}) {
  return (<View style={styles.container}>

    <Image 
    style={styles.logo}
    source={require('../assets/little-lemon-logo.png')}
    />

    <Text>
      Little Lemon, your local Mediterranean Bistro
    </Text>

    <Text>
      NewsLetter
    </Text>
  </View>);
};

export default WelcomeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 48,
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        
    },


});