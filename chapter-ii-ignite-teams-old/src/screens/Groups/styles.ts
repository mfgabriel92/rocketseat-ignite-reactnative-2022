import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.gray_600};
  padding: ${(props) => props.theme.sizes.lg}px;
  flex: 1;
`;
