import { View, Image, Text } from "react-native";


export default function ActivityCard(props) {

    const {titulo, icon } = props;

    return(
        <View>Introduce new features
            <Image source={icon}/>
            <Text>{titulo}</Text>                   
        </View>
    );
}