
import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DrawerContent from '~/components/DrawerContent';
import { navigationRef } from '~/services/navigation';
import { PreferencesContext } from '~/contexts/preferences.context';
import { LightTheme, DarkTheme } from '~/theme';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Screen: any = ({ title }: { title: string }) => {
  const theme = useTheme()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background }}>
      <Text testID='screen-title'>{title}</Text>
    </View>
  )
};
const MainScreen = () => <Screen title="Main" />

const HomeScreen = () => <Screen title="Home" />
const SearchScreen = () => <Screen title="Search" />
const ListScreen = () => <Screen title="List" />
const AccountScreen = () => <Screen title="Account" />

const Routes: any = () => {
  const { isThemeDark } = useContext(PreferencesContext);
  let theme = isThemeDark ? LightTheme : DarkTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTransparent: false,
          //headerBackTitleVisible: false,
          title: 'Mobile',
          //animationEnabled: true
        }}
      drawerContent={(props) => <DrawerContent {...props} />}
      >
        {/* <Drawer.Screen name="Root" children={RootStack} /> */}
        <Drawer.Screen
          name="TabsStack"
          component={TabsStack}
          options={{
            headerShown: true,
          }}
        />
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


const TabsStack = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      //barStyle={{ backgroundColor: theme.colors.primary }}
      initialRouteName="home"    
      inactiveColor={"#777"}
      activeColor={theme.colors.primary}
      labeled={true}
      shifting={true}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="search"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={24} />
          ),
        }}
        component={SearchScreen}
      />

      <Tab.Screen
        name="orders"
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <Icon name="receipt" color={color} size={24} />
          ),
        }}
        component={ListScreen}
      />

      <Tab.Screen
        name="account"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={24} />
          ),
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default Routes;