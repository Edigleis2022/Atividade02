import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react"; // 🔥 usado para controlar o botão ativo
import { icons } from "../assets/icons";

// Componente Footer
export default function Footer(props) {

  // 🔹 Estado para controlar qual botão está ativo
  const [ativo, setAtivo] = useState(0); 
  // começa no primeiro (index 0 = Home)

  return (

    // 🔹 Container principal (barra inferior)
    <View style={styles.container}>

      {/* 🔹 Percorre a lista de itens */}
      {props.itens.map((item, index) => {

        // 🔹 Define o ícone baseado no nome do item
        let icon;

        if (item === "Home") icon = icons.home;
        if (item === "Play") icon = icons.play;
        if (item === "Store") icon = icons.shop;
        if (item === "Profile") icon = icons.user;

        // 🔹 Verifica se esse item é o ativo
        const isAtivo = ativo === index;

        return (

          // 🔹 Botão clicável
          <TouchableOpacity
            key={index}
            style={styles.item}

            // 🔥 Quando clicar, muda o botão ativo
            onPress={() => setAtivo(index)}
          >

            {/* 🔹 Ícone */}
            <Image
              source={icon}

              style={[
                styles.icon,

                // 🔥 Se estiver ativo → laranja | senão → branco
                { tintColor: isAtivo ? "#FF6F00" : "#fff" }
              ]}
            />

            {/* 🔹 Texto */}
            <Text
              style={[
                styles.text,

                // 🔥 mesma lógica do ícone
                { color: isAtivo ? "#FF6F00" : "#fff" }
              ]}
            >
              {item}
            </Text>

          </TouchableOpacity>
        );
      })}

    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({

  // 🔥 Barra inferior
  container: {
    height: 65,

    backgroundColor: "rgba(0,0,0,0.7)", // transparente

    flexDirection: "row", // itens lado a lado
    justifyContent: "space-around", // espaço entre eles
    alignItems: "center", // centraliza verticalmente

    borderTopWidth: 1,
    borderTopColor: "#444"
  },

  // 🔹 Cada botão
  item: {
    alignItems: "center"
  },

  // 🔹 Ícone
  icon: {
    width: 22,
    height: 22,
    marginBottom: 4
  },

  // 🔹 Texto
  text: {
    fontSize: 12
  }

});