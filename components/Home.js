import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors.js';

Feather.loadFont();

export default Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>What do you feel like doing today?</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Plans')}>
          <Text style={styles.buttonText}>Go to my Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Movies')}>
          <Text style={styles.buttonText}>Watch a Movie</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTextContainer: {
    padding: 20,
    marginBottom: 150,
  },
  welcomeText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  button: {
    backgroundColor: colors.lightBlue,
    padding: 15,
    borderRadius: 20,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});
