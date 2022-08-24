import { VStack } from "native-base";
import { useState } from "react";
import { Alert } from "react-native";
import { Form } from "./Form";
import { Participants } from "./Participants";

interface ParticipantsProps {
  name: string;
}

function Home() {
  const [participants, setParticipants] = useState<ParticipantsProps[]>([]);

  function handleAddParticipant(name: string) {
    if (!name) {
      return Alert.alert("Error", "Please, enter a participant's name.");
    }

    if (participants.findIndex((p: any) => p.name === name) !== -1) {
      return Alert.alert("Error", "The participant is already in the list.");
    }

    setParticipants((prevState) => [...prevState, { name }]);
  }

  function handleDeleteParticipant(name: string) {
    setParticipants((prevState) => prevState.filter((p) => p.name !== name));
  }

  return (
    <VStack flex="1" backgroundColor="#131111" paddingTop="12" paddingX="4">
      <Form onAddParticipant={handleAddParticipant} />
      <Participants participants={participants} onDeleteParticipant={handleDeleteParticipant} />
    </VStack>
  );
}

export { Home };
