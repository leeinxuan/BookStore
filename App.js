import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import BooksList from './src/component/BooksList';

export default function App() {
  return (
    
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <BooksList />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
