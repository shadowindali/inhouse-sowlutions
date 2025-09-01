import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Item } from '../types/Products';
import { useReorderableDrag } from 'react-native-reorderable-list';
import { ItemCardStyles as styles } from '../styles/ItemCard';

const ItemCard = ({
  item,
  setIsVisible,
}: {
  item: Item;
  setIsVisible: (items: Item) => void;
}) => {
  // function used to darg item
  const drag = useReorderableDrag();

  return (
    <TouchableOpacity
      style={[styles.ProductContainer]}
      onLongPress={drag}
      onPress={() => setIsVisible(item)}
    >
      <Image
        source={{ uri: item?.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.ProductTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.ProductPrice}>{item.price} $</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
