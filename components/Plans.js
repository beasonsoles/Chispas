import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import plansData from '../assets/data/plansData';
import colors from '../assets/colors/colors.js';

export default Plans = ({ navigation }) => {
    const [plan, setPlan] = useState();

    const renderPlan = ({ item }) => {
        return (
            <View style={styles.planWrapper}>
                <TouchableOpacity style={styles.planCard} onPress={() => navigation.navigate('PlanDetails', { plan: item })}>
                    <Text style={styles.planTitle}>{item.plan}</Text>
                    <Text style={styles.planPrice}>{item.price}</Text>
                    <View style={styles.locationWrapper}>
                        <Feather name="map-pin" size={22} color={colors.textDark}/>
                        <Text style={styles.planLocation}>{item.location}</Text>
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
    planCard: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        borderColor: colors.lightBlue,
        borderWidth: 2,
        backgroundColor: colors.lightBlue,
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
    }
});