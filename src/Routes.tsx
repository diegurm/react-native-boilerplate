
import React, {useContext} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme, Text } from 'react-native-paper';

import { navigationRef } from '~/services/navigation';
import DrawerContent from '~/components/DrawerContent';
import { PreferencesContext } from './contexts/preferences.context';
import { LightTheme, DarkTheme } from './theme';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screen: any = ({ title }: { title: string }) => {
  const theme = useTheme()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background }}>
      <Text>{title}</Text>
    </View>
  )
};
const MainScreen = () => <Screen title="Main Screen" />

const Routes: any = () => {
  const { isThemeDark } = useContext(PreferencesContext);
  let theme = isThemeDark ? LightTheme : DarkTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerTransparent: false,
          headerStyle: { backgroundColor: theme.colors.primary }
        }}
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Root" children={RootStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const RootStack = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerTransparent: false,
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: theme.colors.primary },
        title: 'Main',
        animationEnabled: true,
      }}>

      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}


export default Routes;