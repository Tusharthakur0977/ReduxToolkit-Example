/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ProductsType} from '../Data/ProductsData';
import {addToCart, removeFromCart} from './redux/slices/CartSlice';
import {RootState} from './redux/store';
import Icon from 'react-native-vector-icons/AntDesign';

export type ProductProps = {
  product: ProductsType;
};
const Product: FC<ProductProps> = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const [isAdded, setIsAdded] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [count, setCount] = useState(1);

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
      dispatch(removeFromCart(product.id));
      console.log('Removing ID:', product.id);
      setLoadingRemove(false);
    }, 2000);
  };

  useEffect(() => {
    let result = cartItems.filter(data => {
      return data.id === product.id;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, product.id]);

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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <TouchableOpacity
                style={styles.rmvbtn}
                onPress={() => handleRemoveFromCart(product.id)}>
                {loadingRemove ? (
                  <ActivityIndicator size="small" color="#000" />
                ) : (
                  <Text style={styles.btntext}>Remove From Cart</Text>
                )}
              </TouchableOpacity>
              <View style={styles.qtyBtn}>
                <TouchableOpacity
                  style={styles.minus}
                  onPress={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }}>
                  <Icon name="minus" color={'black'} />
                </TouchableOpacity>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 20}}>
                  {count}
                </Text>
                <TouchableOpacity
                  style={styles.plus}
                  onPress={() => {
                    setCount(count + 1), handleAddToCart;
                  }}>
                  <Icon name="plus" color={'black'} />
                </TouchableOpacity>
              </View>
            </View>
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
  minus: {
    borderWidth: 1,
    marginVertical: 13,
    paddingVertical: 8,
    paddingHorizontal: 5,
    width: 30,
    alignItems: 'center',
    borderRadius: 8,
  },
  plus: {
    borderWidth: 1,
    marginVertical: 13,
    paddingVertical: 8,
    paddingHorizontal: 5,
    width: 30,
    alignItems: 'center',
    borderRadius: 8,
  },
  qtyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'flex-end',
    flex: 1,
    marginHorizontal: 5,
  },
});
