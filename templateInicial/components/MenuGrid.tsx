import { View } from "react-native";
import MenuItem from "./MenuItem";

export default function MenuGrid(props) {
  return (
    <View style={{
  flexDirection: "row",        // coloca os itens na horizontal
  flexWrap: "wrap",            // permite quebrar linha (ir para baixo)
  justifyContent: "space-between", // distribui espaço entre os itens
  padding: 20                  // espaço interno do container
}}>

  {/* PERCORRE A LISTA DE ITENS */}
  {props.itens.map((item, index) => (

    <MenuItem
      key={index}            // chave única para cada item (React precisa)
      titulo={item.titulo}   // passa o título via props
      icon={item.icon}       // passa o ícone via props
    />

  ))}

</View>
  );
}