import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
} from 'react-native';
import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const LoginScreen = () => {
  return (
    <StyledContainer>
      <KeyboardAvoidingView
        keyboardVerticalOffset={45}
        behavior={Platform.select({ios: 'padding', android: undefined})}
        style={{flex: 1, paddingHorizontal: 20}}>
        <SafeAreaView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <LoginInput placeholder="Username" value="" />
          <LoginInput placeholder="Password" value="" />
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: '#000',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text style={{color: '#fff'}}>Login</Text>
          </Pressable>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </StyledContainer>
  );
};
const StyledContainer = styled.View`
  flex: 1;
`;
const LoginInput = styled.TextInput`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 100%;
`;
export default LoginScreen;
