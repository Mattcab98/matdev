import { View, Text, useWindowDimensions } from 'react-native'
import { styles } from './Badge.styles';



interface props {
    skillsName: string;
}

const Badge = ({ skillsName }: props) => {

    const { width } = useWindowDimensions();


    return (

        <>
            <View style={styles.badge}>
                <Text
                    style={[ styles.skillsName,
                        { fontSize: width < 400 ? 10 : 12, }
                    ]}>
                        {skillsName}</Text>
            </View>
        </>

    )
}

export { Badge }