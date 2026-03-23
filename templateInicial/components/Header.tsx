import { Text, View, Image } from "react-native";

export default function Header(props) {
    
  const { nome, turma, imagem } = props;

  return (
    <View
      style={{
        backgroundColor: "#07183b",
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
      }}
    >
      {/* ÍCONE ESQUERDO */}
    <Image
      source={require("../assets/icons/menu.png")}
      style={{
        width: 20,
        height: 20,
        position: "absolute",
        left: 0,
        top: 5
      }}
    />

      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        HOME
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Image
          source={props.imagem}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />

        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#fff" }}>{props.nome}</Text>
          <Text style={{ color: "#fff" }}>{props.turma}</Text>
        </View>
      </View>
    </View>
  );
}
