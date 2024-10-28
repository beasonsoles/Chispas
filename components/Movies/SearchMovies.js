import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

export default SearchMovies = ({ route, navigation }) => {
    const movieList = route.params;
    console.log(movieList);

    return (
        <View style={styles.container}>
            <Text>Movie Card </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});