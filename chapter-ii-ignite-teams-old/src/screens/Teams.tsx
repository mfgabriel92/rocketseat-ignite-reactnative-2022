import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList } from "react-native";

function Teams() {
  const [groups, setGroups] = useState<string[]>(["Foo", "Bar", "Lorem", "Ipsum", "Dolor", "Sit"]);

  return (
    <>
      <Header />
      <S.Container>
        <Highlight title="Teams" subtitle="Play with your team" />
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Card title={item} />}
        />
      </S.Container>
    </>
  );
}

export { Teams };
