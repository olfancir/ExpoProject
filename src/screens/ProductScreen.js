import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

export default function ProductScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: { width: '50%', padding: 1 },
  image: { width: '100%', aspectRatio: 1 },
});