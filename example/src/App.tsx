import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AwsChimeView } from 'react-native-aws-chime';

export default function App() {
  return (
    <View style={styles.container}>
      <AwsChimeView style={styles.box} tileId={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
