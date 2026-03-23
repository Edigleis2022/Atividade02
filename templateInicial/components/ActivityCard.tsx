import { View, Text, Image } from "react-native";

export default function ActivityCard(props) {
  return (
    <View style={{
      backgroundColor: "#f0f0f0",
      padding: 10,
      alignItems: "center",
      borderRadius: 10,
      width: 80
    }}>

      <Image source={props.icon} style={{ width: 40, height: 40 }} />

      <Text>
        {props.titulo}
    </Text>
    </View>
  );
}