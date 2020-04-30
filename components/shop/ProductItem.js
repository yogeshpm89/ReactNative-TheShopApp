

import React from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors';


const ProductItem = props => {
    const product = props.product;
    return <View style={styles.product}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: product.imageUrl }}></Image>
        </View>
        <View style={styles.details}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
            <Button color={Colors.primary.background} title="View details" onPress={product.onViewDetail}></Button>
            <Button color={Colors.primary.background} title="Add to cart" onPress={product.onAddToCart}></Button>
        </View>
    </View>
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 1
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        height: '25%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '15%'
    }
});

export default ProductItem;