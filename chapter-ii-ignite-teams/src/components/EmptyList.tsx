import { Text, useTheme, VStack } from "native-base";
import { SmileySad } from "phosphor-react-native";

interface EmptyListProps {
  message: string;
}

function EmptyList({ message }: EmptyListProps) {
  const { colors } = useTheme();

  return (
    <VStack alignItems="center" space="2" marginTop="12">
      <SmileySad color={colors.gray[300]} weight="fill" size="60" />
      <Text color="gray.300" fontSize="md">
        {message}
      </Text>
    </VStack>
  );
}

export { EmptyList };
