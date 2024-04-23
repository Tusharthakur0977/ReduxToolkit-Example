import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  const cart = () => {
    console.warn(cartData);
  };
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titleText}>Product List</Text>
      <Icon
        name="shoppingcart"
        style={styles.iconStyle}
        size={24}
        color={'black'}
        onPress={cart}
      />
      <Text style={styles.countText}>{cartItems}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleText: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  countText: {
    position: 'absolute',
    right: 7,
    top: 4,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 2,
    minWidth: 20,
    textAlign: 'center',
    fontSize: 12,
  },
});
