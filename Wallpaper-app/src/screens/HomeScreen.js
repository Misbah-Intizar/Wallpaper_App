import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { categories } from '../data/categories';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* ✅ Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Wallpix</Text>
      </View>

      {/* ✅ Title */}
      <Text style={styles.title}>Categories</Text>

      {/* ✅ Category List */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Wallpapers', {
                category: item.title,
              })
            }
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#6a11cb', '#2575fc']} // vibrant gradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.card}
            >
              <Text style={styles.cardText}>{item.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark base
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#1F1F1F', // darker gray for header
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', // gold accent
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff', // bright for contrast
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 7,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff', // readable on gradient
  },
});
