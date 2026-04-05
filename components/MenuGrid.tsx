import { View, StyleSheet, Text } from "react-native";
import ActivityCard from "./ActivityCard";

// Componente recebe uma LISTA via props
export default function MenuGrid(props) {
  return (

    // 🔹 Container principal (agora em coluna)
    <View style={styles.container}>

      {/* 🔹 PERGUNTA */}
      <Text style={styles.title}>
        What do you want to do?
      </Text>

      {/* 🔹 LINHA DE ÍCONES */}
      <View style={styles.row}>
        {props.itens.map((item, index) => (
          <ActivityCard
            key={index}
            icon={item.icon}
            titulo={item.titulo}
          />
        ))}
      </View>

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  // 🔹 Container geral (agora em coluna)
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },

  // 🔹 Título (pergunta)
  title: {
    color: "#fff", // branco
    fontSize: 16, // tamanho médio
    fontWeight: "bold", // negrito

    marginBottom: 10, // espaço entre título e ícones
    marginLeft: 5 // leve alinhamento
  },

  // 🔹 Linha de ícones
  row: {
    flexDirection: "row", // ícones lado a lado
    justifyContent: "space-between"
  }

});