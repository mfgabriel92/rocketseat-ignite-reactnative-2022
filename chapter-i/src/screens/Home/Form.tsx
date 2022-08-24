import { Button, HStack, Input, Text } from "native-base";
import { useState } from "react";

interface FormProps {
  onAddParticipant: (name: string) => void;
}

function Form({ onAddParticipant }: FormProps) {
  const [name, setName] = useState<string>("");

  function handleAddParticipant() {
    onAddParticipant(name);
    setName("");
  }

  return (
    <HStack space="2" height="12">
      <Input
        flex="1"
        borderWidth="0"
        backgroundColor="#353535"
        color="#fff"
        placeholder="Add participant"
        value={name}
        onChangeText={setName}
      />
      <Button width="12" colorScheme="green" onPress={handleAddParticipant}>
        <Text color="#fff" fontSize="2xl" lineHeight="sm">
          +
        </Text>
      </Button>
    </HStack>
  );
}

export { Form };
