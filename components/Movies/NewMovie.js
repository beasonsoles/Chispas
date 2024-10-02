import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';

import colors from '../../assets/colors/colors.js';

export default NewMovie = ({ navigation }) => {
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
        { label: 'Comedy; Drama', value: '8'},
        { label: 'Documentary', value: '9'},
        { label: 'Horror', value: '10'},
        { label: 'Biography', value: '11'},
        { label: 'Musical', value: '12'},
        { label: 'Adventure', value: '13'},
    ];

    const platform_data = [
        { label: 'Netflix', value: '1', icon: require('../../assets/images/netflix.png') },
        { label: 'Amazon Prime', value: '2', icon: require('../../assets/images/prime.png') },
        { label: 'Disney+', value: '3', icon: require('../../assets/images/disneyplus.jpeg') },
        { label: 'HBO Max', value: '5', icon: require('../../assets/images/hbo.jpg') },
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
    const [platform_value, setPlatformValue] = useState(null);
    const [status_value, setStatusValue] = useState(status_data[0].value);

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
                <Dropdown
                    style={styles.dropdown}
                    selectedTextStyle={styles.dropdownText}
                    placeholderStyle={styles.dropdownText}
                    itemTextStyle={styles.dropdownText}
                    data={platform_data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select an option"
                    value={platform_value}
                    onChange={item => {
                        setPlatformValue(item.value);
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
            { /* Save button */}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
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
        height: 70,
        backgroundColor: colors.textLight,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 2,
    },
});