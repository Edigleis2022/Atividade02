import { View, Text } from "react-native";
import ActivityCard from "./ActivityCard";


export default function Activities() {

    return (
        <View>
            <Text>ACTIVITIES</Text>

            <ActivitiesCard titulo="Karate" />
            <ActivitiesCard titulo="Yoga" />
            <ActivitiesCard titulo="bharatnatyam" />       
        </View>
    );
}