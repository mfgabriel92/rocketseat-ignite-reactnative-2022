import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

function Card({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export { Card };
