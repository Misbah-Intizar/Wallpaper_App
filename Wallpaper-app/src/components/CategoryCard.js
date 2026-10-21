import { COLORS } from '../constants/colors';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
       {/* ✅ Always wrap strings inside <Text> */}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}





const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
