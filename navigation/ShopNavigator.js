import Colors from '../constants/Colors';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/ProductOverviewScreen';

const ProductNavigator = createStackNavigator({
    productOverviewScreen: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        backgroundColor: Colors.primary.background
    },
    headerTintColor: Colors.primary.text
})

export default createAppContainer(ProductNavigator);