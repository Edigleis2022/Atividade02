import { View, Text, Image, StyleSheet } from "react-native";

// Componente recebe dados via props (icon + titulo)
export default function ActivityCard(props) {
  return (

    // 🔹 Container do card
    <View style={styles.card}>

      {/* 🔹 ÍCONE */}
      <Image 
        source={props.icon}
        style={styles.icon}
      />

      {/* 🔹 TÍTULO ABAIXO DO ÍCONE */}
      <Text style={styles.text}>
        {props.titulo}
      </Text>

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  // 🔥 CARD (RESOLVE O PROBLEMA VISUAL)
  card: {
    backgroundColor: "rgba(0,0,0,0.6)", // 🔥 escurece fundo

    padding: 10,
    alignItems: "center",

    borderRadius: 12,

    width: 80,

    marginHorizontal: 5 // espaço entre os ícones
  },

  // 🔹 Ícone
  icon: {
    width: 35,
    height: 35,

    marginBottom: 6
  },

  // 🔹 Texto
  text: {
    color: "#fff", // branco forte

    fontSize: 12,
    textAlign: "center",

    fontWeight: "bold" // 🔥 melhora leitura
  }

});