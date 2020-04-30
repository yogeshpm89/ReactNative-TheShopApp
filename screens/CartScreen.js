

import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';


const CartScreen = props => {
    return (
        <Text>CartScreen</Text>
    )
}

CartScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "CartScreen",
        headerLeft: () => null
    }
};

const styles = StyleSheet.create({});

export default CartScreen;