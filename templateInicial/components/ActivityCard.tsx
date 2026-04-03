import { View, Text, Image, StyleSheet } from "react-native";

// Componente recebe dados via props (icon + titulo)
export default function ActivityCard(props) {
  return (

    // 🔹 Container do card
    <View style={styles.card}>

      {/* 🔹 Ícone do card */}
      <Image 
        source={props.icon} 
        style={styles.icon} 
      />

      {/* 🔹 Texto do card */}
      <Text style={styles.text}>
        {props.titulo}
      </Text>

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  // 🔥 Card principal
  card: {
    backgroundColor: "#1E1E1E", // cor escura (tema Free Fire)
    
    padding: 12, // espaço interno
    
    alignItems: "center", // centraliza conteúdo
    
    borderRadius: 15, // borda arredondada
    
    width: 80, // largura fixa
    
    borderWidth: 1, // borda
    borderColor: "#333", // cor da borda
    
    marginBottom: 10 // espaço entre elementos
  },

  // 🔹 Ícone
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5 // espaço entre ícone e texto
  },

  // 🔹 Texto
  text: {
    color: "#fff", // texto branco (tema dark)
    fontSize: 12,
    textAlign: "center"
  }

});