import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
