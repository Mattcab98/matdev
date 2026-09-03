import { View, Text } from 'react-native'
import { styles } from './Badge.styles';


interface props {
    skillsName: string;
}

const Badge = ({ skillsName }: props) => {
    return (

        <>
            <View style={styles.badge}>
                <Text style={styles.skillsName}>{skillsName}</Text>
            </View>
        </>

    )
}

export { Badge }