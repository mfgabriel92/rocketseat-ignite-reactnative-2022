import logo from "@assets/logo.png";
import { HStack, Icon } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import { TouchableHighlight } from "react-native";
import * as S from "./styles";

interface Props {
  showBackButton?: boolean;
}

function Header({ showBackButton = false }: Props) {
  return (
    <HStack width="full">
      {showBackButton && (
        <TouchableHighlight>
          <Icon as={CaretLeft} />
        </TouchableHighlight>
      )}
    </HStack>
    // <S.Container>
    //   {showBackButton ?? (
    //     <S.BackButton>
    //       <S.BackIcon />
    //     </S.BackButton>
    //   )}
    //   <S.Logo source={logo} />
    // </S.Container>
  );
}

export { Header };
