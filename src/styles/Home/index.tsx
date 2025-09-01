import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  ProductContainer: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  productText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  image: {
    width: 80,
    height: 100,
  },
  ProductTitle: {
    width: '45%',
    fontWeight: '600',
  },
  ProductPrice: {
    fontSize: 16,
    fontWeight: '800',
  },
  skeletonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gap2: { gap: 2 },
  flex1: { flex: 1 },
  safeAreaView: { flex: 1, backgroundColor: 'white' },
  skeletonColumns: { flex: 1, gap: 10, paddingHorizontal: 10 },
});
