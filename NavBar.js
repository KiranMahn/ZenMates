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
    <>
      <SafeAreaView>
        <View style={styles.container}>
            <Button
            size="sm"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Signup </ButtonText>
            </Button>
            <Button
            size="sm"
            variant="outline"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            >
            <ButtonText>Login </ButtonText>
        </Button>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100vw',
    height: '10vh',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});