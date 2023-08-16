
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '~/services/navigation';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator();

const Screen: any = ({ title }: { title: string }) => (<><Text>{title}</Text></>);

const Routes: any = () => {
  const MainScreen = () => <Screen title="Main Screen" />

  const theme = useTheme()

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTransparent: false,
          headerBackTitleVisible: false,
          title: 'Main',
          animationEnabled: true,
        }}>

        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;