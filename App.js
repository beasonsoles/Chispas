import { useState, useEffect, Suspense, useContext } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite/legacy';
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

export default function App() {
  const [dbLoaded, setDbLoaded] = useState(false);

  const db = SQLite.openDatabase("new-chispas.db");

  console.log(db);

  /*useEffect(() => {
    // Check if the database is already loaded to prevent opening it multiple times
    if (!db) {
      const dbInstance = SQLite.openDatabase("new-chispas.db");
      console.log('Database loaded', dbInstance);
      setDb(dbInstance);
    }
  }, [db]);*/

  useEffect(()=> {
    db.transaction((tx) => {
      tx.executeSql("CREATE TABLE IF NOT EXISTS plans (id INTEGER PRIMARY KEY AUTOINCREMENT, plan TEXT NOT NULL, location TEXT NOT NULL, indoor_outdoor TEXT NOT NULL, price FLOAT NOT NULL, eating TEXT NOT NULL, done TEXT NOT NULL)")
    });

    db.transaction((tx) => {
      tx.executeSql("CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, type TEXT NOT NULL, duration TEXT NOT NULL, genre TEXT NOT NULL, platform TEXT NOT NULL, status TEXT NOT NULL)")
    });

    setDbLoaded(true);
  },[])

  /*useEffect(() => {
    if (db) {
      // Check if the Plans table exists in the database
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table';",
          [],
          (_, result) => {
            if (result.rows.length > 0) {
              console.log('Plans table exists', result.rows);
              setPlansTableExists(true); // Set state if table exists
            } else {
              console.log('Plans table does not exist');
              setPlansTableExists(false); // Set state if table does not exist
            }
          },
          (_, error) => {
            console.error('Error checking table existence:', error);
          }
        );
      });
    }
  }, [db]);*/

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
        <SQLiteProvider databaseName='new-chispas.db' useSuspense>
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
