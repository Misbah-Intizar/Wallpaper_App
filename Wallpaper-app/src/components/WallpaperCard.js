
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

export default function WallpaperCard({ image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: COLORS.card,        // card background from theme
    shadowColor: COLORS.shadow,         // shadow from theme
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.5,                 // slightly stronger shadow for dark theme
    shadowRadius: 10,
    elevation: 7,                        // Android shadow
  },
  image: {
    height: 260,
    width: '100%',
    borderRadius: 18,                    // ensures image corners match card
  },
});
