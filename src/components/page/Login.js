import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View, Text} from 'react-native';

import Input from '../common/Input';
import {StyleLogin, StyleCommon} from '../../themes';
import logo from '../../../assets/logo.png';
export default function Login({ navigation }) {
  return (
    <SafeAreaView style={StyleLogin.container}>
      <Image source={logo} style={StyleLogin.logo} />
      <View style={StyleLogin.form}>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <TouchableOpacity style={{...StyleCommon.button, marginTop:40}} onPress={() => navigation.navigate('Home')}>
          <Text style={StyleCommon.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
