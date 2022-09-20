import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { createGroup } from "@storage/groups";
import { AppError } from "@utils/AppError";
import { Center, useTheme, VStack } from "native-base";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { Alert } from "react-native";

function NewGroup() {
  const [name, setName] = useState<string>("");
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  async function handleCreateGroup() {
    if (!name.trim()) {
      return;
    }

    try {
      await createGroup(name);
      navigate("players", { group: name });
    } catch (e) {
      const error = e as AppError;
      return Alert.alert("New group", error.message);
    }
  }

  return (
    <>
      <Header showBackButton />
      <VStack flex="1" justifyContent="center" space="8" padding="2">
        <Center>
          <UsersThree color={colors.green[500]} size="52" />
          <Highlight title="New group" subtitle="Create a new group" />
        </Center>
        <Input placeholder="Group name" onChangeText={setName} value={name} />
        <Button icon="check" text="Create" onPress={handleCreateGroup} />
      </VStack>
    </>
  );
}

export { NewGroup };
