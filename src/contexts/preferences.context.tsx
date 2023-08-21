import React, { useState, useCallback, createContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

export const PreferencesContext = createContext({} as any);

const PreferencesProvider = ({ children }: any) => {
  const colorScheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = useState(colorScheme === 'dark');

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


  return (
    <PreferencesContext.Provider
      value={preferences}>
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesProvider;