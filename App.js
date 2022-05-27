import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createTamagui, Button } from "tamagui";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/theme-base";

const Tamagui = createTamagui({
  themes,
  tokens,
  shorthands,
});

export default function App() {
  return (
    <Tamagui.Provider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button>Click Me!</Button>
        <StatusBar style="auto" />
      </View>
    </Tamagui.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
