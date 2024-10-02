import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Alert, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { useSQLiteContext } from 'expo-sqlite/next';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/colors/colors.js';

export default Movies = ({ navigation }) => {
    const [movieSearch, setMovieSearch] = useState();
    const [moviesData, setMoviesData] = useState([]);
    const db = useSQLiteContext();

    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        const result = await db.getAllAsync(`SELECT * FROM Movies ORDER BY title ASC;`);
        setMoviesData(result);
    }

    const platformLogos = {
        Netflix: require('../../assets/images/netflix.png'),
        Disneyplus: require('../../assets/images/disneyplus.jpeg'),
        Prime: require('../../assets/images/prime.png'),
        Max: require('../../assets/images/hbo.jpg'),
    };

    const deleteAlert = () => {
        Alert.alert(
            'Delete Plan',
            'Are you sure you want to delete this plan?',
            [
              {
                text: 'NO',
                onPress: () => console.log('Cancel'),
                style: 'cancel',
              },
              {
                text: 'YES',
                onPress: () => console.log('OK Pressed') // add code that deletes the plan
              },
            ],
        );
    };

    const toggleIcon = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Watched' ? 'Not watched' : 'Watched';

        await db.runAsync(`UPDATE Movies SET status = ? WHERE id = ?;`, [newStatus, id]);

        setMoviesData((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, status: newStatus } : movie
            )
        );
    };

    const renderMovie = ({ item }) => {
        const currentIcon = item.status === 'Watched' ? 'check' : 'x';

        return (
            <View style={styles.movieWrapper}>
                <View>
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
                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.button} onPress={deleteAlert}>
                        <Feather name="trash-2" size={25} color={colors.red}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Feather name="edit-2" size={25} color={colors.textDark}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => toggleIcon(item.id, item.status)}>
                        <Feather name={currentIcon} size={35} color={currentIcon === 'x' ? colors.black : colors.green} />
                    </TouchableOpacity>
                </View>
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
                value={movieSearch}
                onChangeText={text => setMovieSearch(text)}
            />
            { /* Filter button */}
            <TouchableOpacity style={styles.filterWrapper} onPress={() => {}}>
                <Feather name="filter" size={25} color={colors.textDark}/>
                <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
            { /* Movies List */ }
            <FlatList
                data={moviesData}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id.toString()}
            />
            { /* Add Movie Button */ }
            <View style={styles.footer}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewMovie')}>
                    <Feather name="plus" size={50} color={colors.textDark}/>
                </TouchableOpacity>
            </View>
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
        borderColor: colors.black,
        backgroundColor: colors.textLight,
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
    filterWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.textLight,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    filterText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    movieWrapper: {
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    optionsWrapper: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: colors.lightBlue,
    },
    movieCard: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: colors.lightBlue,
        borderBottomColor: colors.textDark,
        borderBottomWidth: 2,
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
    },
    button: {
        borderColor: colors.black,
        borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderTopColor: colors.black,
        borderTopWidth: 2,
    },
    addButton: {
        width: 70,
        height: 70,
        backgroundColor: colors.textLight,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});