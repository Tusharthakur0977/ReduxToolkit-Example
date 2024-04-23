/* eslint-disable @typescript-eslint/no-shadow */
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';
import {ProductsType} from '../Data/ProductsData';

export type ProductProps = {
  product: ProductsType;
};
const Product: FC<ProductProps> = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);

  const handleAddToCart = (product: ProductsType) => {
    setLoadingAdd(true);
    setTimeout(() => {
      dispatch(addToCart(product));
      setLoadingAdd(false);
    }, 2000);
  };

  const handleRemoveFromCart = (product: ProductsType) => {
    setLoadingRemove(true);
    setTimeout(() => {
      dispatch(removeFromCart(product.name));
      setLoadingRemove(false);
    }, 2000);
  };

  useEffect(() => {
    let result = cartItems.filter((data: ProductsType) => {
      return data.name === product.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, product.name]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.info}>
          <Text style={styles.text}>
            <Text style={styles.title}>Name : </Text>
            {product.name}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.title}>Color : </Text>
            {product.color}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.title}>Price : </Text>
            {product.price}
          </Text>
          {isAdded ? (
            <TouchableOpacity
              style={styles.rmvbtn}
              onPress={() => handleRemoveFromCart(product)}>
              {loadingRemove ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text style={styles.btntext}>Remove From Cart</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleAddToCart(product)}>
              {loadingAdd ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text style={styles.btntext}>Add To Cart</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
    gap: 10,
  },
  image: {
    width: 100,
    height: 130,
    margin: 10,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  btntext: {
    color: 'black',
  },
  btn: {
    borderWidth: 1,
    marginVertical: 15,
    paddingVertical: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
  },
  rmvbtn: {
    borderWidth: 1,
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 130,
    alignItems: 'center',
    borderRadius: 10,
  },
});
