import React, {useContext} from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TouchableRipple, useTheme, Text, Switch } from 'react-native-paper';
import {View} from 'react-native';

import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PreferencesContext } from '~/contexts/preferences.context'
import * as S from './DrawerContext.styles';

const DrawerContent: React.FC<any> = (props) => {
  const theme = useTheme();

  const { isThemeDark, toggleTheme } = useContext(
    PreferencesContext,
  );

  return (
    <DrawerContentScrollView
      {...props}
      style={[
        {
          flex: 1,
        },
        {
          backgroundColor: theme.colors.surface,
        },
      ]}>
      <>
        <S.UserInfo>
          <S.Avatar
            source={{
              uri:
                'https://instagram.fcrq1-1.fna.fbcdn.net/v/t51.2885-19/353943927_638302448318646_259624119489466808_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcrq1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=KFrVoBZemTAAX8CQxuo&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB2DlSRxP3_TR87uyo9waZynimtAGFbQc0wAHlkfxmiWw&oe=64E0F917&_nc_sid=ee9879',
            }}

          />
          <S.Title>Diego Rodrigues</S.Title>
          <S.Caption>@diegurm</S.Caption>
        </S.UserInfo>
        <S.DrawerSection>
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => { }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => { }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Bookmarks"
            onPress={() => { }}
          />
        </S.DrawerSection>
        <S.DrawerSection title="Preferences">
          <TouchableRipple style={{marginLeft: 26, marginBottom: 16}} onPress={toggleTheme}>
            <View style={{display:'flex', flex: 1, flexDirection: 'row'}}>             
              <View pointerEvents="none">
                <Switch value={!isThemeDark} />
              </View>
              <Text style={{paddingTop: 4, paddingLeft: 8}}>Dark Theme</Text>
            </View>
          </TouchableRipple>
          
        </S.DrawerSection>
      </>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;