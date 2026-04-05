import { View, Text, Image, StyleSheet } from "react-native";

// Componente recebe lista via props
export default function Activities(props) {
  return (

    // 🔹 Container principal
    <View style={styles.container}>

      {/* 🔹 Título da seção */}
      <Text style={styles.title}>
        Upcoming Bookings ({props.lista.length})
      </Text>

      {/* 🔹 Percorre a lista */}
      {props.lista.map((item, index) => (
        
        // 🔹 Card da lista
        <View key={index} style={styles.card}>

          {/* 🔹 IMAGEM LATERAL */}
          <Image
            source={item.icon} // imagem vinda por props
            style={styles.image}
          />

          {/* 🔹 BLOCO DE INFORMAÇÕES */}
          <View style={styles.info}>

            {/* 🔹 DATA/HORA */}
            <Text style={styles.time}>
              {item.hora}
            </Text>

            {/* 🔹 ROTA */}
            <Text style={styles.route}>
              {item.rota}
            </Text>

            {/* 🔹 DETALHE */}
            <Text style={styles.detail}>
              {item.titulo}
            </Text>

          </View>

          {/* 🔹 AVALIAÇÃO (lado direito) */}
          <View style={styles.rating}>
            <Text style={styles.ratingText}>
              ⭐ {item.nota}
            </Text>
          </View>

        </View>
      ))}

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  container: {
    marginHorizontal: 15,
    marginTop: 15
  },

  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },

  card: {
    flexDirection: "row", // 🔥 horizontal

    backgroundColor: "rgba(0,0,0,0.6)",

    borderRadius: 15,
    padding: 10,
    marginBottom: 10,

    alignItems: "center"
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10
  },

  info: {
    flex: 1
  },

  time: {
    color: "#FF6F00",
    fontSize: 12,
    fontWeight: "bold"
  },

  route: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },

  detail: {
    color: "#ccc",
    fontSize: 12
  },

  rating: {
    backgroundColor: "#FF6F00",
    padding: 5,
    borderRadius: 10
  },

  ratingText: {
    color: "#fff",
    fontSize: 12
  }

});