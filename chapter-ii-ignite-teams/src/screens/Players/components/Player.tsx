import { FontAwesome5 } from "@expo/vector-icons";
import { HStack, Icon, IconButton, Text, useTheme } from "native-base";
import { User } from "phosphor-react-native";

interface PlayerProps {
  name: string;
  onDeletePress: (name: string) => void;
}

function Player({ name, onDeletePress }: PlayerProps) {
  const { colors } = useTheme();

  return (
    <HStack
      backgroundColor="gray.500"
      marginTop="4"
      borderRadius="4"
      borderWidth="1px"
      borderColor="gray.400"
      paddingX="4"
      paddingY="2"
      space="3"
      alignItems="center"
    >
      <User color={colors.gray[300]} weight="fill" size={18} />
      <Text flex="1" color="white" fontWeight="bold" fontSize="md">
        {name}
      </Text>
      <IconButton
        icon={<Icon as={FontAwesome5} name="trash" color="red.500" />}
        onPress={() => onDeletePress(name)}
      />
    </HStack>
  );
}

export { Player };
