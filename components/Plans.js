
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import plansData from '../assets/data/plansData';
import colors from '../assets/colors/colors.js';

export default Plans = ({ navigation }) => {
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
            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
                <Text>Plans</Text>
            </ScrollView>
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
        padding: 12,
        borderRadius: 10,
    },
});