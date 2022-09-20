import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.gray_700};
  width: 100%;
  padding: ${(props) => props.theme.sizes.xl}px 12px ${(props) => props.theme.sizes.lg}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs((props) => ({
  size: 24,
  color: props.theme.colors.white,
}))``;
