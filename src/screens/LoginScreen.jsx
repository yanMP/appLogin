import { useState } from "react";
import { View } from "react-native";
import { Button, Surface, Text, TextInput, Modal, Portal } from "react-native-paper";
import { Styles } from "../config/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState ({   email: false,
    senha: false,});
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
  

    function realizaLogin() {
      console.log("Fazer Login");
      if (email === "") {
        setErro({ ...erro, email: true });
        setErrorMessage("Email é obrigatório.");
        showModal();
        return;
      } else {
        setErro({ ...erro, email: false });
      }
      if (senha === "") {
        setErro({ ...erro, senha: true });
        setErrorMessage("Senha é obrigatória.");
        showModal();
        return;
      } else {
        setErro({ ...erro, senha: false });
      }
      realizaLoginNoFirebase();
    }

  async function realizaLoginNoFirebase() {
    try {
      const usuarioRef = await signInWithEmailAndPassword(auth, email, senha);
      console.log(usuarioRef);
      // Redirecionar para a tela principal ou outra tela após login bem-sucedido
      navigation.navigate("HomeScreen");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Usuário não encontrado.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Senha incorreta.");
      } else {
        setErrorMessage("Erro ao fazer login: " + error.message);
      }
      showModal();
    }
  }


  return (

    <Surface style={Styles.container}>
      <View style={Styles.innerContainer}>
        {/*Modal*/}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
          >
            <Text>{errorMessage}</Text>
            <Button onPress={hideModal}>Fechar</Button>
          </Modal>
        </Portal>
        {/* FIM Modal */}

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


        <Button onPress={realizaLogin} mode="contained">Fazer Login</Button>
        <View style={{ marginBottom: 10 }} /> 
        <Button onPress={() => navigation.navigate("registerScreen")}>
          Faça seu cadastro
        </Button>
          </View>
      
      </Surface>
      );
}
