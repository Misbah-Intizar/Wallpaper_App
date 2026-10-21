
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import WallpapersScreen from '../screens/WallpapersScreen';
import DetailScreen from '../screens/DetailScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main Bottom Tabs */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }} // no header for tabs
        />

        {/* Wallpapers Screen */}
        <Stack.Screen
          name="Wallpapers"
          component={WallpapersScreen}
          options={{
            title: 'Wallpaper List',       
                       // header title
            headerStyle: { backgroundColor: COLORS.primary }, // black/dark header
            headerTintColor: COLORS.text,                    // white text/back arrow
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        {/* Detail Screen */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Preview',
            headerStyle: { backgroundColor: COLORS.primary }, // black header
            headerTintColor: COLORS.text,                    // white text
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
