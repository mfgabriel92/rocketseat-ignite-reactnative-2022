import { Player } from "@dtos/Player";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYERS_COLLECTION } from "./storage.config";

async function getAllPlayersByGroup(groupName: string) {
  const storage = await AsyncStorage.getItem(`${PLAYERS_COLLECTION}:${groupName}`);
  const players: Player[] = storage ? JSON.parse(storage) : [];
  return players;
}

async function getAllPlayersByGroupAndTeam(groupName: string, teamName: string) {
  try {
    const storage = await getAllPlayersByGroup(groupName);
    const players: Player[] | [] = storage.filter((p: Player) => p.team === teamName);
    return players;
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

async function addPlayerToTeam(player: Player, groupName: string) {
  try {
    const players = await getAllPlayersByGroup(groupName);
    const existingPlayer = players.filter((p: Player) => p.name === player.name)[0];

    if (existingPlayer) {
      throw new Error(
        `The player name "${existingPlayer.name}" is already in the team "${existingPlayer.team}"`,
      );
    }

    const updatedPlayers = [...players, player];
    await AsyncStorage.setItem(
      `${PLAYERS_COLLECTION}:${groupName}`,
      JSON.stringify(updatedPlayers),
    );
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

async function removePlayerByGroupAndName(groupName: string, playerName: string) {
  try {
    const storage = await getAllPlayersByGroup(groupName);
    const updatedPlayers = storage.filter((p) => p.name !== playerName);
    await AsyncStorage.setItem(
      `${PLAYERS_COLLECTION}:${groupName}`,
      JSON.stringify(updatedPlayers),
    );
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

async function removePlayersByGroup(groupName: string) {
  try {
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}:${groupName}`);
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

export {
  getAllPlayersByGroupAndTeam,
  addPlayerToTeam,
  removePlayerByGroupAndName,
  removePlayersByGroup,
};
