import { View, Text, StyleSheet } from "react-native";
import ActivityCard from "./ActivityCard";

// Componente recebe uma LISTA via props
export default function Activities(props) {
  return (

    // 🔹 Container principal
    <View style={styles.container}>

      {/* 🔹 Título da seção */}
      <Text style={styles.title}>
        Recent Activities
      </Text>

      {/* 🔹 Lista de cards */}
      <View style={styles.list}>

        {props.lista.map((item, index) => (
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

  // Container geral da seção
  container: {
    marginHorizontal: 15, // alinha com o resto da tela
    marginTop: 10
  },

  // Título da seção
  title: {
    color: "#fff", // texto branco (tema dark)
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },

  // Área onde ficam os cards
  list: {
    flexDirection: "row", // coloca lado a lado
    justifyContent: "space-between" // distribui bem
  }

});