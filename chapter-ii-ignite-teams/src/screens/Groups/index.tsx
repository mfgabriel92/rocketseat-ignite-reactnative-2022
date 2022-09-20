import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getAllGroups } from "@storage/groups";
import { FlatList, VStack } from "native-base";
import { useCallback, useState } from "react";
import { Group } from "./components/Group";

function Groups() {
  const { navigate } = useNavigation();
  const [groups, getGroups] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function fetchGroups() {
        const storedGroups = await getAllGroups();
        getGroups(storedGroups);
      }

      fetchGroups();
    }, []),
  );

  return (
    <>
      <Header />
      <VStack flex="1" space="4" padding="2">
        <Highlight title="Groups" subtitle="Play with your group" />
        <FlatList
          data={groups}
          keyExtractor={(e) => e}
          renderItem={({ item }) => <Group title={item} />}
          ListEmptyComponent={() => <EmptyList message="You have no group yet." />}
        />
        <Button
          icon="plus"
          text="Create group"
          marginTop="auto"
          onPress={() => navigate("newGroup")}
        />
      </VStack>
    </>
  );
}

export { Groups };
