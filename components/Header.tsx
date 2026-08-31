import { View, Text } from 'react-native'
import { styles } from '../styles/header.styles'

import { Feather } from "@expo/vector-icons";

const Header = () => {

    return (

        <View style={styles.header}>

            <View style={styles.container_logo}>
                <Text style={styles.logo}>matdev</Text>
            </View>

            <View>
                <Feather name='user' />
            </View>

        </View>
    )

};


export { Header }