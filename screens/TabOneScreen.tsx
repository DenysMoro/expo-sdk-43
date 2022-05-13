import * as React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Updates from 'expo-updates';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [hasUpdates, setHasUpdates] = React.useState(false)

  React.useEffect(() => {
    const checkUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          setHasUpdates(true)
        }
      } catch (e) {
        console.log(e)
      }
    }

    checkUpdates()
  }, [])

  const onUpdatePress = React.useCallback(() => {
    const asyncFunc = async () => {
      await Updates.fetchUpdateAsync();
      // ... notify user of update ...
      await Updates.reloadAsync();
    }

    asyncFunc()
  }, [])

  return (
    <View style={styles.container}>
      {hasUpdates ? (
        <Text style={styles.text}>New updates available!</Text>
      ) : (
        <Text style={styles.text}>No updates!</Text>
      )}
      <TouchableOpacity onPress={onUpdatePress} style={styles.button}>
        <Text style={styles.buttonText}>Update app </Text>
      </TouchableOpacity>
      <Text style={styles.title}>Tab One - sdk 43c after update</Text>
      <View style={styles.separator} lightColor="#000" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: 200,
    height: 100,
    margin: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'montserrat-regular',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'montserrat-bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 40,
    fontFamily: 'montserrat-bold',
  },
});
