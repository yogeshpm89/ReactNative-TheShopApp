

import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';


const ProductDetailScreen = props => {
    return (
        <Text>ProductDetailScreen</Text>
    )
}

ProductDetailScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "ProductDetailScreen",
        headerLeft: () => null
    }
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;