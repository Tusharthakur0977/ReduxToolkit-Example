/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import {Products, ProductsType} from './Data/ProductsData';
import {useSelector} from 'react-redux';
import {RootState} from './components/redux/store';

const App = () => {
  // const cartItems = useSelector((state: RootState) => state.cart);
  return (
    <View style={{flex: 1, backgroundColor: '#F5F2F0'}}>
      <Header />
      <ScrollView>
        {Products.map(item => (
          <Product key={item.id} product={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
