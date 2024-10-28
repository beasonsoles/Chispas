import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

export default SearchPlans = ({ route, navigation }) => {

    const { plan } = route.params;
    navigation.navigate('SearchPlans', planSearch);

    return (
        <View style={styles.container}>
            <Text>Plan Card {plan.plan}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});