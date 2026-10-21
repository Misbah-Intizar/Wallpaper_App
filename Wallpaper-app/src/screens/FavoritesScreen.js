
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="heart-off" size={80} color={COLORS.textLight} />
      <Text style={styles.title}>No favorites yet!</Text>
      <Text style={styles.subtitle}>You haven't added any wallpapers yet. Try downloading or saving wallpapers from the Home screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginTop: 10,
    textAlign: 'center',
  },
});
