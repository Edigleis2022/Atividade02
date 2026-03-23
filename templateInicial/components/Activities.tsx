import { View, Text, Pressable, Image } from "react-native";
import ActivityCard from "./ActivityCard";

export default function Activities(props) {
  return (
    <View style={{ padding: 10 }}>
      
      {/* LINHA DO TÍTULO + BOTÃO */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* ÍCONE + TEXTO */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/icons/music.png")}
            style={{ width: 16, height: 16, marginRight: 5 }}
          />

          <Text style={{ fontWeight: "bold" }}>ACTIVITIES</Text>
        </View>

        {/* BOTÃO */}
        <Pressable
          style={{
            backgroundColor: "#11e956",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 10 }}>ACESSE</Text>
        </Pressable>
      </View>

      {/* LISTA DE CARDS (SEU CÓDIGO ORIGINAL) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        {props.atividades.map((item, index) => (
          <ActivityCard key={index} titulo={item.titulo} icon={item.icon} />
        ))}
      </View>
    </View>
  );
}