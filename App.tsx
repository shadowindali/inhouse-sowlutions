/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home/';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Home />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
export default App;
