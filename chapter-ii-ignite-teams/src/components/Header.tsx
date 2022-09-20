import logo from "@assets/logo.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Icon, IconButton, Image } from "native-base";

interface HeaderProps {
  showBackButton?: boolean;
}

function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();

  return (
    <HStack
      backgroundColor="gray.600"
      width="full"
      justifyContent="center"
      alignItems="center"
      paddingBottom="4"
      paddingX="2"
    >
      {showBackButton && (
        <Box flex="1" alignItems="flex-start">
          <IconButton
            icon={<Icon as={FontAwesome5} name="chevron-left" color="white" />}
            onPress={() => navigate("groups")}
          />
        </Box>
      )}
      <Image source={logo} width="12" alt="" />
    </HStack>
  );
}

export { Header };
