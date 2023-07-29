import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import type { PropsWithChildren } from 'react';

type StatusbarProps = PropsWithChildren<{
  isDarkMode: boolean;
}>;

const Statusbar: React.FC<StatusbarProps> = ({ isDarkMode }) => {

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return <StatusBar
    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    backgroundColor={backgroundStyle.backgroundColor}
  />;
}

export default Statusbar;