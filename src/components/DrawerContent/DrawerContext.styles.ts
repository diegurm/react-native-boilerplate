import styled from 'styled-components/native';
import * as Paper from 'react-native-paper';

export const UserInfo = styled.View`
  padding-left: 16px;
`;

export const Avatar = styled(Paper.Avatar.Image).attrs({
  size: 54
})``;

export const Title = styled(Paper.Title)`
  margin-top: 20px;
  font-weight: bold;
`;

export const Caption = styled(Paper.Caption)`
  font-size: 14px;
  line-height: 14px;
`;

export const DrawerSection = styled(Paper.Drawer.Section)`
  margin-top: 15px;
`;
