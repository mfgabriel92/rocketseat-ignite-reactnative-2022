import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_COLLECTION } from "@storage/storage.config";
import { AppError } from "@utils/AppError";
import { removePlayersByGroup } from "./players";

async function getAllGroups() {
  try {
    const storage = await AsyncStorage.getItem(GROUPS_COLLECTION);
    const teams: string[] = storage ? JSON.parse(storage) : [];
    return teams;
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

async function createGroup(name: string) {
  const currentTeams = await getAllGroups();
  const teamAlreadyExists = currentTeams.includes(name);

  if (teamAlreadyExists) {
    throw new Error(`The group with name "${name}" already exists`);
  }

  const teams = JSON.stringify([...currentTeams, name]);

  try {
    await AsyncStorage.setItem(GROUPS_COLLECTION, teams);
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

async function deleteGroup(name: string) {
  try {
    const storage = await AsyncStorage.getItem(GROUPS_COLLECTION);
    let parsedStorage = JSON.parse(storage || "");
    parsedStorage = parsedStorage.filter((g: string) => g !== name);

    await removePlayersByGroup(name);
    await AsyncStorage.setItem(GROUPS_COLLECTION, JSON.stringify(parsedStorage));
  } catch (e) {
    const error = e as Error;
    throw new AppError(error.message);
  }
}

export { createGroup, getAllGroups, deleteGroup };
