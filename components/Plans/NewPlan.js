import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { useSQLiteContext } from 'expo-sqlite/next';

import colors from '../../assets/colors/colors.js';

export default NewPlan = ({ navigation }) => {
    const db = useSQLiteContext();

    const in_out_data = [
        { label: 'Indoor', value: '1'},
        { label: 'Outdoor', value: '2'},
    ];

    const eating_data = [
        { label: 'Yes', value: '1'},
        { label: 'No', value: '2'},
    ];

    const status_data = [
        { label: 'Yes', value: '1'},
        { label: 'No', value: '2'},
    ];

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [in_out_value, setInOutValue] = useState(in_out_data[0].value);
    const [eating_value, setEatingValue] = useState(eating_data[1].value);
    const [status_value, setStatusValue] = useState(status_data[1].value);

    const checkForm = () => {
        if (name.trim().length === 0) {
            Alert.alert("The 'name' field cannot be empty");
            return false;
        }
        if (price.trim().length === 0) {
            Alert.alert("The 'price' field cannot be empty");
            return false;
        }
        if (location.trim().length === 0) {
            Alert.alert("The 'location' field cannot be empty");
            return false;
        }
        return true;
    }

    const savePlan = async () => {
        const save = checkForm();
        if (save) {
            // handling price format
            let precio = '';
            let lugar = '';
            if (price === '0') {
                precio = 'Free';
            } else {
                let float_price = parseFloat(price.replace(',', '.'));
                precio = float_price % 1 === 0 ? float_price.toFixed(0).toString() + '€' : float_price.toFixed(2).toString() + '€';
            }
            lugar = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()

            // inserting movie into the database
            //console.log(`INSERT INTO Plans (plan, location, indoor_outdoor, price, eating, done) VALUES ('${name}', '${lugar.trim()}', '${in_out_data[in_out_value-1].label}', '${precio}', '${eating_data[eating_value-1].label}', '${status_data[status_value-1].label}');`);
            await db.runAsync(`INSERT INTO Plans (plan, location, indoor_outdoor, price, eating, done) VALUES ('${name}', '${lugar.trim()}', '${in_out_data[in_out_value-1].label}', '${precio}', '${eating_data[eating_value-1].label}', '${status_data[status_value-1].label}');`);

            Alert.alert(`Plan '${name}' successfully added!`, 'Refresh the page to view the changes');
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
            <View style={styles.fieldsContainer}>
                <Text style={styles.titleText}>Plan Name</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Plan name"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.titleText}>Price</Text>
                <View style={styles.priceWrapper}>
                    <TextInput 
                        style={[styles.input, {marginBottom: 0, width: '90%'}]} 
                        placeholder="Price"
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />
                    <Text style={styles.currencySymbol}>€</Text>
                </View>

                <Text style={styles.titleText}>Location</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                />

                <Text style={styles.titleText}>Indoor/Outdoor</Text>
                <Dropdown
                    style={styles.dropdown}
                    selectedTextStyle={styles.dropdownText}
                    itemTextStyle={styles.dropdownText}
                    data={in_out_data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={in_out_value}
                    onChange={item => {
                        setInOutValue(item.value);
                    }}
                />

                <Text style={styles.titleText}>Involves Eating</Text>
                <Dropdown
                    style={styles.dropdown}
                    selectedTextStyle={styles.dropdownText}
                    itemTextStyle={styles.dropdownText}
                    data={eating_data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={eating_value}
                    onChange={item => {
                        setEatingValue(item.value);
                    }}
                />
                
                <Text style={styles.titleText}>Completed</Text>
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
                <TouchableOpacity style={styles.saveButton} onPress={() => savePlan()}>
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
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    currencySymbol: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
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