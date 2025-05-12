import { View, Text, Image, StyleSheet, Pressable } from 'react-native';


function WelcomeScreen({ navigation }) {
    return (<View style={styles.container}>

        <Image
            style={styles.logo}
            source={require('../assets/little-lemon-logo.png')}
        />

        <Text style={styles.introText}>
            Little Lemon, your local Mediterranean Bistro
        </Text>

        <Pressable style={styles.button}
        onPress={()=> {navigation.navigate('Subscribe')}}
        >

            <Text style={styles.buttonText}>
                Newsletter
            </Text>
        </Pressable>

    </View>);
};

export default WelcomeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 48,
        paddingHorizontal: 24,
        alignItems: 'center',
        gap: 124,
    },

    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },

    introText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'

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