import { Button, HStack, Text } from "native-base";

interface ParticipantProps {
  name: string;
  onDeleteParticipant: (name: string) => void;
}

function Participant({ name, onDeleteParticipant }: ParticipantProps) {
  return (
    <HStack
      height="12"
      alignItems="center"
      marginY="1"
      backgroundColor="#1b1919"
      borderRadius="3"
      paddingLeft="2"
    >
      <Text flex="1" color="#fff">
        {name}
      </Text>
      <Button width="12" colorScheme="danger" onPress={() => onDeleteParticipant(name)}>
        <Text color="#fff" fontSize="2xl" lineHeight="sm">
          -
        </Text>
      </Button>
    </HStack>
  );
}

export { Participant };
