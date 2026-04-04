// Importa componentes básicos do React Native
import { ScrollView, StyleSheet, ImageBackground, View } from "react-native";

// Importa seus componentes personalizados
import Header from "../components/Header";
import MenuGrid from "../components/MenuGrid";
import Banner from "../components/Banner";
import Activities from "../components/Activities";
import Footer from "../components/Footer";
import { icons } from "@/assets/icons";

// Componente principal da tela
export default function Home() {
  // 🔹 ARRAY do menu (cards de opções)
  // Cada objeto representa UM card
  const menu = [
    { icon: icons.gun, tituulo: "Waepons" },
    { icon: icons.target, tituulo: "Mission" },
    { icon: icons.car, tituulo: "Vehicles" },
    { icon: icons.player, tituulo: "Character" },
  ];

  // 🔹 ARRAY da lista de atividades (parte de baixo)
  const lista = [
  {
    icon: require("../assets/activities/FF_Clu_character.png"),
    titulo: "Battle Royale Match",
  },
  {
    icon: require("../assets/activities/FF_Iris_character.png"),
    titulo: "Squad Mission",
  },
];

  // 🔹 RETURN = o que aparece na tela
  return (
    // View principal (container da tela inteira)
    <ImageBackground
      source={require("../assets/background/background.png")}
      style={styles.container}
    >
      <View style={styles.overlay}>

        {/* ScrollView permite rolar a tela */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* 🔹 HEADER */}
          {/* Recebe dados via props */}
          <Header
            nome="Hello Survivor!"
            saudacao="Ready for battle 🔥"
            placeholder="Search weapons..."
          />

          {/* 🔹 MENU (cards) */}
          {/* Envia o array "menu" para o componente */}
          <MenuGrid itens={menu} />

          {/* 🔹 BANNER */}
          <Banner
            titulo="Get rewards now!"
            descricao="Complete missions and earn diamonds 💎"
          />

          {/* 🔹 LISTA DE ATIVIDADES */}
          <Activities lista={lista} />
        </ScrollView>

        {/* 🔹 FOOTER (fixo embaixo) */}
        <Footer itens={["Home", "Play", "Store", "Profile"]} />
        
      </View>

    </ImageBackground>
  );
}

// 🔹 Estilos da tela
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1, // ocupa a tela inteira
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // camada escura para melhor contraste
  }
});
