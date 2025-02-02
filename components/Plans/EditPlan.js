import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { useSQLiteContext } from 'expo-sqlite';

import colors from '../../assets/colors/colors.js';

export default EditPlan = ({ navigation, route }) => {
    const db = useSQLiteContext();

    // get current values
    let {
        plan: item_plan,
        location: item_location,
        indoor_outdoor: item_indoor_outdoor,
        price: item_price,
        eating: item_eating,
        done: item_done,
        id: item_id
    } = route.params;

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

    const curr_in_out = in_out_data.find(item => item.label === item_indoor_outdoor).value;
    const curr_eating = eating_data.find(item => item.label === item_eating).value;
    const curr_status = status_data.find(item => item.label === item_done).value;

    const [name, setName] = useState(item_plan);
    const [price, setPrice] = useState(item_price);
    const [location, setLocation] = useState(item_location);
    const [in_out_value, setInOutValue] = useState(curr_in_out);
    const [eating_value, setEatingValue] = useState(curr_eating);
    const [status_value, setStatusValue] = useState(curr_status);

    const checkForm = () => {
        if (name.trim().length === 0) {
            Alert.alert("The 'name' field cannot be empty");
            return false;
        }
        if (price.toString().trim().length === 0) {
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
            let lugar = '';
            let precio = parseFloat(price.toString().replace(',', '.'));
            precio = precio % 1 === 0 ? parseFloat(precio.toFixed(0)) : parseFloat(precio.toFixed(2));
            lugar = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()

            // updating movie in the database
            //console.log(`UPDATE plans SET plan = '${name}', location = '${lugar.trim()}', indoor_outdoor = '${in_out_data[in_out_value-1].label}', price = ${precio}, eating = '${eating_data[eating_value-1].label}', done = '${status_data[status_value-1].label}' WHERE id = ${item_id};`);
            await db.runAsync(`UPDATE plans SET plan = '${name}', location = '${lugar.trim()}', indoor_outdoor = '${in_out_data[in_out_value-1].label}', price = ${precio}, eating = '${eating_data[eating_value-1].label}', done = '${status_data[status_value-1].label}' WHERE id = ${item_id};`);
            
            Alert.alert(`Plan '${name}' successfully modified!`);
            navigation.navigate('Plans');
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
                            value={price.toString()}
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
            </ScrollView>
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