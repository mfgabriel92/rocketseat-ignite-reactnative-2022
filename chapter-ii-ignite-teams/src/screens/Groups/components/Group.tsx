import { useNavigation } from "@react-navigation/native";
import { HStack, Text, useTheme } from "native-base";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface CardProps extends TouchableOpacityProps {
  title: string;
}

function Group({ title, ...rest }: CardProps) {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity {...rest} onPress={() => navigate("players", { group: title })}>
      <HStack
        backgroundColor="gray.500"
        marginTop="4"
        borderRadius="4"
        borderWidth="1px"
        borderColor="gray.400"
        paddingX="4"
        paddingY="6"
        space="4"
      >
        <UsersThree weight="fill" color={colors.green[500]} />
        <Text color="white" fontWeight="bold">
          {title}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
}

export { Group };
