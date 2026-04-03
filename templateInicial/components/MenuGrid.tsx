import { View, StyleSheet } from "react-native";
import ActivityCard from "./ActivityCard";

// Componente recebe uma LISTA via props
export default function MenuGrid(props) {
  return (

    // 🔹 Container que segura todos os cards
    <View style={styles.container}>

      {/* 🔹 Percorre a lista e cria um card para cada item */}
      {props.itens.map((item, index) => (
        <ActivityCard
          key={index} // chave obrigatória no map
          icon={item.icon} // imagem
          titulo={item.titulo} // texto
        />
      ))}

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  container: {
    flexDirection: "row", // coloca os itens lado a lado
    justifyContent: "space-between", // distribui melhor (mais fiel ao layout)
    
    marginHorizontal: 15, // espaço nas laterais (igual imagem)
    marginVertical: 10, // espaço em cima/baixo
    
  }

});