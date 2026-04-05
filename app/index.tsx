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
    { icon: icons.gun, titulo: "Waepons" },
    { icon: icons.target, titulo: "Mission" },
    { icon: icons.car, titulo: "Vehicles" },
    { icon: icons.player, titulo: "Character" },
  ];

  // 🔹 ARRAY da lista de atividades (parte de baixo)
  const lista = [
  {
    icon: require("../assets/activities/FF_Clu_character.png"),
    titulo: "Lorry, Plate #: SHD90893",
    hora: "TODAY, 2:00 PM - 4:00PM",
    rota: "Orchard → Bishan",
    nota: "5.0"
  },
  {
    icon: require("../assets/activities/FF_Iris_character.png"),
    titulo: "Motorcycle, Plate #: SHD90893",
    hora: "3 JULY, 6:00 PM - 9:00PM",
    rota: "Paya Lebar → Yishun",
    nota: "4.5"
  }
];

  // 🔹 RETURN = o que aparece na tela
  return (
    // View principal (container da tela inteira)
    <ImageBackground
      source={require("../assets/background/free_fire_wallpaper_hd.jpg")}
      style={styles.container}
      resizeMode="cover"
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
    width: "100%",
      height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // camada escura para melhor contraste
  }
});
