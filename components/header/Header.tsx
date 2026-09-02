import { View, Text } from 'react-native'
import { styles } from './header.styles'

import { Feather } from "@expo/vector-icons";

const Header = () => {

    return (

        <View style={styles.header}>

            <View>
                <Text style={styles.logo}>matdev.</Text>
            </View>

            <View>
                <Feather name='user' style={styles.user_icon} />
            </View>

        </View>
    )

};


export { Header }