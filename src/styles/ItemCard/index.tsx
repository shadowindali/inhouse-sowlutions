import { StyleSheet } from 'react-native';

export const ItemCardStyles = StyleSheet.create({
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
});
