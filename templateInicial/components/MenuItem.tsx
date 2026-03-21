import { Pressable, View, Image, Text } from "react-native";


export default function MenuItem(props) {
    const {titulo, icon } = props;

    return (
        <Pressable>
            <View>
                <Image source={icon} />
                <Text>{titulo}</Text>
            </View>
        </Pressable>
    )
}