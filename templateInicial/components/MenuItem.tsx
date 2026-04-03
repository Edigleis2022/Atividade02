import { View, Text, Image, Pressable } from "react-native";

export default function MenuItem(props) {
  return (
    <Pressable style={{ width: "30%" }}> {/* área clicável ocupando parte da linha */}

  <View
    style={{
      backgroundColor: "#f0f0f0", // cor de fundo do card
      alignItems: "center",       // centraliza ícone e texto
      padding: 15,                // espaço interno
      borderRadius: 10,           // bordas arredondadas
      marginBottom: 15,           // espaço entre os cards
    }}
  >

    {/* ÍCONE DO MENU */}
    <Image 
      source={props.icon}         // imagem recebida via props
      style={{ width: 40, height: 40 }} 
    />

    {/* TEXTO DO MENU */}
    <Text style={{ marginTop: 5, fontSize: 12 }}>
      {props.titulo}              {/* título recebido via props */}
    </Text>

  </View>

</Pressable>
  );
}
