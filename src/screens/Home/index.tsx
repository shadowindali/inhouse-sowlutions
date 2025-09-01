/* eslint-disable react-hooks/rules-of-hooks */
import { ListRenderItemInfo, Text, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchProducts } from '@/services/api/Products';
import { Item } from '@/types/Products';
import ItemModal from '@/components/ItemModal';
import ItemCard from '@/components/ItemCard';
import SkeletonView from '@/components/SkeletonView';
import ReorderableList, {
  ReorderableListReorderEvent,
  reorderItems,
} from 'react-native-reorderable-list';
import { homeStyles as styles } from '@/styles/Home';

const index = () => {
  const [data, setData] = useState<Item[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<Item | null | undefined>();

  // function for fetching data
  const fetchData = async () => {
    setIsFetching(true);
    const fetchedData = await fetchProducts();
    setData(fetchedData);
    setIsFetching(false);
  };

  // run the function on the first run
  useEffect(() => {
    fetchData();
  }, []);

  // header UI
  const renderHeader = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Our Products</Text>
      </View>
    );
  }, []);

  // keyExtractor for each item to improve performance and stop rerendering
  const keyExtractor = useCallback(
    (item: any, index: number) => `${item.id}-${index}`,
    [],
  );

  // Memorize improve performance and stop rerendering
  const MemorizedItem = React.memo(ItemCard);

  // Item render
  const renderItem = useCallback(({ item }: ListRenderItemInfo<Item>) => {
    return <MemorizedItem item={item} setIsVisible={setIsVisible} />;
  }, []);

  // Skeleton loader while waiting to fetch data
  const renderSkeleton = () => {
    return (
      <View style={styles.skeletonContainer}>
        <SkeletonView width={100} height={100} borderRadius={15} />
        <View style={styles.gap2}>
          <SkeletonView width={140} height={15} borderRadius={15} />
          <SkeletonView width={80} height={15} borderRadius={15} />
        </View>
        <SkeletonView width={70} height={15} borderRadius={15} />
      </View>
    );
  };

  const handleReorder = ({ from, to }: ReorderableListReorderEvent) => {
    setData(value => reorderItems(value, from, to));
  };

  // Memorizing components to prevent it from rerendering until needed
  const items = useMemo(() => {
    if (isFetching || data?.length === 0) {
      return (
        <View style={styles.skeletonColumns}>
          {Array.from({ length: 7 }, (_, index) => {
            return (
              <React.Fragment key={index}>{renderSkeleton()}</React.Fragment>
            );
          })}
        </View>
      );
    }
    return (
      <View style={styles.flex1}>
        <ReorderableList
          data={data}
          onReorder={handleReorder}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }, [isFetching, data, keyExtractor, renderItem]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {renderHeader()}
      {items}

      <ItemModal
        data={isVisible}
        onClose={() => {
          setIsVisible(null);
        }}
      />
    </SafeAreaView>
  );
};

export default index;
