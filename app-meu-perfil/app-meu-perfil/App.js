import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Renan Campanhã Maiorano Braga';
    let img = 'https://i.pinimg.com/200x150/f7/f6/60/f7f66062e1fbd1adf17da8e045af7caa.jpg';
 
    return(
      
      <View>

        <Text style={{ fontSize: 30, alignSelf: 'center', margin: 15 }}>{nome}</Text>

        <Image
          source={{ uri: img }}
          style={{ width: 350, height: 350, alignSelf: 'center'}}
        />
        
        <Text style={{color: 'black', fontSize: 25, margin: 15, alignSelf: 'center'}}>
          Dados Pessoais:
        </Text>
        <Text style ={{fontSize: 20, alignSelf: 'center'}}> Idade: 21</Text>
        <Text style ={{fontSize: 20, alignSelf: 'center'}}> Cidade: Praia Grande - SP</Text>
        <Text style ={{fontSize: 20, alignSelf: 'center'}}> Data de nascimento: 24/05/2001</Text>

        <Text style={{color: 'black', fontSize: 25, margin: 15, alignSelf: 'center'}}>
          Formação:
        </Text>
        <Text style ={{ fontSize: 20, alignSelf: 'center'}}>Estudante de Análise e Desenvolvimento de Sistemas (FATEC-PG)</Text>
        <Text style ={{ fontSize: 20, alignSelf: 'center'}}>Ensino Médio - Colégio COC Novomundo</Text>

        <Text style={{color: 'black', fontSize: 25, margin: 15, alignSelf: 'center'}}>
          Experiência:
        </Text>
        <Text style ={{ fontSize: 20, alignSelf: 'center'}}>Estagiário em Suporte Técnico - Prefeitura de Praia Grande</Text>
        <Text style ={{ fontSize: 20, alignSelf: 'center'}}>Desenvolvedor Trainee SAP ABAP</Text>

        <Text style={{color: 'black', fontSize: 25, margin: 15, alignSelf: 'center'}}>
          Projetos:
        </Text>
        <Text style ={{ fontSize: 20, alignSelf: 'center'}}>GitHub: https://github.com/RenanMaiorano</Text>

      </View>
    )
  }
}
 
export default App;