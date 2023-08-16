import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from 'react-native';

import Statusbar from '~/components/Statusbar';
import Routes from '~/Routes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <PaperProvider theme={{
        ...(isDarkMode ? MD3DarkTheme : DefaultTheme),
        colors: { ...DefaultTheme.colors, primary: '#303f9f' },
      }}>
        <Statusbar />
        <Routes />
      </PaperProvider>
    </>
  );
}

export default App;
