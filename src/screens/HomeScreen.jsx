import { Button, Surface, Text } from "react-native-paper";
import { Styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
    return (
        <Surface
            style={Styles.container}
        >
            <Text variant="headlineLarge"

            >bem vindo ao nosso app</Text>
            <Button
                onPress={() => {
                    navigation.navigate("LoginScreen");
                }}
                mode="contained"
            >
                login
            </Button>
        </Surface>
    );
}