import { useState, useEffect, Suspense } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { SQLiteProvider } from 'expo-sqlite/next';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

import Home from './components/Home';
import Movies from './components/Movies/Movies';
import Plans from './components/Plans/Plans';
import NewMovie from './components/Movies/NewMovie';
import NewPlan from './components/Plans/NewPlan';
import EditMovie from './components/Movies/EditMovie';
import EditPlan from './components/Plans/EditPlan';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const loadDatabase = async () => {
  const dbName = "chispas.db";
  const dbAsset = require("./assets/data/chispas.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
      await FileSystem.makeDirectoryAsync(
          `${FileSystem.documentDirectory}SQLite`,
          {intermediates: true}
      );
      await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

export default function App() {
  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    loadDatabase()
      .then(() => setDbLoaded(true))
      .catch(e => console.error(e));
  }, []);

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded || !dbLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>Loading Database...</Text>
      </View>
    );
  } else {
    SplashScreen.hideAsync(); // Hide splash screen
  }

  return (
    <NavigationContainer>
      <Suspense fallback={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>Loading Database...</Text>
          </View>}
        >
        <SQLiteProvider databaseName="chispas.db" useSuspense>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Movies" component={Movies} options={{headerShown: false}}/>
            <Stack.Screen name="Plans" component={Plans} options={{headerShown: false}}/>
            <Stack.Screen name="NewMovie" component={NewMovie} options={{headerShown: false}}/>
            <Stack.Screen name="NewPlan" component={NewPlan} options={{headerShown: false}}/>
            <Stack.Screen name="EditMovie" component={EditMovie} options={{headerShown: false}}/>
            <Stack.Screen name="EditPlan" component={EditPlan} options={{headerShown: false}}/>
          </Stack.Navigator>
        </SQLiteProvider>
      </Suspense>
    </NavigationContainer>
  );
}
