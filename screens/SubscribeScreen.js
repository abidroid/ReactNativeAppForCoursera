import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TextInput } from 'react-native';


const SubscribeScreen = () => {
  // Add subscribe screen code here
  return (<View style={styles.container}>
    <Image style={styles.logo}
      source={require('../assets/little-lemon-logo-grey.png')}
    />

    <Text style={styles.introText}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>

    <TextInput 
    placeholder='Type your email'

    />

  </View>);
};

export default SubscribeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 16,
  },

  logo: {
    width: 164,
    height: 164,
    resizeMode: 'contain',
  },

  introText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#7C7C7C'

  },

  input: {
    borderRadius: 8,
    borderColor: 'black',
    width: '100%'
  },


  buttonText: {
    color: 'white'
  },

  button: {
    backgroundColor: 'green',
    padding: 8,
    textAlign: 'center',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  }


});