import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const { LightTheme: AdpLightTheme, DarkTheme: AdpDarkTheme } =
  adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

const CustomTheme = {
  colors: { primary: '#303f9f' },
}

const LightTheme = merge(merge(MD3LightTheme, AdpLightTheme), CustomTheme);
const DarkTheme = merge(merge(MD3DarkTheme, AdpDarkTheme), CustomTheme);

export { LightTheme, DarkTheme };
