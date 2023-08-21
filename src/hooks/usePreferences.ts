import { useContext } from 'react';
import { PreferencesContext } from '~/contexts/preferences.context';

const usePreferences = () => {
  const values = useContext(PreferencesContext);

  return { ...values };
};

export default usePreferences;
