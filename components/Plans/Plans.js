import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { useSQLiteContext } from 'expo-sqlite/next';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/colors/colors.js';

export default Plans = ({ navigation }) => {
    const [planSearch, setPlanSearch] = useState();
    const [plansData, setPlansData] = useState([]);
    const db = useSQLiteContext();

    useEffect(() => {
        getPlans();
    }, []);

    async function getPlans() {
        const result = await db.getAllAsync(`SELECT * FROM Plans ORDER BY plan ASC;`);
        setPlansData(result);
    }

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
        const newStatus = currentStatus === 'Yes' ? 'No' : 'Yes';

        await db.runAsync(`UPDATE Plans SET done = ? WHERE id = ?;`, [newStatus, id]);

        setPlansData((prevPlans) =>
            prevPlans.map((plan) =>
                plan.id === id ? { ...plan, done: newStatus } : plan
            )
        );
    };

    const renderPlan = ({ item }) => {
        const currentIcon = item.done === 'Yes' ? 'check' : 'x';

        return (
            <View style={styles.planWrapper}>
                <View>
                    <TouchableOpacity style={styles.planCard} onPress={() => navigation.navigate('PlanDetails', { plan: item })}>
                        <Text style={styles.planTitle}>{item.plan}</Text>
                        <Text style={styles.planPrice}>{item.price}</Text>
                        <View style={styles.locationWrapper}>
                            <Feather name="map-pin" size={22} color={colors.textDark}/>
                            <Text style={styles.planLocation}>{item.location}</Text>
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
                    <TouchableOpacity style={styles.button} onPress={() => toggleIcon(item.id, item.done)}>
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
                placeholder='Search for a plan'
                value={planSearch}
                onChangeText={text => setPlanSearch(text)}
            />
            { /* Filter button */}
            <TouchableOpacity style={styles.filterWrapper} onPress={() => {}}>
                <Feather name="filter" size={25} color={colors.textDark}/>
                <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
            { /* Plans List */ }
            <FlatList
                data={plansData}
                renderItem={renderPlan}
                keyExtractor={(item) => item.id.toString()}
            />
            { /* Add Plan Button */ }
            <View style={styles.footer}>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewPlan')}>
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
    planWrapper: {
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
    planCard: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: colors.lightBlue,
        borderBottomColor: colors.textDark,
        borderBottomWidth: 2,
    },
    planTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        marginBottom: 15,
    },
    planPrice: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginBottom: 10,
    },
    planLocation: {
        fontFamily: 'Montserrat-Medium',
        color: colors.textDark,
        marginLeft: 10,
    },
    locationWrapper: {
        flexDirection: 'row',
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