

import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { FlatList } from 'react-native-gesture-handler';
import ProductItem from '../components/shop/ProductItem';


const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const onViewDetail = () => {

    }

    const onAddToCart = () => {

    }

    return (
        <FlatList data={products} keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem product={itemData.item} onViewDetail={onViewDetail} onAddToCart={onAddToCart}></ProductItem>}
        />
    )
}

ProductOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Product List",
        headerLeft: () => null
    }
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;