
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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
            <Text>Plan</Text>
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