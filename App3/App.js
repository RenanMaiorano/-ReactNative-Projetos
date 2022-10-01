import React, { Component } from 'react';

import { View, Text, TextInput, Button } from 'react-native';
import {styles} from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multiplicar: 0,
      num1: 0,
      num2: 0,
    };
    this.Multiplicar = this.Multiplicar.bind(this);
  }

  Multiplicar() {
    this.setState({
      multiplicar: this.state.num1 * this.state.num2,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Multiplicação de números</Text>

        <TextInput
          style={styles.texto}
          placeholder="Primeiro número:"
          onChangeText={ (n1) => this.setState({num1: n1}) }
        />

        <TextInput
          style={styles.texto}
          placeholder="Segundo número:"
          onChangeText={ (n2) => this.setState({num2: n2}) }
        />

        <Button
          color="green"
          title="Multiplicar"
          onPress={this.Multiplicar}
        />

        <Text style={styles.titulo}>
          {' '}
          Resultado: {this.state.multiplicar}
        </Text>
      </View>
    );
  }
}

export default App;