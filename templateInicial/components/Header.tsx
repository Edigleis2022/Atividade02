import { View, Text, TextInput, StyleSheet } from "react-native";

// Componente Header recebe dados via props
export default function Header(props) {
  return (

    // 🔹 Container principal do Header
    <View style={styles.container}>

      {/* 🔹 Título principal */}
      <Text style={styles.title}>
        {props.nome} {/* Ex: Hello Survivor! */}
      </Text>

      {/* 🔹 Subtítulo */}
      <Text style={styles.subtitle}>
        {props.saudacao} {/* Ex: Ready for battle */}
      </Text>

      {/* 🔹 Campo de busca */}
      <TextInput
        placeholder={props.placeholder} // texto dentro do input
        placeholderTextColor="#999" // cor do placeholder
        style={styles.input}
      />

    </View>
  );
}

// 🔹 Estilos do componente
const styles = StyleSheet.create({

  // Container geral
  container: {
    padding: 20,
    backgroundColor: "#121212" // 🔥 fundo escuro (tema Free Fire)
  },

  // Texto principal (Hello Survivor)
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff" // texto branco (tema dark)
  },

  // Subtítulo (Ready for battle)
  subtitle: {
    color: "#aaa", // cinza claro
    marginBottom: 15
  },

  // Campo de input
  input: {
    backgroundColor: "#1E1E1E", // cor escura
    padding: 12,
    borderRadius: 12,
    color: "#fff", // texto digitado branco
    borderWidth: 1,
    borderColor: "#333" // borda leve
  }

});