import { useState } from "react";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { Styles } from "../config/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function registerScreen({ navigation }) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repedirSenha, setRepedirSenha] = useState("");
  const [rua, setRua] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState({});


  function realizaRegistro() {
    console.log("Fazer Registro");
    // if (nome, email, senha, repedirSenha, rua, cep, cidade, estado == "") {

      if (nome === "") {
        setErro({ ...erro, nome: true });
      } else {
        setErro({ ...erro, nome: false });
      }
      if (email === "") {
        setErro({ ...erro, email: true });
      } else {
        setErro({ ...erro, email: false });
      }
      if (senha === "") {
        setErro({ ...erro, senha: true });
      } else {
        setErro({ ...erro, senha: false });
      }
      if (repedirSenha === "") {
        setErro({ ...erro, repedirSenha: true });
      } else {
        setErro({ ...erro, repedirSenha: false });


        if (senha !== repedirSenha) {
          setErro({ ...erro, senha: true });
          setErro({ ...erro, repedirSenha: true });
        }
      }
      if (senha !== repedirSenha) {
        setErro({ ...erro, senha: true });
        setErro({ ...erro, repedirSenha: true });
      }
    
    if (rua === "") {
      setErro({ ...erro, rua: true });
    } else {
      setErro({ ...erro, rua: false });
    }
    if (cep === "") {
      setErro({ ...erro, cep: true });
    } else {
      setErro({ ...erro, cep: false });
    }
    if (cidade === "") {
      setErro({ ...erro, cidade: true });
    } else {
      setErro({ ...erro, cidade: false });
    }
    if (estado === "") {
      setErro({ ...erro, estado: true });
    } else {
      setErro({ ...erro, estado: false });
    }


  }

  cadastrarNoFirebase();

  async function cadastrarNoFirebase() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;
      console.log("Usuário cadastrado", user);

      const collectionRef = collection(db, "usuarios");
      
      const docRef = await setDoc(doc(collectionRef, user.uid),
    {
      nome: nome,
      email: email,
      senha: senha,
      rua: rua,
      cep: cep,
      cidade: cidade,
      estado: estado
    });

    } catch (error) {
      console.error(error);
    }
  }

  function buscaCEP() {
    console.log("Busca CEP");
    let cepLimpo = cep.replace("-", "").trim();
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json()) // obrigatório em requisições fetch json
      .then((dados) => { // agora sim vou tratar os dados
        console.log(dados);
        setRua(dados.rua);
        setCidade(dados.localidade);
        setEstado(dados.uf);
      });

    //
  }

  return (
    <Surface style={Styles.container}>
      <View style={Styles.innerContainer}>
        <Text variant="headlineMedium">Faça seu Registro</Text>

        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={Styles.input}
        />
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={Styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={Styles.input}
        />
        <TextInput
          placeholder="Repita sua senha"
          value={repedirSenha}
          onChangeText={setRepedirSenha}
          secureTextEntry
          style={Styles.input}
        />
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Text variant="headlineMedium">Dados pessoais</Text>

          <TextInput
            placeholder="Digite seu CEP"
            value={cep}
            onChangeText={setCep}
            onBlur={buscaCEP}
            style={Styles.input}
          />
          <TextInput
            placeholder="Rua"
            value={rua}
            onChangeText={setRua}
            style={Styles.input}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >

          </View>
          <TextInput
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
            style={{
              ...Styles.input,
              width: "70%",

            }}
          />
          <TextInput
            placeholder="Estado"
            value={estado}
            onChangeText={setEstado}
            style={{
              ...Styles.input,
              width: "70%",
            }}
          />
        </View>
        <Button onPress={realizaRegistro} mode="contained">Registrar</Button>
        <View style={{ marginBottom: 10 }}></View>
        <Button onPress={() => navigation.navigate("LoginScreen")} mode="contained">
          Voltar ao login
        </Button>
      </View>
    </Surface>
  );
}