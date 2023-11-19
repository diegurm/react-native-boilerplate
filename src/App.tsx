import 'react-native-gesture-handler';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { useColorScheme } from 'react-native';

import Statusbar from '~/components/Statusbar';
import { PreferencesContext } from '~/contexts/preferences.context';
import { LightTheme, DarkTheme } from '~/theme';
import Routes from '~/Routes';

function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(colorScheme === 'dark');
  let theme = isThemeDark ? LightTheme : DarkTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <Statusbar />
          <Routes />
        </PaperProvider>
      </PreferencesContext.Provider>
    </>
  );
}

export default App;
