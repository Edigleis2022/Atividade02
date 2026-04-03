// Importa componentes básicos do React Native
import { View, ScrollView, StyleSheet } from "react-native";

// Importa seus componentes personalizados
import Header from "../components/Header";
import MenuGrid from "../components/MenuGrid";
import Banner from "../components/Banner";
import Activities from "../components/Activities";
import Footer from "../components/Footer";

// Componente principal da tela
export default function Home() {

  // 🔹 ARRAY do menu (cards de opções)
  // Cada objeto representa UM card
  const menu = [
    { icon: require("../assets/icons/karate.png"), titulo: "Weapon" },
    { icon: require("../assets/icons/menu.png"), titulo: "Mission" },
    { icon: require("../assets/icons/music.png"), titulo: "Vehicle" },
    { icon: require("../assets/icons/user.png"), titulo: "Character" }
  ];

  // 🔹 ARRAY da lista de atividades (parte de baixo)
  const lista = [
    { icon: require("../assets/icons/profile.png"), titulo: "Battle Royale Match" },
    { icon: require("../assets/icons/profile.png"), titulo: "Squad Mission" }
  ];

  // 🔹 RETURN = o que aparece na tela
  return (

    // View principal (container da tela inteira)
    <View style={styles.container}>

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
  );
}

// 🔹 Estilos da tela
const styles = StyleSheet.create({

  // Container principal
  container: {
    flex: 1, // ocupa a tela inteira
    backgroundColor: "#121212" // cor de fundo (tema Free Fire)
  }

});