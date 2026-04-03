import { View, Text, TextInput, StyleSheet } from "react-native";

// Componente Header recebe dados via props
export default function Header(props) {
  return (

    // 🔹 Container principal do Header
    <View style={styles.container}>

<<<<<<< HEAD
      {/* 🔹 Título principal */}
      <Text style={styles.title}>
        {props.nome} {/* Ex: Hello Survivor! */}
      </Text>

      {/* 🔹 Subtítulo */}
      <Text style={styles.subtitle}>
        {props.saudacao} {/* Ex: Ready for battle */}
=======
  {/* TÍTULO CENTRAL */}
  <Text
    style={{
      color: "#fff",        // cor branca
      fontSize: 18,         // tamanho da fonte
      textAlign: "center",  // centraliza o texto
      fontWeight: "bold",   // deixa em negrito
    }}
  >
    HOME
  </Text>

  {/* BLOCO DO PERFIL (IMAGEM + DADOS) */}
  <View
    style={{
      flexDirection: "row", // coloca imagem e texto lado a lado
      alignItems: "center", // alinha verticalmente
      marginTop: 15,        // espaço abaixo do título
    }}
  >

    {/* IMAGEM DO USUÁRIO */}
    <Image
      source={props.imagem} // imagem recebida por props
      style={{
        width: 50,
        height: 50,
        borderRadius: 25    // deixa a imagem redonda
      }}
    />

    {/* DADOS DO USUÁRIO */}
    <View style={{ marginLeft: 10 }}>
      
      <Text style={{ color: "#fff" }}>
        {props.nome}        {/*nome vindo por props*/}
      </Text>

      <Text style={{ color: "#fff" }}>
        {props.turma}       {/*turma vindo por props*/}
>>>>>>> e24901fca1be18cbd6041a1047028c7b30fb7cb7
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