import { Text, View, Image } from "react-native";



export default function Header(props){

    const {nome, turma, imagem} = props;

    return (
        <View>
            <Text>Home</Text>

            <View>
                <Image source={imagem}/>
                <View>
                    <Text>{nome}</Text>
                    <Text>{turma}</Text>
                </View>
            </View>
        </View>
    );
}