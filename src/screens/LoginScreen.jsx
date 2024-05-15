import { useState } from "react";
import { View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { Styles } from "../config/styles";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState ({   email: false,
    senha: false,})


  function realizaLogin() {
    console.log("Fazer Login");
    if (email === "") {
    setErro({...erro, email: true})
  }
  if (senha === "") {
    setErro({ ...erro, senha: true });
  } else {
    setErro({ ...erro, senha: false });
    
  }
  }

  async function realizaLoginNoFirebase() {
    try {
      const usuarioRef = signInWithEmailAndPassword
    } catch (e) {
      console.log(e);
    }
    }
  


  return (

    <Surface style={Styles.container}>
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontWeight: 800
          }}
        >
          Faça seu Login</Text>
        <TextInput
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          value={email}

        />
        
        <View style={{ marginBottom: 10 }}></View>


        <TextInput
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />
        <View style={{ marginBottom: 10 }}></View>


        <Button onPress={() => realizaLogin} mode="contained">Fazer Login</Button>
        <View style={{ marginBottom: 10 }} /> 
        <Button onPress={() => navigation.navigate("registerScreen")}>
          Faça seu cadastro
        </Button>
          </View>
      </View>
      </Surface>
      );
}
