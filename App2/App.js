import React, { Component } from 'react';

import { View, Text, TextInput, Button} from 'react-native';

import { styles } from './styles';

class App extends Component{

  constructor(props){

  super(props);

  this.state = {

    numero: ''

  };

this.adicionar = this.adicionar.bind(this);

this.retirar = this.retirar.bind(this);

  }

    adicionar(){

    this.setState({

      numero: this.state.numero +1

    });

  }

  retirar(){

    this.setState({

      numero: this.state.numero -1

    });

  }

  render(){

    return(

      <View style={styles.container}>

      <Text style={{fontSize: 30, textAlign: 'center', margin: 15}}>Contador de pessoas</Text>

      <Text style={{fontSize: 25, textAlign: 'center', margin: 15}}>Quantidade: {this.state.numero}</Text>

      <Button color='blue' title="+" onPress={this.adicionar} />
      <Button color='orange' title="-" onPress={this.retirar} />

      </View>

    );

  }

}

export default App;