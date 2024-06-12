import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  console.log(cartItems);

  const cart = () => {};

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
      <Text style={styles.countText}>{cartItems.length}</Text>
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
