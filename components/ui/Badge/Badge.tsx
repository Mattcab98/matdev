
import { Text, View, useWindowDimensions } from 'react-native';

import { styles } from './Badge.styles';

interface Props {
    skillsName: string;
}

const Badge = ({ skillsName }: Props) => {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.badge}>

            <Text
                style={[
                    styles.skillsName,
                    {
                        fontSize: width < 400 ? 10 : 12,
                    },
                ]}
            >
                {skillsName}
            </Text>

        </View>
    );
};

export { Badge };
