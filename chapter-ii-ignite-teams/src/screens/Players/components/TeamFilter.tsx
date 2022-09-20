import { FlatList, HStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";

interface TeamFilterProps {
  options: string[];
  selected: string;
  numberOfPlayers: number;
  setSelected: (selected: string) => void;
}

function TeamFilter({ options, selected, setSelected, numberOfPlayers, ...rest }: TeamFilterProps) {
  return (
    <HStack alignItems="center" {...rest}>
      <FlatList
        flexGrow="0"
        data={options}
        keyExtractor={(e) => e}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}>
            <Text
              color={selected === item ? "gray.100" : "gray.300"}
              fontSize="md"
              textTransform="uppercase"
              fontWeight="bold"
              borderWidth="2"
              borderColor={selected === item ? "green.500" : "transparent"}
              borderRadius="4"
              paddingX="3"
              paddingY="2"
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text color="white" fontSize="lg" fontWeight="bold" paddingBottom="1" paddingX="4">
        {numberOfPlayers}
      </Text>
    </HStack>
  );
}

export { TeamFilter };
