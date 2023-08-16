import {
  StatusBar,
  Platform,
  View,
  StyleSheet,
  useColorScheme
} from 'react-native';
import type { PropsWithChildren } from 'react';
import { useTheme } from 'react-native-paper';

type StatusbarProps = PropsWithChildren<any>;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

const Statusbar: React.FC<StatusbarProps> = ({ ...props }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();
  
  const backgroundColor = theme.colors.primary;

  return (
    <>
      {Platform.OS === 'ios' ? (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}            
            backgroundColor={backgroundColor}
            translucent 
            {...props} />
        </View>
      ) : (
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundColor}
          {...props} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default Statusbar;