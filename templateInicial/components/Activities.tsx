import { View, Text, Pressable, Image } from "react-native";
import ActivityCard from "./ActivityCard";

export default function Activities(props) {
  return (
    <View style={{ padding: 10 }}> {/* Espaçamento externo da seção */}

  {/* LINHA SUPERIOR: TÍTULO + BOTÃO */}
  <View
    style={{
      flexDirection: "row",            // coloca elementos na horizontal
      justifyContent: "space-between", // separa título (esq) e botão (dir)
      alignItems: "center",            // alinha tudo verticalmente
    }}
  >

    {/* BLOCO DO TÍTULO (ÍCONE + TEXTO) */}
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      
      {/* ÍCONE FIXO */}
      <Image
        source={require("../assets/icons/music.png")} // imagem local
        style={{ width: 16, height: 16, marginRight: 5 }} // tamanho + espaço do texto
      />

      {/* TEXTO DO TÍTULO */}
      <Text style={{ fontWeight: "bold" }}>
        ACTIVITIES
      </Text>

    </View>

    {/* BOTÃO DE AÇÃO */}
    <Pressable
      style={{
        backgroundColor: "#11e956", // cor do botão
        paddingHorizontal: 10,      // espaço lateral
        paddingVertical: 4,         // espaço vertical
        borderRadius: 10,           // borda arredondada
      }}
    >
      <Text style={{ fontSize: 10 }}>
        ACESSE
      </Text>
    </Pressable>

  </View>

  {/* LISTA DE CARDS DE ATIVIDADES */}
  <View
    style={{
      flexDirection: "row",          // cards lado a lado
      justifyContent: "space-around",// espaço igual entre eles
      marginTop: 10,                 // distância do título
    }}
  >

    {/* PERCORRE O ARRAY DE ATIVIDADES */}
    {props.atividades.map((item, index) => (

      <ActivityCard
        key={index}                 // chave única (React precisa)
        titulo={item.titulo}        // passa o título via props
        icon={item.icon}            // passa o ícone via props
      />

    ))}

  </View>

</View>
  );
}