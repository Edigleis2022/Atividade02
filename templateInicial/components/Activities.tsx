import { View, Text } from "react-native";
import ActivityCard from "./ActivityCard";


export default function Activities() {

    return (
        <View>
            <Text>ACTIVITIES</Text>

            <ActivityCard titulo="Karate" />
            <ActivityCard titulo="Yoga" />
            <ActivityCard titulo="bharatnatyam" />       
        </View>
    );
}