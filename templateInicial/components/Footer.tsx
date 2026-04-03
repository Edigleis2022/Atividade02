import { View, Text, StyleSheet } from "react-native";

// Componente recebe lista de itens via props
export default function Footer(props) {
  return (

    // 🔹 Container do rodapé
    <View style={styles.container}>

      {/* 🔹 Percorre os itens e cria um botão de texto */}
      {props.itens.map((item, index) => (
        <Text key={index} style={styles.text}>
          {item}
        </Text>
      ))}

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  // 🔥 Container principal
  container: {
    height: 65, // altura do footer
    
    backgroundColor: "#1E1E1E", // 🔥 fundo escuro (tema Free Fire)

    flexDirection: "row", // itens lado a lado
    justifyContent: "space-around", // espaçamento igual
    alignItems: "center", // centraliza vertical

    borderTopWidth: 1, // linha superior
    borderTopColor: "#333" // cor da linha
  },

  // 🔹 Texto dos botões
  text: {
    color: "#fff", // branco
    fontSize: 12
  }

});