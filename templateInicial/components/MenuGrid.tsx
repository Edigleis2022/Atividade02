import { View } from "react-native";
import MenuItem from "./MenuItem";

export default function MenuGrid(props) {
  return (
    <View style={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 20
    }}>
      
      {props.itens.map((item, index) => (
        <MenuItem
          key={index}
          titulo={item.titulo}
          icon={item.icon}
        />
      ))}

    </View>
  );
}