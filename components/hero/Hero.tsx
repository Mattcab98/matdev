import { View, Text } from 'react-native';
import { styles } from './hero.styles';
import { Badge } from '../ui/Badge/Badge';

const Hero = () => {

    return (
        <>
            <View style={styles.hero}>
                <View style={styles.container_skills}>
                    <Badge skillsName="Web Development"></Badge>
                    <Badge skillsName="Frontend"></Badge>
                    <Badge skillsName="UI / UX"></Badge>
                </View>

                <View style={styles.container_txt}>
                    <Text style={styles.hero__h1}>Building digital experiences that connect.</Text>
                    <Text style={styles.hero__h2}>Web Developer focused on creating modern, scalable and meaningful digital experiences.</Text>
                </View>
                <View style={styles.container_button}>
                    <Text style={styles.button__1}>View my work</Text> 
                    <Text style={styles.button__2}>Let's connect</Text> 
                </View>
            </View>
        </>

    )
}
export { Hero };