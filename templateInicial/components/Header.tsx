import { View, Text, TextInput, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useState } from "react";

export default function Header(props) {

  // 🔹 Estado do texto digitado
  const [texto, setTexto] = useState("");

  // 🔹 Estado de carregamento
  const [loading, setLoading] = useState(false);

  // 🔹 Função chamada quando o usuário digita
  function handleChange(value) {
    setTexto(value); // salva o texto

    setLoading(true); // 🔥 ativa o loading

    // 🔥 simula uma busca (1 segundo)
    setTimeout(() => {
      setLoading(false); // desliga o loading
    }, 1000);
  }

  return (
    <View style={styles.container}>

      {/* 🔹 Título */}
      <Text style={styles.title}>
        {props.nome}
      </Text>

      {/* 🔹 Subtítulo */}
      <Text style={styles.subtitle}>
        {props.saudacao}
      </Text>

      {/* 🔹 Perfil */}
      <View style={styles.profileContainer}>

        <Image
          source={props.imagem}
          style={styles.image}
        />

      </View>

      {/* 🔹 Input */}
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#999"
        style={styles.input}

        value={texto} // 🔥 controla o valor
        onChangeText={handleChange} // 🔥 ativa função ao digitar
      />

      {/* 🔹 LOADING (só aparece quando loading = true) */}
      {loading && (
        <ActivityIndicator
          size="small"
          color="#FF6F00" // 🔥 cor estilo Free Fire
          style={{ marginTop: 10 }}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "transparent"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },

  subtitle: {
    color: "#aaa",
    marginBottom: 10
  },

  centerTitle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  text: {
    color: "#fff"
  },

  input: {
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 12,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#333"
  }
});