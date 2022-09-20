import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background: ${(props) => props.theme.colors.gray_500};
  width: 100%;
  height: 90px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.sizes.xl}px;
  margin-bottom: ${(props) => props.theme.sizes.sm}px;
  border: 1px solid ${(props) => props.theme.colors.gray_400};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.sizes.md}px;
  color: ${(props) => props.theme.colors.gray_200};
  font-family: ${(props) => props.theme.font_family.bold};
`;

export const Icon = styled(UsersThree).attrs((props) => ({
  size: 32,
  color: props.theme.colors.green_700,
  weight: "fill",
}))`
  margin-right: ${(props) => props.theme.sizes.lg}px;
`;
