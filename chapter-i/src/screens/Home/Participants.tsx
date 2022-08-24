import { Center, FlatList, Text, VStack } from "native-base";
import { Participant } from "./Participant";

interface ParticipantProps {
  name: string;
}

interface ParticipantsProps {
  participants: ParticipantProps[];
  onDeleteParticipant: (name: string) => void;
}

function Participants({ participants, onDeleteParticipant }: ParticipantsProps) {
  return (
    <VStack flex="1" space="2" marginTop="8">
      <FlatList
        data={participants}
        keyExtractor={(e) => e.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant name={item.name} onDeleteParticipant={onDeleteParticipant} />
        )}
        ListEmptyComponent={() => (
          <Center>
            <Text color="#fafafa">Nobody added yet</Text>
          </Center>
        )}
      />
    </VStack>
  );
}

export { Participants };
