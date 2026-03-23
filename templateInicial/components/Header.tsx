import { Text, View, Image } from "react-native";

export default function Header(props) {
    
  const { nome, turma, imagem } = props;

  return (
    <View
  style={{
    backgroundColor: "#07183b", // cor de fundo (azul escuro)
    paddingTop: 10,             // espaço no topo
    paddingBottom: 15,          // espaço embaixo
    paddingHorizontal: 15,      // espaço lateral
  }}
>

  {/* ÍCONE NO CANTO ESQUERDO */}
  <Image
    source={require("../assets/icons/menu.png")} // imagem local (menu)
    style={{
      width: 20,
      height: 20,
      position: "absolute", // posição livre na tela
      left: 0,              // encosta na esquerda
      top: 5                // distância do topo
    }}
  />

  {/* TÍTULO CENTRAL */}
  <Text
    style={{
      color: "#fff",        // cor branca
      fontSize: 18,         // tamanho da fonte
      textAlign: "center",  // centraliza o texto
      fontWeight: "bold",   // deixa em negrito
    }}
  >
    HOME
  </Text>

  {/* BLOCO DO PERFIL (IMAGEM + DADOS) */}
  <View
    style={{
      flexDirection: "row", // coloca imagem e texto lado a lado
      alignItems: "center", // alinha verticalmente
      marginTop: 15,        // espaço abaixo do título
    }}
  >

    {/* IMAGEM DO USUÁRIO */}
    <Image
      source={props.imagem} // imagem recebida por props
      style={{
        width: 50,
        height: 50,
        borderRadius: 25    // deixa a imagem redonda
      }}
    />

    {/* DADOS DO USUÁRIO */}
    <View style={{ marginLeft: 10 }}>
      
      <Text style={{ color: "#fff" }}>
        {props.nome}        // nome vindo por props
      </Text>

      <Text style={{ color: "#fff" }}>
        {props.turma}       // turma vindo por props
      </Text>

    </View>

  </View>

</View>
  );
}
