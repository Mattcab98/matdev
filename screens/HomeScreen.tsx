import { View } from "react-native";

import { Header } from "../components/header/Header";
import { AnimatedBackground } from "../components/AnimatedBackground/AnimatedBackground";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>

      <AnimatedBackground />
      <Header />
      
    </View>
  );
};

export { HomeScreen };