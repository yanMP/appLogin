import { useState } from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import { Styles } from "../config/styles";

export default function registerScreen({navigation}){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repedirSenha, setRepedirSenha] = useState("");
    const [rua, setRua] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
   

    


return(
    <View style={Styles.container}>
    <Text>faça seu registro</Text>

    <TextInput
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite sua senha"
        onChangeText={setSenha}
        value={senha}
      />
      <TextInput
        placeholder="Digite novamente sua senha"
        onChangeText={setRepedirSenha}
        value={repedirSenha}
      />
      <TextInput
        placeholder="Digite sua rua"
        onChangeText={setRua}
        value={rua}
      />
      <TextInput
        placeholder="Digite seu CEP"
        onChangeText={setCep}
        value={cep}
      />
      <TextInput
        placeholder="Digite sua cidade"
        onChangeText={setCidade}
        value={cidade}
      />
      <TextInput
        placeholder="Digite seu estado"
        onChangeText={setEstado}
        value={estado}
      />
    </View>
)}