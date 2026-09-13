import { View, Text, useWindowDimensions } from 'react-native';

// STYLES
import { styles } from './hero.styles';

// COMPONENTS UI
import { Badge } from '../ui/Badge/Badge';

const Hero = () => {

    const { width } = useWindowDimensions();

    const isMobile = width < 750;

    return (
        <View style={styles.container__hero}>

            <View
                style={
                    isMobile
                        ? styles.hero
                        : styles.hero__desktop
                }
            >

                {/* SKILLS */}

                <View style={styles.container_skills}>

                    <Badge
                        skillsName="Web Development"
                    />

                    <Badge
                        skillsName="Frontend"
                    />

                    <Badge
                        skillsName="UI / UX"
                    />

                </View>

                {/* TEXT */}

                <View
                    style={
                        isMobile
                            ? styles.container_txtMobile
                            : styles.container_txtDesktop
                    }
                >

                    <Text
                        style={
                            isMobile
                                ? styles.hero__h1Mobile
                                : styles.hero__h1Desktop
                        }
                    >
                        Building digital experiences that connect.
                    </Text>

                    <Text
                        style={
                            isMobile
                                ? styles.hero__h2Mobile
                                : styles.hero__h2Desktop
                        }
                    >
                        Full Stack Developer focused on creating modern,
                        responsive and scalable web experiences, with a strong
                        focus on clean code, thoughtful design and real-world
                        problem solving.
                    </Text>

                </View>

                {/* BUTTONS */}

                <View style={styles.container__button}>

                    <Text style={styles.button__1}>
                        View my work
                    </Text>

                    <Text style={styles.button__2}>
                        Let's connect
                    </Text>

                </View>

            </View>

        </View>
    );
};

export { Hero };
