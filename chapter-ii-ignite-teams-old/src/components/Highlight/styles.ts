import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.sizes.xl}px;
  font-family: ${(props) => props.theme.font_family.bold};
  color: ${(props) => props.theme.colors.white};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.sizes.md}px;
  font-family: ${(props) => props.theme.font_family.regular};
  color: ${(props) => props.theme.colors.gray_300};
`;
