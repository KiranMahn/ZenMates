import React from 'react';
import {
    Button,
    ButtonText,
    ButtonIcon,
    ButtonSpinner,
    ButtonGroup,
  } from "@gluestack-ui/themed";
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function NavBar() {
  return (
    
    <View style={styles.container}>
      <Button
      size="sm"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      style={[
        styles.button, 
        {
          alignSelf: 'flex-start',
        },
      ]}>
        <ButtonText>Signup </ButtonText>
      </Button>
      <Button
      size="sm"
      variant="outline"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      style={[
        styles.button, 
        {
          alignSelf: 'flex-start',
        },
      ]}>
        <ButtonText>Login </ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    //backgroundColor: 'blue',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '30%',
    maxWidth: '40%',
    textAlign: 'center',
  }
});