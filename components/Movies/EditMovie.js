import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { useSQLiteContext } from 'expo-sqlite/next';

import colors from '../../assets/colors/colors.js';

export default EditMovie = ({ route, navigation }) => {
    const db = useSQLiteContext();

    const { movie } = route.params;

    const type_data = [
        { label: 'Movie', value: '1'},
        { label: 'Series', value: '2'},
        { label: 'Saga', value: '3'},
    ];

    const genre_data = [
        { label: 'Drama', value: '1'},
        { label: 'Comedy', value: '2'},
        { label: 'Thriller', value: '3'},
        { label: 'Sci-Fi', value: '4'},
        { label: 'Action', value: '5'},
        { label: 'Fantasy', value: '6'},
        { label: 'Animation', value: '7'},
        { label: 'Documentary', value: '8'},
        { label: 'Horror', value: '9'},
        { label: 'Biography', value: '10'},
        { label: 'Musical', value: '11'},
        { label: 'Adventure', value: '12'},
    ];

    const platform_data = [
        { label: 'Netflix', value: '1', icon: require('../../assets/images/netflix.png') },
        { label: 'Amazon Prime', value: '2', icon: require('../../assets/images/prime.png') },
        { label: 'Disney+', value: '3', icon: require('../../assets/images/disneyplus.jpeg') },
        { label: 'HBO Max', value: '4', icon: require('../../assets/images/hbo.jpg') },
    ];

    const status_data = [
        { label: 'Not watched', value: '1'},
        { label: 'Watched', value: '2'},
    ];

    const [title, setTitle] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [type_value, setTypeValue] = useState(type_data[0].value);
    const [genre_value, setGenreValue] = useState(null);
    const [platform_value, setPlatformValue] = useState([]);
    const [status_value, setStatusValue] = useState(status_data[0].value);

    const checkForm = () => {
        if (title.trim().length === 0) {
            Alert.alert("The 'title' field cannot be empty");
            return false;
        }
        if (hours.trim().length === 0 && minutes.trim().length === 0 && episodes.trim().length === 0) {
            Alert.alert("The 'duration' field cannot be empty");
            return false;
        }
        if (genre_value === null) {
            Alert.alert("Please select a genre");
            return false;
        }
        return true;
    }

    const saveMovie = async () => {
        const save = checkForm();
        if (save) {
            let duration = '';
            let platforms = '';
            // handling duration format
            if (episodes.length > 0) {
                duration = `${episodes} ep`;
            } else {
                if (hours.length > 0 && minutes.length > 0) {
                    duration = `${hours}h ${minutes}m`;
                }
                else if (hours.length === 0 && minutes.length > 0) {
                    duration = `${minutes}m`;
                }
                else if (hours.length > 0 && minutes.length === 0) {
                    duration = `${hours}h`;
                }
            }

            // handling platform format
            if (platform_value.length === 0) {
                platforms = 'None';
            } else if (platform_value.length === 1) {
                platforms = platform_data[platform_value-1].label;
            } else {
                const platformLabels = platform_value.map(platform => platform_data[platform - 1].label);
                platforms += platformLabels.join('; ');
            }

            platforms = platforms
                .replace("Amazon Prime", "Prime")
                .replace("Disney+", "Disneyplus")
                .replace("HBO Max", "Max");

            // inserting movie into the database
            //console.log(`INSERT INTO Movies (title, type, duration, genre, platform, status) VALUES ('${title}', '${type_data[type_value-1].label}', '${duration}', '${genre_data[genre_value-1].label}', '${platforms}', '${status_data[status_value-1].label}');`);
            //await db.runAsync(`INSERT INTO Movies (title, type, duration, genre, platform, status) VALUES ('${title}', '${type_data[type_value-1].label}', '${duration}', '${genre_data[genre_value-1].label}', '${platforms}', '${status_data[status_value-1].label}');`);

            Alert.alert(`Movie '${title}' successfully added!`, 'Refresh the page to view the changes');
            navigation.goBack();
        }
    }

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
            { /* Fields */}
            <ScrollView>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.titleText}>Movie Title</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Movie title"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <Text style={styles.titleText}>Type</Text>
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
                        
                    <Text style={styles.titleText}>Genre</Text>
                    <Dropdown
                        style={styles.dropdown}
                        selectedTextStyle={styles.dropdownText}
                        placeholderStyle={styles.dropdownText}
                        itemTextStyle={styles.dropdownText}
                        data={genre_data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select an option"
                        value={genre_value}
                        onChange={item => {
                            setGenreValue(item.value);
                        }}
                    />

                    <Text style={styles.titleText}>Platform</Text>
                    <MultiSelect
                        style={styles.dropdown}
                        selectedTextStyle={[styles.dropdownText, {paddingHorizontal: 0, color: colors.textDark}]}
                        selectedStyle={styles.selectedStyle}
                        placeholderStyle={styles.dropdownText}
                        itemTextStyle={styles.dropdownText}
                        data={platform_data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select an option"
                        value={platform_value}
                        onChange={item => {
                            setPlatformValue(item);
                        }}
                    />
                    
                    <Text style={styles.titleText}>Status</Text>
                    <Dropdown
                        style={styles.dropdown}
                        selectedTextStyle={styles.dropdownText}
                        itemTextStyle={styles.dropdownText}
                        data={status_data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={status_value}
                        onChange={item => {
                            setStatusValue(item.value);
                        }}
                    />
                </View>
            </ScrollView>
            { /* Save button */}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.saveButton} onPress={() => saveMovie()}>
                    <Text style={[styles.titleText, {fontFamily: 'Montserrat-SemiBold'}]}>Save</Text>
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
        paddingBottom: 10,
    },
    headerLeft: {
        borderColor: colors.black,
        backgroundColor: colors.textLight,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    fieldsContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        paddingVertical: 10,
        paddingBottom: 20,
        backgroundColor: colors.lightBlue,
        borderRadius: 20,
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
    durationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    durationText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    saveButton: {
        width: 120,
        height: 60,
        backgroundColor: colors.textLight,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 2,
        marginBottom: 20,
    },
});