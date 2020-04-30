

import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';


const OrderScreen = props => {
    return (
        <Text>OrderScreen</Text>
    )
}

OrderScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "OrderScreen",
        headerLeft: () => null
    }
};

const styles = StyleSheet.create({});

export default OrderScreen;