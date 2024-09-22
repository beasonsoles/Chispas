import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

export default MovieDetails = ({ route, navigation }) => {
    const { movie } = route.params;

    return (
        <View style={styles.container}>
            <Text>Movie Card {movie.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});
