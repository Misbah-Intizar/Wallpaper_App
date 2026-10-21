
import { View, Text, StyleSheet, FlatList } from 'react-native';
import WallpaperCard from '../components/WallpaperCard';
import { wallpapers } from '../data/wallpapers';
import { COLORS } from '../constants/colors'; // ✅ theme import

export default function WallpapersScreen({ route, navigation }) {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      {/* ✅ Category Title */}
      <Text style={styles.title}>{category}</Text>

      {/* ✅ Wallpapers List */}
      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <WallpaperCard
            image={item.image}
            onPress={() =>
              navigation.navigate('Detail', { image: item.image })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, // ✅ dark background
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text, // ✅ white for dark theme
    marginVertical: 15,
    marginLeft: 10,
  },
});
