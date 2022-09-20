import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Player as PlayerDto } from "@dtos/Player";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteGroup } from "@storage/groups";
import {
  addPlayerToTeam,
  getAllPlayersByGroupAndTeam,
  removePlayerByGroupAndName,
} from "@storage/players";
import { AppError } from "@utils/AppError";
import { Center, FlatList, VStack } from "native-base";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Keyboard } from "react-native";
import { Player } from "./components/Player";
import { TeamFilter } from "./components/TeamFilter";

interface RouteParams {
  group: string;
}

function Players() {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const { group } = params as RouteParams;
  const [players, setPlayers] = useState<PlayerDto[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("Team A");
  const [playerName, setPlayerName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getPlayers() {
      try {
        const allPlayers = await getAllPlayersByGroupAndTeam(group, selectedTeam);
        setPlayers(allPlayers);
      } catch (e) {
        const error = e as AppError;
        return Alert.alert("New Player", error.message);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    getPlayers();
  }, [group, selectedTeam]);

  async function handleAddPlayerToTeam() {
    if (!playerName.trim()) {
      return;
    }

    try {
      await addPlayerToTeam({ name: playerName, team: selectedTeam }, group);
      const allPlayers = await getAllPlayersByGroupAndTeam(group, selectedTeam);
      setPlayers(allPlayers);
      setPlayerName("");
      Keyboard.dismiss();
    } catch (e) {
      const error = e as AppError;
      return Alert.alert("New Player", error.message);
    }
  }

  async function handleDeletePlayer(name: string) {
    Alert.alert("Delete player", "Proceed to delete the player?", [
      {
        text: "Yes",
        onPress: async () => {
          try {
            await removePlayerByGroupAndName(group, name);
            const allPlayers = await getAllPlayersByGroupAndTeam(group, selectedTeam);
            setPlayers(allPlayers);
          } catch (e) {
            const error = e as AppError;
            return Alert.alert("New Player", error.message);
          }
        },
      },
      {
        text: "No",
      },
    ]);
  }

  async function handleDeleteGroup() {
    Alert.alert("Delete group", "Proceed to delete the group?", [
      {
        text: "Yes",
        onPress: async () => {
          try {
            await deleteGroup(group);
            navigate("groups");
          } catch (e) {
            const error = e as AppError;
            return Alert.alert("New Player", error.message);
          }
        },
      },
      {
        text: "No",
      },
    ]);
  }

  return (
    <>
      <Header showBackButton />
      <VStack flex="1" space="4" padding="2">
        <Highlight title={group} subtitle="Add people and separate teams" />
        <Input
          placeholder="Player name"
          value={playerName}
          rightIcon="plus"
          returnKeyType="done"
          onChangeText={setPlayerName}
          onPress={handleAddPlayerToTeam}
          onSubmitEditing={handleAddPlayerToTeam}
        />
        <TeamFilter
          options={["Team A", "Team B", "Team C", "Team D", "Team E"]}
          selected={selectedTeam}
          setSelected={setSelectedTeam}
          numberOfPlayers={players.length}
        />
        {loading ? (
          <Center flex="1">
            <ActivityIndicator size="large" />
          </Center>
        ) : (
          <FlatList
            data={players}
            keyExtractor={(e) => e.name}
            renderItem={({ item }) => (
              <Player name={item.name} onDeletePress={handleDeletePlayer} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyList message="There are no players in this team." />}
          />
        )}

        <Button
          icon="trash"
          text="Delete group"
          marginTop="auto"
          variant="red"
          onPress={handleDeleteGroup}
        />
      </VStack>
    </>
  );
}

export { Players };
