import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

export default function DetailScreen({ route }) {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      {/* Wallpaper Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Wallpaper Preview</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, // dark main background
  },
  image: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.card, // dark card-like background
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text, // bright for dark background
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.accent, // accent color for button
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.text, // white text on accent button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
