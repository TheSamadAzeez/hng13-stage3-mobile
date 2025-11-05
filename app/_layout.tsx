import { DrawerLabel } from '@/components/custom/drawer-label';
import Header from '@/components/custom/header';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_300Light,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: 'right',
          headerTitleStyle: {
            fontFamily: 'Poppins_600SemiBold',
          },
          drawerStyle: {
            backgroundColor: 'white',
            width: 280,
            paddingHorizontal: 0,
          },
        }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel() {
              return <DrawerLabel label="Home" icon={<Ionicons name="home-outline" size={24} />} />;
            },

            title: 'Home',
            header() {
              return <Header />;
            },
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            drawerLabel() {
              return (
                <DrawerLabel label="Browse" icon={<Ionicons name="grid-outline" size={24} />} />
              );
            },
            title: 'Categories',
            header() {
              return <Header />;
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
