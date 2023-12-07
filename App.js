import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';

import { useState } from 'react';

import colors from './src/utils/colors';
import Focus from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          selectedSubject={currentSubject}
          onTimerEnd={(selectedSubject) => {
            setHistory([...history, selectedSubject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
