import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import moviesData from '../assets/data/moviesData';
import colors from '../assets/colors/colors.js';

export default Movies = ({ navigation }) => {
    const [movie, setMovie] = useState();

    const platformLogos = {
        Netflix: require('../assets/images/netflix.png'),
        Disneyplus: require('../assets/images/disneyplus.jpeg'),
        Prime: require('../assets/images/prime.png'),
        Max: require('../assets/images/hbo.jpg'),
      };

    const renderMovie = ({ item }) => {
        return (
            <View style={styles.movieWrapper}>
                <TouchableOpacity style={styles.movieCard} onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <View style={styles.movieInfoWrapper}>
                        <View style={styles.movieInfo}>
                            <Feather name="clock" size={22} color={colors.textDark}/>
                            <Text style={[styles.movieInfoText, {marginLeft: 4 }]}>{item.duration}</Text>
                            <Text style={styles.movieInfoText}>{item.genre}</Text>
                        </View>
                        <View>
                            <Image 
                                source={platformLogos[item.platform]}
                                style={styles.platformIcon}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        );
    };

    return (
        <View style={styles.container}>
            { /* Header */ }
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={20} color={colors.textDark}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            { /* Search Bar */ }
            <SearchBar
                lightTheme={true} 
                containerStyle={styles.searchBarContainer} 
                inputContainerStyle={styles.searchBarInput}
                inputStyle={styles.inputText}
                placeholder='Search for a movie'
                value={movie}
                onChangeText={text => setMovie(text)}
            />
            { /* Plan List */ }
            <FlatList
                data={moviesData}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerLeft: {
        borderColor: colors.textLight,
        backgroundColor: colors.lightBlue,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    searchBarInput: {
        backgroundColor: colors.white,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.textLight,
    },
    searchBarContainer: {
        backgroundColor: colors.white,
        borderColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        
    },
    inputText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
    },
    movieWrapper: {
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    movieCard: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        borderColor: colors.lightBlue,
        borderWidth: 2,
        backgroundColor: colors.lightBlue,
    },
    movieTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        marginBottom: 15,
    },
    movieInfoWrapper: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    movieInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    movieInfoText: {
        fontFamily: 'Montserrat-Medium',
        color: colors.textDark,
        marginLeft: 15,
    },
    platformIcon: {
        width: 30,
        height: 30,
    }
});