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
  backgroundColor: "rgba(0,0,0,0.6)", // 🔥 MAIS ESCURO

  padding: 20,
  borderRadius: 15,

  marginHorizontal: 15,
  marginTop: 15,

  elevation: 5 // 🔥 ANDROID (dá destaque)
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