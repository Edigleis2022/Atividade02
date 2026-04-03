import { View, Text, StyleSheet } from "react-native";

// Componente recebe titulo e descricao via props
export default function Banner(props) {
  return (

    // 🔹 Container do banner
    <View style={styles.container}>

      {/* 🔹 Título principal */}
      <Text style={styles.title}>
        {props.titulo}
      </Text>

      {/* 🔹 Descrição */}
      <Text style={styles.subtitle}>
        {props.descricao}
      </Text>

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  // 🔥 Caixa principal (banner)
  container: {
    backgroundColor: "#FF6F00", // 🔥 laranja mais forte (estilo Free Fire)

    padding: 20, // espaço interno

    borderRadius: 20, // bordas mais arredondadas (igual app moderno)

    marginHorizontal: 15, // espaço lateral (igual layout)
    marginVertical: 10 // espaço vertical
  },

  // 🔹 Título
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5 // espaço abaixo do título
  },

  // 🔹 Texto secundário
  subtitle: {
    color: "#fff",
    opacity: 0.9 // leve transparência (fica mais bonito)
  }

});