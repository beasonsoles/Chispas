import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Alert, FlatList, Modal, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { useSQLiteContext } from 'expo-sqlite/next';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

import colors from '../../assets/colors/colors.js';

export default Movies = ({ navigation }) => {
    const [movieSearch, setMovieSearch] = useState();
    const [moviesData, setMoviesData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const db = useSQLiteContext();

    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        const result = await db.getAllAsync(`SELECT * FROM Movies ORDER BY title ASC;`);
        setMoviesData(result);
    }

    const type_data = [
        { label: 'Movie', value: '1'},
        { label: 'Series', value: '2'},
        { label: 'Saga', value: '3'},
    ];
    const genre_data = [
        { label: 'Any', value: '1'},
        { label: 'Drama', value: '2'},
        { label: 'Comedy', value: '3'},
        { label: 'Thriller', value: '4'},
        { label: 'Sci-Fi', value: '5'},
        { label: 'Action', value: '6'},
        { label: 'Fantasy', value: '7'},
        { label: 'Animation', value: '8'},
        { label: 'Documentary', value: '9'},
        { label: 'Horror', value: '10'},
        { label: 'Biography', value: '11'},
        { label: 'Musical', value: '12'},
        { label: 'Adventure', value: '13'},
    ];
    const [type_value, setTypeValue] = useState(type_data[0].value);
    const [genre_value, setGenreValue] = useState([]);
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [episodes, setEpisodes] = useState('');

    const platformLogos = [
        { name: 'Netflix', logo: require('../../assets/images/netflix.png') },
        { name: 'Disneyplus', logo: require('../../assets/images/disneyplus.jpeg') },
        { name: 'Prime', logo: require('../../assets/images/prime.png') },
        { name: 'Max', logo: require('../../assets/images/hbo.jpg') },
    ];    
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    const handlePlatformSelect = (platformName) => {
        setSelectedPlatforms((prev) => {
            if (prev.includes(platformName)) {
                return prev.filter((name) => name !== platformName); //deselect
            } else {
                return [...prev, platformName]; // select
            }
        });
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
        const platforms = item.platform.split(';').map(platformName => platformName.trim());        
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
                            <View style={{flexDirection: 'row', paddingLeft: 10 }}>
                                {platforms.map((platformName, index) => {
                                    const platform = platformLogos.find(logo => logo.name === platformName);
                                    return platform ? (
                                        <Image 
                                            key={index}
                                            source={platform.logo}
                                            style={styles.platformIcon}
                                        />
                                    ) : null;
                                })}
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
            <TouchableOpacity style={styles.filterWrapper} onPress={() => setModalVisible(true)}>
                <Feather name="filter" size={25} color={colors.textDark}/>
                <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
            { /* Pop-up */}
            <View style={styles.modalWrapper}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.modalContent}>
                    { /* Pop up back button */}
                    <View style={[styles.headerWrapper, {paddingHorizontal: 0, paddingTop: 0,}]}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <View style={styles.headerLeft}>
                                <Feather name="x" size={20} color={colors.textDark}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Filter</Text>
                    </View>
                    <Text style={[styles.titleText, {marginTop: 20}]}>Type</Text>
                    <Dropdown
                        style={styles.dropdown}
                        selectedTextStyle={styles.dropdownText}
                        itemTextStyle={styles.dropdownText}
                        data={type_data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={type_value}
                        onChange={item => {
                            setTypeValue(item.value);
                        }}
                    />

                    <Text style={styles.titleText}>Genre</Text>
                    <MultiSelect
                        style={styles.dropdown}
                        selectedTextStyle={[styles.dropdownText, {paddingHorizontal: 0}]}
                        placeholderStyle={styles.dropdownText}
                        itemTextStyle={styles.dropdownText}
                        data={genre_data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select an option"
                        value={genre_value}
                        onChange={item => {
                            setGenreValue(item);
                        }}
                        selectedStyle={styles.selectedStyle}
                    />  

                    <Text style={styles.titleText}>Duration</Text>
                    {/* Conditionally render input fields based on selected type */}
                    {type_value === '1' || type_value === '3' ? (
                        <View style={styles.durationWrapper}>
                            <TextInput 
                                style={[styles.input, { width: '35%' }]} 
                                placeholder="Hours"
                                keyboardType="numeric"
                                value={hours}
                                onChangeText={setHours}
                            />
                            <Text style={styles.durationText}>h</Text>
                            <TextInput 
                                style={[styles.input, { width: '35%' }]} 
                                placeholder="Minutes"
                                keyboardType="numeric"
                                value={minutes}
                                onChangeText={setMinutes}
                            />
                            <Text style={styles.durationText}>m</Text>
                        </View>
                    ) : (
                        <View style={styles.durationWrapper}>
                            <TextInput 
                                style={[styles.input, { width: '90%' }]} 
                                placeholder="Episodes"
                                keyboardType="numeric"
                                value={episodes}
                                onChangeText={setEpisodes}
                            />
                            <Text style={styles.durationText}>ep</Text>
                        </View>
                    )}

                    <Text style={styles.titleText}>Platform</Text>
                    <View style={styles.platformsWrapper}>
                        {platformLogos.map((platform, index) => {
                            const isSelected = selectedPlatforms.includes(platform.name);
                            return (
                                <View style={[styles.platformButton, {backgroundColor: isSelected ? colors.textLight : colors.white}]}>
                                    <TouchableOpacity 
                                        key={index}
                                        onPress={() => handlePlatformSelect(platform.name)}
                                    >
                                        <Image
                                            source={platform.logo}
                                            style={[styles.platformIcon, {marginLeft: 0}]}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>
                </Modal>
            </View> 
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
        borderColor: colors.black,
        borderWidth: 2,
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
        width: 40,
        height: 40,
        marginLeft: 5,
    },
    platformButton: {
        padding: 10,
        borderRadius: 10,
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
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        marginTop: 15,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        marginLeft: 90,
    },
    titleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        paddingHorizontal: 20,
        marginBottom: 8,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    durationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    durationText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    platformsWrapper: {
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 20,
        marginBottom: 8,
    },
    dropdownText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        paddingHorizontal: 20,
    },
    selectedStyle: {
        borderRadius: 17,
        paddingHorizontal: 5,
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
        borderColor: colors.black,
        borderWidth: 2,
    },
});