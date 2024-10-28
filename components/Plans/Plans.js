import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert, FlatList, Modal, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { useSQLiteContext } from 'expo-sqlite/next';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';

import colors from '../../assets/colors/colors.js';

export default Plans = ({ navigation }) => {
    let [planSearch, setPlanSearch] = useState();
    let [matchedPlans, setMatchedPlans] = useState([]);
    let [plansData, setPlansData] = useState([]);
    let [modalVisible, setModalVisible] = useState(false);
    const db = useSQLiteContext();

    useEffect(() => {
        getPlans();
    }, []);

    async function getPlans() {
        const result = await db.getAllAsync(`SELECT * FROM Plans ORDER BY plan ASC;`);
        setPlansData(result);
    }

    const in_out_data = [
        { label: 'Indoor', value: '1'},
        { label: 'Outdoor', value: '2'},
        { label: 'Any', value: '3'},
    ];

    const eating_data = [
        { label: 'Yes', value: '1'},
        { label: 'No', value: '2'},
        { label: 'Any', value: '3'},
    ];

    const [price, setPrice] = useState(10);
    const [location, setLocation] = useState('');
    const [in_out_value, setInOutValue] = useState(in_out_data[2].value);
    const [eating_value, setEatingValue] = useState(eating_data[2].value);

    const deleteAlert = (id) => {
        Alert.alert(
            'Delete Plan',
            'Are you sure you want to delete this plan?',
            [
              {
                text: 'NO',
                onPress: () => console.log(`Cancel ${id}`),
                style: 'cancel',
              },
              {
                text: 'YES',
                onPress: () => {
                    db.runAsync(`DELETE FROM Plans WHERE id = ${id};`);
                    Alert.alert('Plan deleted successfully!', 'Refresh the page to view the changes');
                },
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

    const searchPlanName = () => {
        if (planSearch.length > 0) {
            const plansList = plansData.filter(plan => plan.plan.toLowerCase().includes(planSearch.toLowerCase()));
            if (plansList.length > 0) {
                setMatchedPlans(plansList);
            } else {
                Alert.alert('Plan not found');
            }
        }
    };

    const filter = () => {
        console.log(price.toFixed(2));
    };

    const renderPlan = ({ item }) => {
        const currentIcon = item.done === 'Yes' ? 'check' : 'x';

        return (
            <View style={styles.planWrapper}>
                <View>
                    <View style={styles.planCard}>
                        <Text style={styles.planTitle}>{item.plan}</Text>
                        {item.price === 0 ? (
                            <Text style={styles.planPrice}>Free</Text>
                            ) : (<Text style={styles.planPrice}>{item.price}€</Text>)
                        }
                        <View style={styles.planInfo}>
                            <View style={styles.locationWrapper}>
                                <Feather name="map-pin" size={22} color={colors.textDark}/>
                                <Text style={styles.planLocation}>{item.location}</Text>
                            </View>
                            <View style={styles.extraInfo}>
                                { item.indoor_outdoor === 'Indoor' ? (
                                    <MaterialCommunityIcons name="home" size={28} color={colors.textDark}/>
                                ) : (
                                    <MaterialCommunityIcons name="forest" size={28} color={colors.textDark}/>
                                )}
                                { item.eating === 'Yes' ? (
                                    <MaterialCommunityIcons name="food" size={26} color={colors.textDark}/>
                                ) : (
                                    <MaterialCommunityIcons name="food-off" size={26} color={colors.textDark}/>
                                )}
                            </View>
                        </View>
                        
                    </View>
                </View>
                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => deleteAlert(item.id)}>
                        <Feather name="trash-2" size={25} color={colors.red}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditPlan', item)}>
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
                onSubmitEditing={searchPlanName}
                onClear={() => setMatchedPlans([])}
            />
            { /* Filter button */}
            <TouchableOpacity style={styles.filterWrapper} onPress={() => setModalVisible(true)}>
                <Feather name="filter" size={25} color={colors.textDark}/>
                <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
            <View style={styles.filterResults}>
                { matchedPlans.length === 0 ? (
                    <Text style={styles.filterText}>{plansData.length} results</Text>
                ) : (
                    <Text style={styles.filterText}>{matchedPlans.length} {matchedPlans.length === 1 ? 'result' : 'results'} </Text>
                )}
            </View>
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
                    <View style={[styles.headerWrapper, {paddingHorizontal: 0, paddingTop: 0}]}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <View style={styles.headerLeft}>
                                <Feather name="x" size={20} color={colors.textDark}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Filter</Text>
                    </View>
                    { /* Pop up fields */ }
                    <Text style={[styles.titleText, {marginTop: 20}]}>Maximum Price</Text>
                    <View style={styles.priceWrapper}>
                        <Slider
                            style={{width: '100%', height: 40}}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor={colors.blue}
                            maximumTrackTintColor={colors.textDark}
                            thumbTintColor={colors.blue}
                            value={price}
                            onValueChange={item => {
                                setPrice(item)
                            }}
                        />
                        <Text style={styles.currencySymbol}>{price} € </Text>
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
                        style={[styles.dropdown, { marginBottom: 0 }]}
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

                    { /* Filter button */}
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.filterButton} onPress={() => filter()}>
                            <Text style={[styles.titleText, {fontFamily: 'Montserrat-SemiBold'}]}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </Modal>
            </View> 
            { /* Plans List */ }
            {matchedPlans.length === 0 ? (
                <FlatList
                    data={plansData}
                    renderItem={renderPlan}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <FlatList
                    data={matchedPlans}
                    renderItem={renderPlan}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
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
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
    },
    filterResults: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
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
    planInfo: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    locationWrapper: {
        flexDirection: 'row',
    },
    extraInfo: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    priceWrapper: {
        alignItems: 'center',
    },
    currencySymbol: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
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
    buttonWrapper: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 10,
    },
    filterButton: {
        width: 120,
        height: 60,
        backgroundColor: colors.textLight,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 2,
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