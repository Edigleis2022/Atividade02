import { View, Text, Image } from "react-native";

export default function ActivityCard(props) {
  return (
   <View style={{
  backgroundColor: "#f0f0f0", // cor de fundo do card
  padding: 10,                // espaço interno
  alignItems: "center",       // centraliza conteúdo (ícone + texto)
  borderRadius: 10,           // deixa bordas arredondadas
  width: 80                   // largura fixa do card
}}>

  {/* ÍCONE VINDO POR PROPS */}
  <Image 
    source={props.icon}       // recebe a imagem do componente pai
    style={{ width: 40, height: 40 }} 
  />

  {/* TEXTO VINDO POR PROPS */}
  <Text>
    {props.titulo}        {/*recebe o título do componente pai*/}
  </Text>

</View>
  );
}