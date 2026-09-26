import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Main from './src/components/Main';
// import { StatusBar } from 'expo-status-bar';
import {NativeRouter} from 'react-router-native';
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
      
      {/* <Text>welcome  to my first App</Text> */}
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
