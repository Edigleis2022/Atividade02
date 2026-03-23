import { icons } from "@/assets/icons";
import Activities from "@/components/Activities";
import Header from "@/components/Header";
import MenuGrid from "@/components/MenuGrid";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export const options = {
  headerShown: false,
};

export default function Index() {

  const menu = [
    { titulo: "Attendance", icon: icons.attendance },
    { titulo: "Messages", icon: icons.messages },
    { titulo: "Profile", icon: icons.profile },
    { titulo: "Marks", icon: icons.mark },
    { titulo: "Homework", icon: icons.homework },
    { titulo: "Track", icon: icons.track },
  ];

  const atividades = [
    { titulo: "Karate", icon: icons.karate },
    { titulo: "Yoga", icon: icons.yoga },
    { titulo: "Bharat", icon: icons.bharath },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      
      <Header 
        nome="Valentino C"
        turma="I Std - A"
        imagem={require("../assets/icons/user.png")}
      />

      <MenuGrid itens={menu} />

      <Activities atividades={atividades} />

    </View>

  );
}
