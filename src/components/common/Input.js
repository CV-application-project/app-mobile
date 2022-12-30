import React from 'react';
import { TextInput, View, Pressable } from 'react-native';
import { StyleCommon } from '../../themes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../../hooks';
export default function Input(props) {
  const { type } = props;

  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  return (
    <View style={StyleCommon.inputContainer}>
      <TextInput style={StyleCommon.inputField}  secureTextEntry={type==="password" ? passwordVisibility : false} {...props} />
      {type === 'password' ? (
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      ) : null}
    </View>
  );
}
