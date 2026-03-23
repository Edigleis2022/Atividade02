import { View, Text, Image, Pressable } from "react-native";

export default function MenuItem(props) {
  return (
    <Pressable style={{ width: "30%" }}>
      <View
        style={{
          backgroundColor: "#f0f0f0",
          alignItems: "center",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <Image source={props.icon} style={{ width: 40, height: 40 }} />
        
        <Text style={{ marginTop: 5, fontSize: 12 }}>
            {props.titulo}
        </Text>
      </View>
    </Pressable>
  );
}
