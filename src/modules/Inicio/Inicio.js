import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:''
    };
  }

  goAccess =()=> {
    if (this.existUser(this.state.username, this.props.users)){
      this.props.clickLogin();
    }else{
      Alert.alert(
        'Atenção!',
        'Usuário não encontrado',
        [
            {text: 'Ok', onPress: () => {}},
        ],
        { cancelable: false }
      );
    
    }
  }
  existUser (value, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return true;
        }
    }
    return false; 
  }
  openRegister(){
    this.props.clickOpenRegister();
  }
  render() {
    return(
        <View style={styles.container}>
          <StatusBar style="light-content"/>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.text}>
            Para continuar, precisamos que você informe seu usuário
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu usuário"
              underlineColorAndroid="rgba(0,0,0,0)"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
            <TouchableOpacity style={styles.button} onPress={()=>{this.goAccess()}}>
              {this.state.loading
              ?<ActivityIndicator size="small" color="#FFFF"/>
              :<Text style={styles.buttonText}>Logar</Text>}

            </TouchableOpacity>
            <TouchableOpacity style={styles.registerUser} onPress={()=>{this.openRegister()}}>
              <Text style={styles.textRegister}>Registrar Usuário</Text>
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}
export default connect(
  state => ({
    users:state.usuario.users
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Inicio)
