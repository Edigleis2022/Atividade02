import { View } from "react-native";
import MenuItem from "./MenuItem";

export default function MenuGrid(){

    return (
        <View>
            <MenuItem titulo="Attendance" />
            <MenuItem titulo="Messages" />
            <MenuItem titulo="Profile" />
            <MenuItem titulo="Marks" />
            <MenuItem titulo="Homework" />
            <MenuItem titulo="Track" />
        </View>    
    );
}