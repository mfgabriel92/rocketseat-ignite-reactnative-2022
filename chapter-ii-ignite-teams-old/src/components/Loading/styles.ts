import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.gray_700};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.colors.green_500,
  size: "large",
}))``;
