import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

export class Base extends Component {

  constructor(props){
    super(props);
    this.state = {

        input1:'',
        input2:'',

        color: 'grey',
        fontSize: 12,
        marginLeft:10,
        marginTop:7,
        textAlign:'left',
    };
};

_handlePress() {
  
  const peso = this.state.input1;
  const altura = this.state.input2;
  
  const imc = peso / (altura * altura);
  if (imc < 18.5) {
    this.setState({
      textValue: 'Peso insuficiente',
      color: 'green',
    })
  } else if (imc >= 18.5 && imc <= 24.9) {
    this.setState({
      textValue: 'Peso Normal',
      color: 'green',
    })
  } else if (imc >= 25 && imc <= 26.9) {
    this.setState({
      textValue: 'Sobrepeso grado I',
      color: 'green',
    })
  } else if (imc >= 27 && imc <= 29.9) {
    this.setState({
      textValue: 'Sobrepeso grado II (preobesidad)',
      color:'orange'
    })
  } else if (imc >= 30 && imc <= 34.9) {
    this.setState({
      textValue: 'Obesidad de tipo I',
      color:'orange'
    })
  } else if (imc >= 35 && imc <= 39.9) {
    this.setState({
      textValue: 'Obesidad de tipo II',
      color:'orange'
    })
  } else if (imc >= 40 && imc <= 49.9) {
    this.setState({
      textValue: 'Obesidad de tipo III (mórbida)',
      color:'red'
    })
  } else if (imc >= 50) {
    this.setState({
      textValue: 'Obesidad de tipo IV (extrema)',
      color:'red'
    })
  } else if (isNaN(imc)) {
    this.setState({
      textValue: 'Debes introducir algun valor!',
      color:'red'
    })
    
  }
};

  render() {
    return (
      <>
      <View style={styles.basePurple}>

            {/* Header Calcular IMC */}
            {/*Con este scroll View el teclado se superpone*/}
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'> 
            <View style={styles.seccion1}>
                <Text style={styles.title}>Calculadora IMC</Text>
            </View>

            <View style={styles.baseWhite}>

                {/* Titulo Datos */}
                <Text style={styles.titleDatos}>Datos</Text>

                {/* Input Peso */}
                <Text style={styles.Titleinput1}>PESO</Text>

                
                <TextInput style={styles.input1}
                    maxLength={3}
                    editable={true}
                    underlineColorAndroid={'grey'}
                    placeholder='Introduce tu peso...'
                   
                    
                    keyboardType = 'numeric'
                    keyboardAppearance='keyboardWillHide'
                    onChangeText={(text) => this.setState({input1:text})}
                />

                {/* Input Altura */}
                <Text style={styles.Titleinput1}>ALTURA</Text>
                <TextInput style={styles.input1}
                    maxLength={4}
                    editable={true}
                    underlineColorAndroid={'grey'}
                    placeholder='Introduce tu altura...'
                    keyboardType = 'numeric'
                    onChangeText={(text) => this.setState({input2:text})}
                />

                {/* Boton */}
                <View style={styles.ButtonCalcular}>
                    <Text style={styles.textButtonCalcular}
                    onPress={() => this._handlePress()}>
                    Calcular IMG</Text>
                </View>

                {/* Text resultado */}
                <Text style={styles.textoResultado}>Resultado:</Text>

                {/* Text tipo de obesidad */}
                <Text style={{ fontSize:this.state.fontSize, marginLeft:this.state.marginLeft, 
                  marginTop:this.state.marginTop, textAlign:this.state.textAlign, color: this.state.color}}>{this.state.textValue}</Text>


            </View>

            {/* Footer */}
            <View style={styles.baseBottom}>
           
                <Text style={styles.titleBottom}>Created for 2n DAM</Text>
                
            </View>
            </ScrollView>
      </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  basePurple: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'purple'
  },
  baseWhite: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    marginLeft:5,
    marginRight:5,
    marginTop:15,
    
  },
  baseBottom:{
    flex: 0.55,
    textAlign:'left',
    fontSize:30,
    backgroundColor:'purple',
    marginTop:10
  },
  title:{
      textAlign:'center',
      marginTop:15,
      color:'red',
      fontSize:30
  },
  titleBottom:{
    textAlign:'left',
    marginTop:10,
    marginLeft:5,
    color:'gray',
    fontSize:15
  },
  titleDatos:{
    textAlign:'left',
    marginTop:15,
    marginLeft:15,
    color:'red',
    fontSize:30
  },
  Titleinput1:{
    marginLeft:10,
    marginRight:10,
    color:'blue',
    marginTop:10,
    fontWeight:'bold'
    
 },
  input1:{
      marginLeft:10,
      marginRight:10
  },
  textButtonCalcular:{
    color:'#1986C4',
    fontSize:15,
    fontWeight:'bold',
    margin:5,
    textAlign:'center'
  },
  ButtonCalcular:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    margin:5,
    textAlign:'center',
    borderColor:'#1986C4',
    borderWidth:0.5,
    borderRadius:5
  },
  textoResultado:{
    color:'black',
    fontSize:12,
    marginLeft:10,
    marginTop:7,
    textAlign:'left'
  }
});