
import { View, ScrollView } from "react-native";

import { AnimatedBackground } from "../../components/animations/AnimatedBackground/AnimatedBackground";

import { Header } from "../../components/header/Header";
import { Hero } from "../../components/hero/Hero";

import { styles } from "./home.styles";

const HomeScreen = () => {

    return (
        <View style={styles.container}>

            {/* BACKGROUND */}

            <AnimatedBackground />

            {/* HEADER */}

            <View style={styles.container__header}>
                <Header />
            </View>

            {/* CONTENT */}

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                <Hero />

            </ScrollView>

        </View>
    );
};

export { HomeScreen };
