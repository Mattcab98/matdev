import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from './hero.styles';
import { Badge } from '../ui/Badge/Badge';

const Hero = () => {

    const { width } = useWindowDimensions();

    const isMobile = width < 768;

    return (
        <>
            <View style={styles.container__hero}>

                <View style={[styles.hero]}>

                    <View style={styles.container_skills}>
                        <Badge skillsName="Web Development"></Badge>
                        <Badge skillsName="Frontend"></Badge>
                        <Badge skillsName="UI / UX"></Badge>
                    </View>

                    <View style={styles.container_txt}>
                        <Text style={styles.hero__name}>Matias Alvarez</Text>

                        <Text style={[styles.hero__h1, {textAlign: isMobile ? 'center' : 'left'}]}>Building digital experiences that connect.</Text>
                        <Text style={styles.hero__h2}>Full Stack Developer focused on creating modern, responsive and scalable web experiences, with a strong focus on clean code, thoughtful design and real-world problem solving.</Text>
                    </View>

                    <View style={styles.container_button}>
                        <Text style={styles.button__1}>View my work</Text>
                        <Text style={styles.button__2}>Let's connect</Text>
                    </View>

                </View>

            </View>

        </>

    )
}
export { Hero };