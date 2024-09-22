import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import initialPlansData from '../../assets/data/plansData.js';
import colors from '../../assets/colors/colors.js';

export default Plans = ({ navigation }) => {
    const [plansData, setPlansData] = useState(initialPlansData);
    const [plan, setPlan] = useState();

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

    const [iconStates, setIconStates] = useState({});

    useEffect(() => {
        const initialIconStates = {};
        plansData.forEach((item) => {
            initialIconStates[item.id] = item.done === 'Yes' ? 'check' : 'x';
        });
        setIconStates(initialIconStates);
    }, []);

    const toggleIcon = (planId) => {
        setIconStates((prevState) => {
            const newIconState = prevState[planId] === 'check' ? 'x' : 'check';

            // Step 2: Update the plansData to change the "done" field
            setPlansData((prevPlans) =>
                prevPlans.map((plan) =>
                    plan.id === planId ? { ...plan, done: newIconState === 'check' ? 'yes' : 'no' } : plan
                )
            );

            return {
                ...prevState,
                [planId]: newIconState,
            };
        });
    };

    const renderPlan = ({ item }) => {
        const currentIcon = iconStates[item.id] || 'x';

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
                <View style={styles.planOptionsWrapper}>
                    <TouchableOpacity style={styles.button} onPress={deleteAlert}>
                        <Feather name="trash-2" size={25} color={colors.red}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Feather name="edit-2" size={25} color={colors.textDark}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => toggleIcon(item.id)}>
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
                value={plan}
                onChangeText={text => setPlan(text)}
            />
            { /* Plan List */ }
            <FlatList
                data={plansData}
                renderItem={renderPlan}
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
    planWrapper: {
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    planOptionsWrapper: {
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
});