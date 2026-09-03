import { View, ScrollView } from "react-native";

import { Header } from "../../components/header/Header";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground";
import { Hero } from "../../components/hero/Hero";
import { styles } from "./home.styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <AnimatedBackground />

      <ScrollView>
        <Header />

        <View style={styles.content}>
          <Hero />
        </View>
      </ScrollView>

    </View>
  );
};

export { HomeScreen };