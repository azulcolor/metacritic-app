import { Link, Stack } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerTintColor: "yellow",
          headerTitleAlign: "center",
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className=" justify-center items-center text-center">
              <Image
                className="mb-6 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 200, height: 270 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold mb-8 text-xl text-center mt-3">
                {gameInfo.title}
              </Text>
              <Text className="text-white/80 mb-8 ">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
